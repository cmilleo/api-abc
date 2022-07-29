import AppDataSource from "../../data-source";

import { moreEmployeesViews } from "../../entities/views/moreEmployees.entity";
import { IResponseMoreEmployees } from "../../interfaces/views/moreEmployees";

const getMoreEmployees = async (): Promise<IResponseMoreEmployees[]> => {
  const moreEmployees = AppDataSource.getRepository(moreEmployeesViews);
  return await moreEmployees.find();
};

export default getMoreEmployees;
