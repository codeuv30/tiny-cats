import express from "express";
import { type Request, type Response } from "express";
import catRouter from "./routes/cat.routes.ts";
import aiRouter from "./routes/ai.routes.ts";
import aiRecommendRouter from "./routes/aiRecommend.route.ts";

const app = express();

app.use(express.json());

app.use("/api/cats", catRouter);
app.use("/api/ai", aiRouter);
app.use("/api/aiRecommend", aiRecommendRouter);

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
});

export default app;