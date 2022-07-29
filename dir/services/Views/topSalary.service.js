"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const topSalary_entity_1 = require("../../entities/views/topSalary.entity");
const getTopSalary = async () => {
    const topSalary = data_source_1.default.getRepository(topSalary_entity_1.topSalaryView);
    return await topSalary.find();
};
exports.default = getTopSalary;
//# sourceMappingURL=topSalary.service.js.map