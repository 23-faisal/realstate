import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      name: String,
      required: true,
      unique: true,
    },
    email: {
      name: String,
      required: true,
      unique: true,
    },
    password: {
      name: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
