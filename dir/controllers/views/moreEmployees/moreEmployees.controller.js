"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moreEmployees_service_1 = __importDefault(require("../../../services/Views/moreEmployees.service"));
const getMoreEmployeesController = async (req, res) => {
    const moreEmployees = await (0, moreEmployees_service_1.default)();
    return res.status(201).json(moreEmployees);
};
exports.default = getMoreEmployeesController;
//# sourceMappingURL=moreEmployees.controller.js.map