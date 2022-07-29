"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const managerDepartaments_service_1 = __importDefault(require("../../../services/Views/managerDepartaments.service"));
const getManagerDepartament = async (req, res) => {
    const managerDepartament = await (0, managerDepartaments_service_1.default)();
    return res.status(201).json(managerDepartament);
};
exports.default = getManagerDepartament;
//# sourceMappingURL=managerDepartaments.controller.js.map