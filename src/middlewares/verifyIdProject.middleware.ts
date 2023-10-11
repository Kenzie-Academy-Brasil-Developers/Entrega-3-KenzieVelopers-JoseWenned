import { NextFunction, Request, Response } from "express";
import { createDeveloperProjectResult, developerProject} from "../interfaces/developerProject.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

export const verifyIdProject = async (req: Request, res: Response, next:NextFunction): Promise<void> => {

    const { id } = req.params;

    const queryResult: createDeveloperProjectResult = await client.query (
        `SELECT * FROM "projects" WHERE "id" = $1;`,
        [id]
    );

    if(!queryResult.rowCount){
        throw new AppError ("Project not found.", 404);
    };

    const foundDeveloper : developerProject = queryResult.rows[0];

    res.locals = { ...res.locals, foundDeveloper };

    return next();
};