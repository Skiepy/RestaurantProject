// import express & bcrypt
import express from "express";
import bcrypt from "bcrypt";

// Users
// import function from controller
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controllers/user.js";

// init express router
const router = express.Router();

// Get All User
router.get('/users', showUsers);

// Get Single User
router.get('/users/:id', showUserById);

// Create New User
router.post('/users', createUser);

// Update User
router.put('/users/:id', updateUser);

// Delete User
router.delete('/users/:id', deleteUser);

// Login
router.post('/users/login', async (req, res) => {
    try {
        const password = req.body.password;
        const hashed = req.body.hashed;
        const passwordMatch = await bcrypt.compare(password, hashed);
        if (!passwordMatch) {
            return res.json(false);
        } else {
            res.json(true);
        }
    } catch (error) {
        console.log(error);
    }
})

// Booking
// import function from controller
import {showBookings, showBookingById, showBookingByUserId, createBooking, updateBooking, deleteBooking} from "../controllers/booking.js";

// Get All bookings
router.get('/bookings', showBookings);

// Get Single booking
router.get('/bookings/:id', showBookingById);

// Get Single booking
router.get('/bookingsByUser/:id', showBookingByUserId);

// Create New booking
router.post('/bookings', createBooking);

// Update booking
router.put('/bookings/:id', updateBooking);

// Delete booking
router.delete('/bookings/:id', deleteBooking);


// export default router
export default router;