"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const minimumDependentsPerDepartament_entity_1 = require("../../entities/views/minimumDependentsPerDepartament.entity");
const getMinimumDependentsService = async () => {
    const minimumDependents = data_source_1.default.getRepository(minimumDependentsPerDepartament_entity_1.MinimumDependentsPerDepartamentView);
    return await minimumDependents.find();
};
exports.default = getMinimumDependentsService;
//# sourceMappingURL=minimumDependentsPerDepartament.service.js.map