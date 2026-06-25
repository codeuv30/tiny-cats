import express from "express";
import { type Request, type Response } from "express";

const app = express();


app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
});

export default app;