import { QueryResult } from "pg";

export type DeveloperInfos = {
    id: number,
    developerSince: Date,
    preferredOS: 'Windows'| 'Linux'| 'MacOS',
    developerId: number
};

export type createDeveloperInfos = Omit<DeveloperInfos, "id">;

export type createDeveloperInfosResult = QueryResult<DeveloperInfos>;