const express = require("express");
const { getAllUsers, addUsers } = require("../Controllers/UserController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUsers);

module.exports = router;
