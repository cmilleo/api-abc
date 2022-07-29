"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const topSalary_service_1 = __importDefault(require("../../../services/Views/topSalary.service"));
const getTopSalaryController = async (req, res) => {
    const topSalary = await (0, topSalary_service_1.default)();
    return res.status(201).json(topSalary);
};
exports.default = getTopSalaryController;
//# sourceMappingURL=topSalary.controller.js.map