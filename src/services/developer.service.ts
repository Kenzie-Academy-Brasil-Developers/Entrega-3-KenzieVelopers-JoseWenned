
import { Developer, createDeveloper, createDeveloperResult, createDeveloperRead } from "../interfaces/developer.interface";
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

export const readDeveloperService = async (): Promise<createDeveloperRead> => {
    const query: string = `SELECT * FROM "developers";`;
    const queryResult: createDeveloperResult = await client.query(query);

    return queryResult.rows;
};

export const readDeveloperIdService = async (developerId: string) : Promise<Developer> => {

    const query : string = `
        SELECT 
        "d"."id" AS "developerId",
        "d"."name" AS "developerName",
        "d"."email" AS "developerEmail",
        "di"."developerSince" AS "developerInfoDeveloperSince",
        "di"."preferredOS" AS "developerInfoPreferredOS",
        FROM "developers" AS "d"
        LEFT JOIN "developerInfos" AS "di"
        ON "di"."developerId" = "d". "id"
        WHERE "d". "id" = $1; 
    `

    const queryResult : createDeveloperResult = await client.query(query, [developerId]);

    return queryResult.rows[0];

};