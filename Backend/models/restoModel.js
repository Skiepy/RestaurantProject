// Import connection
import db from "../config/database.js";

// Get ALL dates
export const getDates = (result) => {
    db.query("SELECT * FROM dbresto.resto", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single Date
export const getDateByDate = (date, result) => {
    db.query("SELECT * FROM dbresto.resto WHERE date = ?", [date], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert a date in the database
export const insertDate = async (data, result) => {
    db.query("INSERT INTO dbresto.resto SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Date to Database
// A REFAIRE EN FONCTION DE LA TABLE
export const updateDateByDate = (data, date, result) => {
    db.query("UPDATE dbresto.resto SET resto_id = ?, smokingSeats = ?, nonSmokingSeats = ? WHERE date = ?", [data.resto_id, data.smokingSeats, data.nonSmokingSeats, date], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete date of the Database
export const deleteDateByDate = (date, result) => {
    db.query("DELETE FROM dbresto.date WHERE date = ?", [date], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}