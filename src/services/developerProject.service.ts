import { developerProject, createDeveloperProject, createDeveloperProjectResult, createDeveloperProjectUpdate } from "../interfaces/developerProject.interface";
import format from "pg-format";
import { client } from "../database";

export const createDeveloperProjectService = async (data: createDeveloperProject) : Promise<developerProject> => {
    const queryFormat: string = format (
        `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(data),
        Object.values(data)
    );

    const queryResult : createDeveloperProjectResult = await client.query(queryFormat);

    return queryResult.rows[0];
};

export const readDeveloperIdProjectService = async (id: string) : Promise<developerProject> => {

    const query : string = `
        SELECT 
        "p"."id" AS "projectId",
        "p"."name" AS "projectName",
        "p"."description" AS "projectDescription",
        "p"."repository" AS "projectRepository",
        "p"."startDate" AS "projectStartDate",
        "p"."endDate" AS "projectEndDate",
        "d"."name" "projectDeveloperName"
        FROM "projects" AS "p"
        LEFT JOIN "developers" AS "d"
        ON "p"."developerId" = "d". "id"
        WHERE "p". "id" = $1; 
    `

    const queryResult : createDeveloperProjectResult = await client.query(query, [id]);

    return queryResult.rows[0];

};

export const updateDeveloperProjectService = async (id: string, data: createDeveloperProjectUpdate): Promise<developerProject> => {

    const queryFormat : string = format (
        `UPDATE "projects" SET (%I) = ROW (%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(data),
        Object.values(data) 
    );

    const queryResult : createDeveloperProjectResult = await client.query(queryFormat, [id]);

    return queryResult.rows[0];

};
