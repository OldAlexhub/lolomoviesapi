import UserModel from "../models/Users.js";
import bcrypt from "bcrypt";

const Signup = async (req, res) => {
  try {
    const { fname, lname, userName, email, password, confirmPassword } =
      req.body;

    const existingUser = await UserModel.findOne({ userName, email });
    if (existingUser) {
      return res.status(400).json({ message: `User already exists!` });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: `Passwords don't match!` });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel({
      fname,
      lname,
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: `New Account Created!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Signup;
