import { Router } from "express";
import getAnalistDepartament from "../controllers/views/analistDepartament/analistDepartaments.controller";
import getManagerDepartament from "../controllers/views/managerDepartaments/managerDepartaments.controller";
import getMinimumDependents from "../controllers/views/minimumDependentsPerDepartament/minimumDependentsPerDepartament.controller";
import getMoreEmployeesController from "../controllers/views/moreEmployees/moreEmployees.controller";
import getTopSalaryController from "../controllers/views/topSalary/topSalary.controller";

const viewsRoutes = Router();

viewsRoutes.get("/analistDepartament", getAnalistDepartament);
viewsRoutes.get("/managerDepartament", getManagerDepartament);
viewsRoutes.get("/minimumDependents", getMinimumDependents);
viewsRoutes.get("/moreEmployees", getMoreEmployeesController);
viewsRoutes.get("/topSalary", getTopSalaryController);

export default viewsRoutes;
