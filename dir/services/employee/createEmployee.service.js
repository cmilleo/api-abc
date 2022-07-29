"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const departaments_entity_1 = __importDefault(require("../../entities/departaments.entity"));
const employee_entity_1 = __importDefault(require("../../entities/employee.entity"));
const appError_1 = require("../../errors/appError");
const createEmployeeService = async (data) => {
    const employeeRepository = data_source_1.default.getRepository(employee_entity_1.default);
    const departamentRepository = data_source_1.default.getRepository(departaments_entity_1.default);
    const validateDepartament = await departamentRepository.findOneBy({
        id: data.departament_id,
    });
    if (!validateDepartament) {
        throw new appError_1.AppError("Departament does not exists");
    }
    const validateEmployee = await employeeRepository.findOneBy({
        name: data.name,
    });
    if (validateEmployee) {
        throw new appError_1.AppError("User already exists");
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
exports.default = createEmployeeService;
//# sourceMappingURL=createEmployee.service.js.map