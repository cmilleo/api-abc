"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const managerDepartaments_entity_1 = require("../../entities/views/managerDepartaments.entity");
const getManagerDepartamentsService = async () => {
    const managerDepartaments = data_source_1.default.getRepository(managerDepartaments_entity_1.ManagerDepartamentsView);
    return await managerDepartaments.find();
};
exports.default = getManagerDepartamentsService;
//# sourceMappingURL=managerDepartaments.service.js.map