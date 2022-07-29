import AppDataSource from "../../data-source";
import { MinimumDependentsPerDepartamentView } from "../../entities/views/minimumDependentsPerDepartament.entity";
import { IResponseMinimumDependents } from "../../interfaces/views/minimumDependentsPerDepartament";

const getMinimumDependentsService = async (): Promise<
  IResponseMinimumDependents[]
> => {
  const minimumDependents = AppDataSource.getRepository(
    MinimumDependentsPerDepartamentView
  );
  return await minimumDependents.find();
};

export default getMinimumDependentsService;
