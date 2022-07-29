import { Request, Response } from "express";
import getTopSalary from "../../../services/Views/topSalary.service";

const getTopSalaryController = async (req: Request, res: Response) => {
  const topSalary = await getTopSalary();
  return res.status(201).json(topSalary);
};
export default getTopSalaryController;
