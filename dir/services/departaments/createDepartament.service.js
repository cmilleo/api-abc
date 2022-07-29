"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const departaments_entity_1 = __importDefault(require("../../entities/departaments.entity"));
const appError_1 = require("../../errors/appError");
const createDepartamentService = async (name) => {
    const departamentRepository = data_source_1.default.getRepository(departaments_entity_1.default);
    const validateDepartament = await departamentRepository.findOneBy({
        name: name,
    });
    if (validateDepartament) {
        throw new appError_1.AppError("Departament already exists");
    }
    const departament = departamentRepository.create({ name });
    if (!departament) {
        throw new appError_1.AppError("Something is wrong with database, try again later", 500);
    }
    await departamentRepository.save(departament);
    return departament;
};
exports.default = createDepartamentService;
//# sourceMappingURL=createDepartament.service.js.map