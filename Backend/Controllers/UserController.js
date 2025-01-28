const User = require("../Models/UserModel");

const getAllUsers = async (req, res, next) => {
  let users;

  try {
    // Fetch all users from the database
    users = await User.find();
  } catch (err) {
    // Log the error and send a 500 response
    console.error(err);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching users" });
  }

  // If no users found
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }

  // Send the list of users
  return res.status(200).json({ users });
};

module.exports = {
  getAllUsers,
};
