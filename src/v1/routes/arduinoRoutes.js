const express = require("express");
const router = express.Router();
const arduinoController = require("../../controllers/arduinoController.js");


router.get("/a", arduinoController.loginUser);


module.exports = router;