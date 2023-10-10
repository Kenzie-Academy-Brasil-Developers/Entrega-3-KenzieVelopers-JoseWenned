import { Router } from "express";
import { createDeveloperController } from "../controllers/developer.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyId } from "../middlewares/verifyId.middleware";

export const developerRoutes : Router = Router();

developerRoutes.post("/", verifyEmail, createDeveloperController);
developerRoutes.get("/", );

developerRoutes.use("/:id", verifyId);
developerRoutes.get("/:id",);
developerRoutes.patch("/:id",);
developerRoutes.delete("/:id",);
