import jwt from "jsonwebtoken";
import "dotenv/config";

export const authVerification = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({
      message: "auth denied, no token found",
    });

  jwt.verify(token, process.env.SECRET_JWT_KEY, (err, user) => {
    if (err)
      res.status(403).json({
        message: "invalid token",
      });
    req.user = user;
    console.log(user);
  });
  next();
};
