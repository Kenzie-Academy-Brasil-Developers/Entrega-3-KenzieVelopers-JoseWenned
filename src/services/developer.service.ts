import { Client } from "pg";
import { Developer, createDeveloper, createDeveloperResult } from "../interfaces/developer.interface";
import format from "pg-format";
import { client } from "../database";

export const createDeveloperService = async (data: createDeveloper) : Promise<Developer> => {
    const queryFormat: string = format (
        `INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    );

    const queryResult : createDeveloperResult = await client.query(queryFormat);

    return queryResult.rows[0];
}