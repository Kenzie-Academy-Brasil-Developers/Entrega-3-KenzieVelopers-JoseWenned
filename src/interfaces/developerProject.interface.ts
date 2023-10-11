import { QueryResult } from "pg";

export type developerProject = {
    name: string,
    description: string,
    repository: string,
    startDate: Date,
    endDate?: Date,
    developerId?: number 
}

export type createDeveloperProject = Omit<developerProject, "id">;

export type createDeveloperProjectResult = QueryResult<developerProject>;

export type createDeveloperProjectRead = developerProject[];

export type createDeveloperProjectUpdate = Partial<developerProject>;