import { Router } from "express";
import createDepartamentController from "../controllers/departaments/createDepartament.controller";
import getDepartamentController from "../controllers/departaments/getDepartamentController";
import { schemaValidation } from "../middleware/schemaValidation.middleware";
import { departamentSchema } from "../validations/departament.schema";

const departamentRoutes = Router();

departamentRoutes.post(
  "",
  schemaValidation(departamentSchema),
  createDepartamentController
);

departamentRoutes.get("", getDepartamentController);

export default departamentRoutes;
