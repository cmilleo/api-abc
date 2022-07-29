"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createEmployee_controller_1 = __importDefault(require("../controllers/employee/createEmployee.controller"));
const getEmployee_controller_1 = __importDefault(require("../controllers/employee/getEmployee.controller"));
const schemaValidation_middleware_1 = require("../middleware/schemaValidation.middleware");
const employee_schema_1 = require("../validations/employee.schema");
const employeeRoutes = (0, express_1.Router)();
employeeRoutes.post("", (0, schemaValidation_middleware_1.schemaValidation)(employee_schema_1.employeeSchema), createEmployee_controller_1.default);
employeeRoutes.get("", getEmployee_controller_1.default);
exports.default = employeeRoutes;
//# sourceMappingURL=employee.routes.js.map