"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimumDependentsPerDepartament_service_1 = __importDefault(require("../../../services/Views/minimumDependentsPerDepartament.service"));
const getMinimumDependents = async (req, res) => {
    const minimumDependents = await (0, minimumDependentsPerDepartament_service_1.default)();
    return res.status(201).json(minimumDependents);
};
exports.default = getMinimumDependents;
//# sourceMappingURL=minimumDependentsPerDepartament.controller.js.map