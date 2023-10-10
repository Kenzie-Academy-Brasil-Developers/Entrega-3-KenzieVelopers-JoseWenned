import { Router } from "express";
import { createDeveloperController, readDeveloperIdController, updateDeveloperController, deleteDeveloperController, readDeveloperController } from "../controllers/developer.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyId } from "../middlewares/verifyId.middleware";
import { deleteDeveloperService } from "../services/developer.service";

export const developerRoutes : Router = Router();

developerRoutes.post("/", verifyEmail, createDeveloperController);
developerRoutes.get("/", readDeveloperController);

developerRoutes.use("/:id", verifyId);
developerRoutes.get("/:id", readDeveloperIdController);
developerRoutes.patch("/:id", verifyEmail, updateDeveloperController);
developerRoutes.delete("/:id", deleteDeveloperController);
