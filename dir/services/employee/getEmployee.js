"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const employee_entity_1 = __importDefault(require("../../entities/employee.entity"));
const getEmployeeService = async () => {
    const employeeRepository = data_source_1.default.getRepository(employee_entity_1.default);
    return await employeeRepository.find();
};
exports.default = getEmployeeService;
//# sourceMappingURL=getEmployee.js.map