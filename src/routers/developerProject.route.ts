import { Router } from "express";
import { createDeveloperProjectController, readDeveloperIdProjectController, updateDeveloperProjectController } from "../controllers/developerProject.controller";
import { verifyIdProject } from "../middlewares/verifyIdProject.middleware";
import { verifyDeveloperId } from "../middlewares/verifyDeveloperId.middleware";

export const developerProjectRoutes : Router = Router();

developerProjectRoutes.post("/", verifyDeveloperId, createDeveloperProjectController);

developerProjectRoutes.use("/:id", verifyIdProject);
developerProjectRoutes.get("/:id", readDeveloperIdProjectController);
developerProjectRoutes.patch("/:id", verifyDeveloperId, updateDeveloperProjectController);
