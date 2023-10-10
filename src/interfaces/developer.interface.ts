import { QueryResult } from "pg";

export type Developer = {
    id: number,
    name: string,
    email: string
};

export type createDeveloper = Omit<Developer, "id">;

export type createDeveloperResult = QueryResult<Developer>;

export type createDeveloperRead = Developer[];

export type createDeveloperUpdate = Partial<Developer>;