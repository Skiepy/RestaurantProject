// import express & bcrypt
import express from "express";
import bcrypt from "bcrypt";

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


// export default router
export default router;