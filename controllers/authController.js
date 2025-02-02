const User = require("../models/User");
const { generateToken } = require("../utils/jwtUtils");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = new User({ name, email, password, role });
    await user.save();
    const token = generateToken(user._id, user.role);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const token = generateToken(user._id, user.role);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
