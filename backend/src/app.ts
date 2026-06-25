import express, { type NextFunction } from "express";
import { type Request, type Response } from "express";
import catRouter from "./routes/cat.routes.ts";
import aiRouter from "./routes/ai.routes.ts";
import aiRecommendRouter from "./routes/aiRecommend.route.ts";
import mcpRouter from "./routes/test-mcp.route.ts";

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.url);

    next();
});

app.use("/api/cats", catRouter);
app.use("/api/ai", aiRouter);
app.use("/api/aiRecommend", aiRecommendRouter);
app.use("/api/mcp", mcpRouter);

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ status: "ok" });
});

export default app;