import { Request, Response } from "express";
import createEmployeeService from "../../services/employee/createEmployee.service";

const createEmployee = async (req: Request, res: Response) => {
  const employee = await createEmployeeService(req.body);
  return res.status(201).json(employee);
};
export default createEmployee;
