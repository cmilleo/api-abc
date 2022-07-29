"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getEmployee_1 = __importDefault(require("../../services/employee/getEmployee"));
const getEmployee = async (req, res) => {
    const employees = await (0, getEmployee_1.default)();
    return res.status(201).json(employees);
};
exports.default = getEmployee;
//# sourceMappingURL=getEmployee.controller.js.map