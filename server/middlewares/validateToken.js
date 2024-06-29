import jwt from "jsonwebtoken";
import "dotenv/config";

export const authVerification = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({
        message: "auth denied, no token found",
      });

    jwt.verify(token, process.env.SECRET_JWT_KEY, (err, user) => {
      if (err)
        return res.status(403).json({
          message: "invalid token",
        });
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
