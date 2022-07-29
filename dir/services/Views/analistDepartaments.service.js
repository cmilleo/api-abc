"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const analistDepartaments_entity_1 = require("../../entities/views/analistDepartaments.entity");
const getAnalistDepartamentService = async () => {
    const analistRepository = data_source_1.default.getRepository(analistDepartaments_entity_1.AnalistDepartamentsView);
    return await analistRepository.find();
};
exports.default = getAnalistDepartamentService;
//# sourceMappingURL=analistDepartaments.service.js.map