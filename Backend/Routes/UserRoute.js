const express = require("express");
const { getAllUsers } = require("../Controllers/UserController");

const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;
