import { NextFunction, Request, Response } from "express";
import { createDeveloperResult, Developer } from "../interfaces/developer.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

export const verifyId = async (req: Request, res: Response, next:NextFunction): Promise<void> => {

    const { developerId } = req.params;

    const queryResult: createDeveloperResult = await client.query (
        `SELECT * FROM "developers" WHERE "id" = $1;`,
        [developerId]
    );

    if(!queryResult.rowCount){
        throw new AppError ("Developer not found.", 404);
    };

    const foundDeveloper : Developer = queryResult.rows[0];

    res.locals = { ...res.locals, foundDeveloper };

    return next();
};