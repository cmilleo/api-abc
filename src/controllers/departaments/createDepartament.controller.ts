import { Request, Response } from "express";
import createDepartamentService from "../../services/departaments/createDepartament.service";

const createDepartamentController = async (req: Request, res: Response) => {
  const departament = await createDepartamentService(req.body.name);
  return res.status(201).json(departament);
};
export default createDepartamentController;
