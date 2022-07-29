"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const analistDepartaments_service_1 = __importDefault(require("../../../services/Views/analistDepartaments.service"));
const getAnalistDepartament = async (req, res) => {
    const analistDepartament = await (0, analistDepartaments_service_1.default)();
    return res.status(201).json(analistDepartament);
};
exports.default = getAnalistDepartament;
//# sourceMappingURL=analistDepartaments.controller.js.map