"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createDepartament_controller_1 = __importDefault(require("../controllers/departaments/createDepartament.controller"));
const getDepartamentController_1 = __importDefault(require("../controllers/departaments/getDepartamentController"));
const schemaValidation_middleware_1 = require("../middleware/schemaValidation.middleware");
const departament_schema_1 = require("../validations/departament.schema");
const departamentRoutes = (0, express_1.Router)();
departamentRoutes.post("", (0, schemaValidation_middleware_1.schemaValidation)(departament_schema_1.departamentSchema), createDepartament_controller_1.default);
departamentRoutes.get("", getDepartamentController_1.default);
exports.default = departamentRoutes;
//# sourceMappingURL=departaments.routes.js.map