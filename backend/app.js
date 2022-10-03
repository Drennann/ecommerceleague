import express from "express";
import itemRouter from "./routes/items.routes.js";
import {dirname, join} from "path";
import { fileURLToPath } from "url"; 
import morgan from "morgan";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/items",itemRouter);

app.use(express.static(join(__dirname, "../frontend/build")));

export default app;