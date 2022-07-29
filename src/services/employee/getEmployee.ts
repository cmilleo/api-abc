import AppDataSource from "../../data-source";
import Employee from "../../entities/employee.entity";

import {
  IRequestedEmployee,
  IResponseEmployee,
} from "../../interfaces/employee";

const getEmployeeService = async (): Promise<IResponseEmployee[]> => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  return await employeeRepository.find();
};

export default getEmployeeService;
