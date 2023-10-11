import { Request, Response } from "express";
import { DeveloperInfos, createDeveloperInfos } from "../interfaces/developerInfo.interfaces";
import { createDeveloperInfosService } from "../services/developerInfo.service";

export const createDeveloperInfoController = async (req: Request, res: Response) : Promise<Response> => {

    const DeveloperInfo : DeveloperInfos = await createDeveloperInfosService(req.params.id, req.body);

    return res.status(201).json(DeveloperInfo);
    
};