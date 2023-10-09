import { Router } from "express";
import { createDeveloperController } from "../controllers/developer.controller";

export const developerRoutes : Router = Router()

developerRoutes.post("/", createDeveloperController)