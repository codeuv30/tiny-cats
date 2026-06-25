import { Router } from "express";
import catController from "../controllers/cat.controller.ts";

const catRouter = Router();

catRouter.post("/create", catController.createCat);

catRouter.get("/", catController.getAllCats);

catRouter.get("/search/all", catController.searchCat);

catRouter.get("/:id", catController.getCatById);

catRouter.post("/recommended", catController.recommendCats);

export default catRouter;