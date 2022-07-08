const router = require("express").Router();
import {  getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } from "../../controllers/user-controller";


// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

export default router;