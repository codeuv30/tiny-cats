import { Router } from "express";
import aiController from "../controllers/ai.controller.ts";

const aiRouter = Router();

aiRouter.post("/ask", aiController.askAiController);

export default aiRouter;