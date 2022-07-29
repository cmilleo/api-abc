import { Request, Response } from "express";
import getMoreEmployees from "../../../services/Views/moreEmployees.service";

const getMoreEmployeesController = async (req: Request, res: Response) => {
  const moreEmployees = await getMoreEmployees();
  return res.status(201).json(moreEmployees);
};
export default getMoreEmployeesController;
