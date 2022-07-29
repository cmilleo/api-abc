"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const departaments_entity_1 = __importDefault(require("../../entities/departaments.entity"));
const getDepartamentService = async () => {
    const departaments = data_source_1.default.getRepository(departaments_entity_1.default);
    return await departaments.find();
};
exports.default = getDepartamentService;
//# sourceMappingURL=getDepartamentService.js.map