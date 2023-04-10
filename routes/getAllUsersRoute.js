const express = require("express");
const usersss = require("../controllers/userController");
// const eventController = require("./../controllers/eventController");
// const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").post(usersss.getAllUsers);

router.route("/getSpecific").post(usersss.getSpecificYear);

module.exports = router;
