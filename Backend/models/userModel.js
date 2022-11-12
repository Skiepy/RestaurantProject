// Import connection
import db from "../config/database.js";

// Import bcrypt
import bcrypt, { hash } from "bcrypt";

// Get ALL users
export const getUsers = (result) => {
    db.query("SELECT * FROM dbresto.users", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single user
export const getUserById = (id, result) => {
    db.query("SELECT * FROM dbresto.users WHERE users_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert user in the database
export const insertUser = async (data, result) => {
    // Hash password using bcrypt
    const hash = await bcrypt.hash(data.password, 10);
    data = {
        email: data.email,
        password: hash
    };
    db.query("INSERT INTO dbresto.users SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update user to Database
// A REFAIRE EN FONCTION DE LA TABLE
export const updateUserById = (data, id, result) => {
    db.query("UPDATE dbresto.users SET email = ?, password = ?, firstname = ?, lastname = ? WHERE users_id = ?", [data.email, data.password, data.firstname, data.lastname, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete user to Database
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM dbresto.users WHERE users_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
