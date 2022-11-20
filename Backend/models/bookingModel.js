// Import connection
import db from "../config/database.js";

// Get ALL Bookings
export const getBookings = (result) => {
    db.query("SELECT * FROM dbresto.booking", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single Booking
export const getBookingByUserId = (id, result) => {
    db.query("SELECT * FROM dbresto.booking WHERE users_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Get single Booking
export const getBookingById = (id, result) => {
    db.query("SELECT * FROM dbresto.booking WHERE users_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert a booking in the database
export const insertBooking = async (data, result) => {
    db.query("INSERT INTO dbresto.booking SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update booking to Database
// A REFAIRE EN FONCTION DE LA TABLE
export const updateBookingById = (data, id, result) => {
    db.query("UPDATE dbresto.booking SET users_id = ?, firstname = ?, lastname = ?, passport = ?, age = ?, occupation = ?, citizenship = ?, nbPeople = ?, menu = ?, date = ?, allergies = ?, diet = ?, smoking = ? WHERE booking_id = ?", [data.users_id, data.firstname, data.lastname, data.passport, data.age, data.occupation, data.citizenship, data.nbPeople, data.menu, data.date, data.allergies, data.diet, data.smoking, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete booking of the Database
export const deleteBookingById = (id, result) => {
    db.query("DELETE FROM dbresto.booking WHERE booking_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}