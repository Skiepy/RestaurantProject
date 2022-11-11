// import express
import express from "express";
 
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
 
// export default router
export default router;