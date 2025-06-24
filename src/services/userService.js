const User = require('../models/userModel');

class UserService {
  static async createUser(name, email) {
    if (!email) throw new Error('Email is required');
    
    const user = new User({ name, email });
    return await user.save();
  }

  static async getUserById(id) {
    return await User.findById(id);
  }

  static async updateUser(id, updates) {
    return await User.findByIdAndUpdate(id, updates, { new: true });
  }

  static async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }

  static async getAllUsers() {
    return await User.find({});
  }
}

module.exports = UserService;
