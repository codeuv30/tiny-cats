import { Router } from "express";
import aiRecommendedController from "../controllers/aiRecommended.controller.ts";

const aiRecommendRouter = Router();

aiRecommendRouter.post("/recommendByAi", aiRecommendedController.aiRecommend);

export default aiRecommendRouter;