
import bcrypt from "bcrypt"
import errHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken"
import { mysqlConnection } from "../index.js";

const signUp = async (req, res, next) => {
    const { userName, email, password ,isAdmin} = req.body;
    console.log(req.body);

    // Validate input
    if (!userName || !email || !password) {
        return next(errHandler(400, "All fields are required"));
    }

    try {
        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // SQL query to insert a new user
        mysqlConnection.query(
            "INSERT INTO users (userName, email, password) VALUES (?, ?, ?)",
            [userName, email, hashPassword,isAdmin],
            (err, result) => {
                if (err) {
                    // Log the error for debugging and pass the error to the next middleware
                    console.error("MySQL Error: ", err);
                    return next(errHandler(500, "Internal Server Error"));
                }

                // Log the result for debugging
                console.log(result);

                // Send a success response
                res.status(201).json({ message: "User created successfully" });
            }
        );
    } catch (err) {
        // Handle errors that may occur during the password hashing or other async operations
        console.error("Error: ", err);
        return next(errHandler(500, "Internal Server Error"));
    }
};
const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // SQL query to find a user by email
        mysqlConnection.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            async (err, results) => {
                if (err) {
                    console.error("MySQL Error: ", err);
                    return res.status(500).json({ message: "Internal Server Error" });
                }

                // Check if user exists
                if (results.length === 0) {
                    return res.status(400).json({ message: "Invalid credentials" });
                }

                const user = results[0]; // Get the user from the query results

                // Compare the provided password with the hashed password in the database
                const isMatch = await bcrypt.compare(password, user.password);
                console.log(isMatch);
                if (!isMatch) {
                    return res.status(400).json({ message: "Invalid credentials" });
                }

                // Generate JWT token
                const token = jwt.sign(
                    { id: user.id, isAdmin: user.isAdmin },
                    process.env.JWT_TOKEN,
                    { expiresIn: '30d' }
                );

                // Send the response with the token in a cookie
                res.status(200).cookie('access_token', token, {
                    httpOnly: true,
                    sameSite: 'None',
                    secure: true,
                    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
                }).json({
                    id: user.id,
                    userName: user.userName,
                    email: user.email,
                    isAdmin: user.isAdmin
                });
            }
        );
    } catch (error) {
        console.log(error);
        next(error);
    }
};
    
const signOut = async (req, res, next) => {

    res.clearCookie('access_token').json({ message: "Logged out" });
}

export {signUp,signIn,signOut};
