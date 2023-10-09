import express, { Application } from "express";
import { routes } from "./routers/index.route";

export const app: Application = express();

app.use(express.json());

app.use("/", routes);
