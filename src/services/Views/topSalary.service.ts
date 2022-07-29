import AppDataSource from "../../data-source";

import { topSalaryView } from "../../entities/views/topSalary.entity";
import { IResponseTopSalary } from "../../interfaces/views/topSalary";

const getTopSalary = async (): Promise<IResponseTopSalary[]> => {
  const topSalary = AppDataSource.getRepository(topSalaryView);
  return await topSalary.find();
};

export default getTopSalary;
