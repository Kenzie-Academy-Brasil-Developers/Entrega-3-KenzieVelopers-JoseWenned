import { Router } from "express";
import { developerRoutes } from "./developer.route";

export const routes: Router = Router();

routes.use("/developers", developerRoutes);