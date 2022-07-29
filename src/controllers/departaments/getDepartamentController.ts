import { Request, Response } from "express";
import getDepartamentService from "../../services/departaments/getDepartamentService";

const getDepartamentController = async (req: Request, res: Response) => {
  const departament = await getDepartamentService();
  return res.status(200).json(departament);
};
export default getDepartamentController;
