import { Request, Response } from "express";
import { Developer } from "../interfaces/developer.interface";
import { createDeveloperService } from "../services/developer.service";

export const createDeveloperController = async (req: Request, res: Response) : Promise<Response> => {

    const developer : Developer = await createDeveloperService(req.body);

    return res.status(201).json(developer);
} ;