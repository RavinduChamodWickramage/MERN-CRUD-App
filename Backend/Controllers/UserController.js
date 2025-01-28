const User = require("../Models/UserModel");

// Get all users
const getAllUsers = async (req, res, next) => {
  let users;

  try {
    // Fetch all users from the database
    users = await User.find();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching users" });
  }

  // If no users found
  if (!users || users.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }

  // Send the list of users
  return res.status(200).json({ users });
};

// Insert data
const addUsers = async (req, res, next) => {
  const { name, email, password, dob } = req.body;

  // Validate request payload
  if (!name || !email || !password || !dob) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let user;

  try {
    // Create a new user instance
    user = new User({ name, email, password, dob });
    await user.save();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "An error occurred while adding user" });
  }

  // Send a success response
  return res.status(201).json({ user });
};

const getById = async (req, res, next) => {

  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching user by id" });
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });


}

module.exports = {
  getAllUsers,
  addUsers,
  getById,
};
