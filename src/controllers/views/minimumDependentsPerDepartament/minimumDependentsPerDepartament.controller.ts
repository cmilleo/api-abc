import { Request, Response } from "express";
import getMinimumDependentsService from "../../../services/Views/minimumDependentsPerDepartament.service";

const getMinimumDependents = async (req: Request, res: Response) => {
  const minimumDependents = await getMinimumDependentsService();
  return res.status(201).json(minimumDependents);
};
export default getMinimumDependents;
