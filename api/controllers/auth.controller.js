import User from "../models/user.mode.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  try {
    res.status(201).json({
      message: "user created successfully!",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
