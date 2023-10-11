import { Router } from "express";
import { createDeveloperInfoController } from "../controllers/developerInfo.controller";
import { verifyIdInfo } from "../middlewares/verifyIdInfo.middleware";
import { verifyKeyOption } from "../middlewares/verifyKeyOption.middleware";

export const developerInfosRoutes : Router = Router();

developerInfosRoutes.use("/:id/infos", verifyIdInfo, verifyKeyOption);
developerInfosRoutes.post("/:id/infos", createDeveloperInfoController);
