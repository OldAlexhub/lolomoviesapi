import mongoose from "mongoose";
import validator from "validator";

const UsersSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  userName: { type: String, unique: true, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: `Email is incorrect`,
    },
  },
  password: { type: String, minlength: 6, required: true },
  confirmPassword: {
    type: String,
    select: false,
    default: undefined,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: `Passwords don't match`,
    },
  },
});

const UserModel = mongoose.model("users", UsersSchema);

export default UserModel;
