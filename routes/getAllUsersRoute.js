const express = require("express");
const usersss = require("../controllers/userController");
// const eventController = require("./../controllers/eventController");
// const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(usersss.getAllUsers);

module.exports = router;
