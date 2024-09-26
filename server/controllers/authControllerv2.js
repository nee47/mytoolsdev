import jwt from "jsonwebtoken";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const userAlreadyExist = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist)
      return res.status(400).json({
        error: "The email is already in use",
      });

    const savedUser = await prisma.users.create({
      data: req.body,
    });

    const token = jwt.sign(
      { id: Number(savedUser.id) },
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
    const userSearched = await prisma.users.findFirst({
      where: {
        email: email,
        password: password,
      },
    });

    if (!userSearched)
      return res.status(400).json({
        error: "Not valid credentials",
      });

    const token = jwt.sign(
      { id: Number(userSearched.id) },
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
