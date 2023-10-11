import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import AppError from "../errors/App.error";
import { QueryConfig } from "pg";

export const verifyIdInfo = async (req: Request, res: Response, next:NextFunction): Promise<void> => {

    const { id } = req.params;

    const queryString: string = 
        `SELECT * FROM "developerInfos" WHERE "developerId" = $1;`;
    
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id]
    };
    
    const queryResult = await client.query(queryConfig);

    if(queryResult.rowCount !== 0){
        throw new AppError(
             "Developer infos already exists.", 409
          );
    };

    return next();
}