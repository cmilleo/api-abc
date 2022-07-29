import { Request, Response } from "express";
import getAnalistDepartamentService from "../../../services/Views/analistDepartaments.service";

const getAnalistDepartament = async (req: Request, res: Response) => {
  const analistDepartament = await getAnalistDepartamentService();
  return res.status(201).json(analistDepartament);
};
export default getAnalistDepartament;
