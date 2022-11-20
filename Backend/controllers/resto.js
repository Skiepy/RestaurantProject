// Import function from resto Model
import { getDates, getDateByDate, insertDate, updateDateByDate, deleteDateByDate } from "../models/restoModel.js";

// Get All dates
export const showDates = (req, res) => {
    getDates((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single booking 
export const showDateByDate = (req, res) => {
    const date = req.params.date;
    getDateByDate(date, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New date
export const createDate = (req, res) => {
    const data = req.body;
    insertDate(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update booking
export const updateDate = (req, res) => {
    const data = req.body;
    const date = req.params.date;
    updateDateByDate(data, date, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete booking
export const deleteDate = (req, res) => {
    const date = req.body.date;
    deleteDateByDate(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}