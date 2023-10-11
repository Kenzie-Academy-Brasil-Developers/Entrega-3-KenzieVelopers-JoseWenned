import { Router } from "express";
import { developerRoutes } from "./developer.route";
import { developerInfosRoutes } from "../routers/developerInfo.route"

export const routes: Router = Router();

routes.use("/developers", developerRoutes);
routes.use("/developers", developerInfosRoutes);