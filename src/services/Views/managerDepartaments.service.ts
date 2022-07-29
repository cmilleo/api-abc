import AppDataSource from "../../data-source";
import { ManagerDepartamentsView } from "../../entities/views/managerDepartaments.entity";
import { IResponseManagerDepartaments } from "../../interfaces/views/managerDepartaments";

const getManagerDepartamentsService = async (): Promise<
  IResponseManagerDepartaments[]
> => {
  const managerDepartaments = AppDataSource.getRepository(
    ManagerDepartamentsView
  );
  return await managerDepartaments.find();
};

export default getManagerDepartamentsService;
