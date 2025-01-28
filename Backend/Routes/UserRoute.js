const express = require("express");
const { getAllUsers, addUsers, getById } = require("../Controllers/UserController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUsers);
router.get("/:id", getById);

module.exports = router;
