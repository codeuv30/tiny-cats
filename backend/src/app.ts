import express from "express";
import { type Request, type Response } from "express";
import catRouter from "./routes/cat.routes.ts";

const app = express();

app.use(express.json());

app.use("/api/cats", catRouter);

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
});

export default app;