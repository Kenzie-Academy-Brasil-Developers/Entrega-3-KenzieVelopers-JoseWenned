import { Request, Response } from "express";
import { createDeveloperRead, Developer } from "../interfaces/developer.interface";
import { createDeveloperService, readDeveloperService, readDeveloperIdService, updateDeveloperService, deleteDeveloperService } from "../services/developer.service";

export const createDeveloperController = async (req: Request, res: Response) : Promise<Response> => {

    const developer : Developer = await createDeveloperService(req.body);

    return res.status(201).json(developer);
};

export const readDeveloperController = async (req: Request, res: Response) : Promise<Response> => {
    const developers: createDeveloperRead = await readDeveloperService();

    return res.status(200).json(developers);
}

export const readDeveloperIdController = async (req: Request, res: Response) : Promise<Response> => {
    const developer: Developer = await readDeveloperIdService(req.params.id);

    return res.status(200).json(developer);
}

export const updateDeveloperController = async (req: Request, res: Response) : Promise<Response> => {
    const developer: Developer = await updateDeveloperService(req.params.id, req.body);

    return res.status(200).json(developer);
}

export const deleteDeveloperController = async (req: Request, res: Response) : Promise<Response> => {
    await deleteDeveloperService(req.params.id);

    return res.status(204).json();
}

