import { Router } from "express";
import createEmployee from "../controllers/employee/createEmployee.controller";
import getEmployee from "../controllers/employee/getEmployee.controller";
import { schemaValidation } from "../middleware/schemaValidation.middleware";
import { employeeSchema } from "../validations/employee.schema";

const employeeRoutes = Router();

employeeRoutes.post("", schemaValidation(employeeSchema), createEmployee);
employeeRoutes.get("", getEmployee);

export default employeeRoutes;
