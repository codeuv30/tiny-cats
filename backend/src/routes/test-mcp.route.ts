import { Router } from "express";
import testMcpController from "../controllers/test-mcp.controller.ts";

const mcpRouter = Router();

mcpRouter.get("/test-mcp", testMcpController.testMcpController);

export default mcpRouter;