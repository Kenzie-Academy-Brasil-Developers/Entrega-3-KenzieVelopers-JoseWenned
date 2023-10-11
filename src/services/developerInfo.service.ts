import { DeveloperInfos, createDeveloperInfos, createDeveloperInfosResult } from "../interfaces/developerInfo.interfaces";
import format from "pg-format";
import { client } from "../database";

export const createDeveloperInfosService = async (id:string, data: createDeveloperInfos) : Promise<DeveloperInfos> => {
    
    const queryFormat: string = `INSERT INTO "developerInfos" ("developerSince", "preferredOS", "developerId") VALUES($1, $2, $3) RETURNING *;`;

    const date = new Date(Object.values(data)[0]);
    const queryResult : createDeveloperInfosResult = await client.query(queryFormat, [date, Object.values(data) [1],id]);

    return queryResult.rows[0];
    
};