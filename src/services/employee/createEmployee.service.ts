import AppDataSource from "../../data-source";
import Departaments from "../../entities/departaments.entity";
import Employee from "../../entities/employee.entity";
import { AppError } from "../../errors/appError";

import {
  IRequestedEmployee,
  IResponseEmployee,
} from "../../interfaces/employee";

const createEmployeeService = async (
  data: IRequestedEmployee
): Promise<IResponseEmployee> => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const departamentRepository = AppDataSource.getRepository(Departaments);
  const validateDepartament = await departamentRepository.findOneBy({
    id: data.departament_id,
  });

  if (!validateDepartament) {
    throw new AppError("Departament does not exists");
  }
  const validateEmployee = await employeeRepository.findOneBy({
    name: data.name,
  });

  if (validateEmployee) {
    throw new AppError("User already exists");
  }

  const employee = await employeeRepository.save({
    name: data.name,
    dependents_qtd: data.dependents_qtd,
    role: data.role,
    salary: data.salary,
    departament: validateDepartament,
  });

  const newEmployee = {
    code: employee.code,
    name: employee.name,
    dependents_qtd: employee.dependents_qtd,
    role: employee.role,
    salary: employee.salary,
    departament: employee.departament,
  };

  return newEmployee;
};

export default createEmployeeService;
