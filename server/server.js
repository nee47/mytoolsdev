import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { register, logout, login } from "./controllers/authControllerv2.js";
import { authVerification } from "./middlewares/validateToken.js";
import { validateSchema } from "./middlewares/validateAuth.js";
import { authSchema } from "./models/auth.schema.js";
import { toolSchema } from "./models/tool.schema.js";
import {
  createTool,
  getTools,
  createPublicTool,
  getPublicTools,
} from "./controllers/toolsControllerv2.js";

//mongoConnection();

const app = express();
// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.post("/", (req, res) => {
  res.status(200).json({
    hola: "mundo",
    id: 55390439430,
  });
});

app.post("/api/register", validateSchema(authSchema), register);

app.post("/api/login", validateSchema(authSchema), login);

app.get("/api/tools", authVerification, getTools);

app.put("/api/tools", authVerification, validateSchema(toolSchema), createTool);

// app.delete("/api/tools/:id", authVerification, deleteTool);

app.post("/api/logout", logout);

app.put("/api/createPublicTool", createPublicTool);

app.get("/api/publicTools", getPublicTools);

//app.put("/api/tools-admin", authVerification, validateSchema(toolsAdminSchema), createAdminTool);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
