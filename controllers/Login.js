import UserModel from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await UserModel.findOne({ userName });
    if (!user) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const name = user.fname + " " + user.lname;
    const userId = user._id;

    res
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .json({ message: "Login Success", token, name, userId });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Login;
