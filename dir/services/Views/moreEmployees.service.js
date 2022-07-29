"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const moreEmployees_entity_1 = require("../../entities/views/moreEmployees.entity");
const getMoreEmployees = async () => {
    const moreEmployees = data_source_1.default.getRepository(moreEmployees_entity_1.moreEmployeesViews);
    return await moreEmployees.find();
};
exports.default = getMoreEmployees;
//# sourceMappingURL=moreEmployees.service.js.map