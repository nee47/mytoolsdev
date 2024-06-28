import "dotenv/config";
import express from "express";
import { mongoConnection } from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { register, login } from "./controllers/authController.js";
import { authVerification } from "./middlewares/validateToken.js";
import { validateSchema } from "./middlewares/validateAuth.js";
import { authSchema } from "./models/auth.schema.js";

mongoConnection();

const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());

app.post("/", (req, res) => {
  res.status(200).json({
    hola: "mundo",
    id: 55390439430,
  });
});

app.post("/api/register", validateSchema(authSchema), register);

app.post("/api/login", validateSchema(authSchema), login);

app.get("/api/tools", authVerification, (req, res) => {
  res.status(200).json({
    tools: "tool",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
