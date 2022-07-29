"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analistDepartaments_controller_1 = __importDefault(require("../controllers/views/analistDepartament/analistDepartaments.controller"));
const managerDepartaments_controller_1 = __importDefault(require("../controllers/views/managerDepartaments/managerDepartaments.controller"));
const minimumDependentsPerDepartament_controller_1 = __importDefault(require("../controllers/views/minimumDependentsPerDepartament/minimumDependentsPerDepartament.controller"));
const moreEmployees_controller_1 = __importDefault(require("../controllers/views/moreEmployees/moreEmployees.controller"));
const topSalary_controller_1 = __importDefault(require("../controllers/views/topSalary/topSalary.controller"));
const viewsRoutes = (0, express_1.Router)();
viewsRoutes.get("/analistDepartament", analistDepartaments_controller_1.default);
viewsRoutes.get("/managerDepartament", managerDepartaments_controller_1.default);
viewsRoutes.get("/minimumDependents", minimumDependentsPerDepartament_controller_1.default);
viewsRoutes.get("/moreEmployees", moreEmployees_controller_1.default);
viewsRoutes.get("/topSalary", topSalary_controller_1.default);
exports.default = viewsRoutes;
//# sourceMappingURL=views.routes.js.map