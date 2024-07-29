import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist)
      return res.status(400).json({
        error: "The email is already in use",
      });

    const user = new User({
      email,
      password,
    });

    const savedUser = await user.save();

    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_JWT_KEY, {
      expiresIn: "2h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Sucessfull register",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Email already exist",
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const userSearched = await User.findOne({ email });

    if (userSearched.password != password)
      return res.status(400).json({
        error: "Not valid credentials",
      });

    const token = jwt.sign(
      { id: userSearched._id },
      process.env.SECRET_JWT_KEY,
      {
        expiresIn: "2h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Sucessful login",
    });
  } catch (error) {
    //console.log(error);
    res.status(400).json({
      error: "User not found or server error",
    });
  }
}

export async function logout(req, res) {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong",
    });
  }
}
