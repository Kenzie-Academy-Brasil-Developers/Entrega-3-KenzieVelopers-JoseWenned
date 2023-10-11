import { Request, Response } from "express";
import { developerProject } from "../interfaces/developerProject.interface";
import { createDeveloperProjectService, readDeveloperIdProjectService, updateDeveloperProjectService } from "../services/developerProject.service";

export const createDeveloperProjectController = async (req: Request, res: Response) : Promise<Response> => {

    const developer : developerProject = await createDeveloperProjectService(req.body);

    return res.status(201).json(developer);
};

export const readDeveloperIdProjectController = async (req: Request, res: Response) : Promise<Response> => {
    const developer: developerProject = await readDeveloperIdProjectService(req.params.id);

    return res.status(200).json(developer);
};

export const updateDeveloperProjectController = async (req: Request, res: Response) : Promise<Response> => {
    const developer: developerProject = await updateDeveloperProjectService(req.params.id, req.body);

    return res.status(200).json(developer);
};



