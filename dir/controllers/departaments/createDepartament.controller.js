"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDepartament_service_1 = __importDefault(require("../../services/departaments/createDepartament.service"));
const createDepartamentController = async (req, res) => {
    const departament = await (0, createDepartament_service_1.default)(req.body.name);
    return res.status(201).json(departament);
};
exports.default = createDepartamentController;
//# sourceMappingURL=createDepartament.controller.js.map