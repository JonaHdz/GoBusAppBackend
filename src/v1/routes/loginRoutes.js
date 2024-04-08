const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/loginController");


router.post("/", loginController.loginUser);
router.post("/register", loginController.registerNewUser);

module.exports = router;