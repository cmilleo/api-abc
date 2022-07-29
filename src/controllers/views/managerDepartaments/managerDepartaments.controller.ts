import { Request, Response } from "express";
import getManagerDepartamentsService from "../../../services/Views/managerDepartaments.service";

const getManagerDepartament = async (req: Request, res: Response) => {
  const managerDepartament = await getManagerDepartamentsService();
  return res.status(201).json(managerDepartament);
};
export default getManagerDepartament;
