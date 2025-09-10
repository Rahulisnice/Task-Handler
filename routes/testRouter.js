const express = require("express");
const { testingController } = require("../controller/testController");

//router obj
const router = express.Router();

//Routes
router.get("/", testingController)
module.exports = router;