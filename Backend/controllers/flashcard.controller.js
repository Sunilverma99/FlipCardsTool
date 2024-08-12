import Flashcard from '../models/flashcard.model.js';
import errHandler from '../utlies/error.js';
import { mysqlConnection } from '../index.js';
const createFlashcard = async (req, res, next) => {
    const { question, answer, category, tags } = req.body;
    console.log(req.body);
    if (!question || !answer || !category) {
      return next(errHandler(400, "Question, answer, and category are required"));
    }
    try {
      mysqlConnection.query(
        "INSERT INTO flashcard (question, answer, category, tags) VALUES (?, ?, ?, ?)",
        [question, answer, category, JSON.stringify(tags)], 
        (err, result) => {
          if (err) {
            console.error("MySQL Error: ", err);
            return next(errHandler(500, "Internal Server Error"));
          }

          const flashcardId = result.insertId;
          mysqlConnection.query(
            "SELECT * FROM flashcard WHERE cardID = ?",
            [flashcardId],
            (err, flashcardResult) => {
              if (err) {
                console.error("MySQL Error: ", err);
                return next(errHandler(500, "Internal Server Error"));
              }
  
              const savedFlashCard = flashcardResult[0]; 
  
              res.status(201).json(savedFlashCard);
            }
          );
        }
      );
    } catch (error) {
      console.error("Error: ", error);
      return next(errHandler(500, "Internal Server Error"));
    }
  };


  const getFlashcards = async (req, res, next) => {
    try {
      mysqlConnection.query("SELECT * FROM flashcard", (err, results) => {
        if (err) {
          console.error("MySQL Error: ", err);
          return next(errHandler(500, "Internal Server Error"));
        }

        const formattedResults = results.map(flashcard => {
          if (flashcard.tags) {
            flashcard.tags = flashcard.tags
              .replace(/^"|"$/g, '')  // Remove starting and ending double quotes
              .split(',')
              .map(tag => tag.trim());
          }
          return flashcard;
        });
  
        res.status(200).json(formattedResults);
      });
    } catch (error) {
      console.error("Error: ", error);
      return next(errHandler(500, "Internal Server Error"));
    }
  };
  

  const getFlashcardById = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      mysqlConnection.query(
        "SELECT * FROM flashcard WHERE cardID = ?",
        [id],
        (err, results) => {
          if (err) {
            console.error("MySQL Error: ", err);
            return next(errHandler(500, "Internal Server Error"));
          }
  
          if (results.length === 0) {
            return res.status(404).json({ message: "Flashcard not found" });
          }
  
          // Transform tags from comma-separated string to an array
          const flashcard = results[0];
if (flashcard && flashcard.tags) {
  flashcard.tags = flashcard.tags
    .replace(/^"|"$/g, '')  // Remove starting and ending double quotes
    .split(',')
    .map(tag => tag.trim());
}

  
          res.status(200).json(flashcard);
        }
      );
    } catch (error) {
      console.error("Error: ", error);
      return next(errHandler(500, "Internal Server Error"));
    }
  };
  const updateFlashcard = async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
  
    const setClause = Object.keys(updates)
      .map((key, index) => `${key} = ?`)
      .join(", ");
    const values = [...Object.values(updates), id];
  
    try {
      mysqlConnection.query(
        `UPDATE flashcard SET ${setClause} WHERE cardID = ?`,
        values,
        (err, result) => {
          if (err) {
            console.error("MySQL Error: ", err);
            return next(errHandler(500, "Internal Server Error"));
          }

          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Flashcard not found" });
          }
  
          mysqlConnection.query(
            "SELECT * FROM flashcard WHERE cardID = ?",
            [id],
            (err, flashcardResult) => {
              if (err) {
                console.error("MySQL Error: ", err);
                return next(errHandler(500, "Internal Server Error"));
              }

              res.status(200).json(flashcardResult[0]);
            }
          );
        }
      );
    } catch (error) {
      console.error("Error: ", error);
      return next(errHandler(500, "Internal Server Error"));
    }
  };
  const deleteFlashcard = async (req, res, next) => {
    const { id } = req.params;
    try {
      mysqlConnection.query(
        "DELETE FROM flashcard WHERE cardID = ?",
        [id],
        (err, result) => {
          if (err) {
            console.error("MySQL Error: ", err);
            return next(errHandler(500, "Internal Server Error"));
          }
  
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Flashcard not found" });
          }
  
          
          res.status(200).json({ message: "Flashcard deleted successfully" });
        }
      );
    } catch (error) {
      console.error("Error: ", error);
      return next(errHandler(500, "Internal Server Error"));
    }
  };

export { createFlashcard, getFlashcards, getFlashcardById, updateFlashcard, deleteFlashcard };