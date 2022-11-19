// Import function from user Model
import { getBookings, getBookingById, getBookingByUserId, insertBooking, updateBookingById, deleteBookingById } from "../models/bookingModels.js";

// Get All bookings
export const showBookings = (req, res) => {
    getBookings((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single booking 
export const showBookingById = (req, res) => {
    const id = req.params.id;
    getBookingById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single booking 
export const showBookingByUserId = (req, res) => {
    const id = req.params.id;
    getBookingByUserId(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New booking
export const createBooking = (req, res) => {
    const data = req.body;
    insertBooking(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update booking
export const updateBooking = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateBookingById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete booking
export const deleteBooking = (req, res) => {
    const id = req.params.id;
    deleteBookingById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}