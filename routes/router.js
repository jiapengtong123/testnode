const express = require("express");
const router = express.Router();
// get controller
const users_controller = require("../controllers/users_controller");

// write router functions

// get all users
router.get("/users", users_controller.all_users);

// create a new user
router.get("/createUser", users_controller.create_user);

// exports router
module.exports = router;