import { Router } from "express";
import { createDeveloperController } from "../controllers/developer.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const developerRoutes : Router = Router();

developerRoutes.post("/", verifyEmail, createDeveloperController);