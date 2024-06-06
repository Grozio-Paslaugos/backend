const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

class UserService {
  async registerUser(name, email, password, phone) {
    if (!name || !email || !password || !phone) {
      throw new Error("Please fill all fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    return user;
  }

  async loginUser(email, password) {
    if (!email || !password) {
      throw new Error("Please fill all fields");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };
  }

  async logoutUser(userId) {
    // Implement any logic needed for logging out a user, if necessary
    return { message: "User logged out successfully" };
  }

  async getUser(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getUsers() {
    const users = await User.find();
    return users;
  }

  async deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return { message: "User deleted successfully" };
  }
}

module.exports = new UserService();
