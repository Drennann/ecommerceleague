import express from "express";
import itemRouter from "./routes/items.routes.js";
import {dirname, join} from "path";
import { fileURLToPath } from "url"; 
import morgan from "morgan";
import cors from "cors";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/items", itemRouter);

app.use(express.static(join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../frontend/build/index.html"))
})

export default app;