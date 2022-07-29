"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createEmployee_service_1 = __importDefault(require("../../services/employee/createEmployee.service"));
const createEmployee = async (req, res) => {
    const employee = await (0, createEmployee_service_1.default)(req.body);
    return res.status(201).json(employee);
};
exports.default = createEmployee;
//# sourceMappingURL=createEmployee.controller.js.map