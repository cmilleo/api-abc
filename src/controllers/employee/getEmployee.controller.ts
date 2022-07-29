import { Request, Response } from "express";
import getEmployeeService from "../../services/employee/getEmployee";

const getEmployee = async (req: Request, res: Response) => {
  const employees = await getEmployeeService();
  return res.status(201).json(employees);
};
export default getEmployee;
