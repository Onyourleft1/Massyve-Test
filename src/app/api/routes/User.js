const express = require("express");
const router = express.Router();
const controller = require("../controller/User");

// router.get("/get", controller.get);
router.get("/get", controller.get);

module.exports = router;
