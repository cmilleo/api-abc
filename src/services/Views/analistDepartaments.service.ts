import AppDataSource from "../../data-source";
import { AnalistDepartamentsView } from "../../entities/views/analistDepartaments.entity";
import { IResponseAnalistDepartaments } from "../../interfaces/views/analistDepartaments";

const getAnalistDepartamentService = async (): Promise<
  IResponseAnalistDepartaments[]
> => {
  const analistRepository = AppDataSource.getRepository(
    AnalistDepartamentsView
  );
  return await analistRepository.find();
};

export default getAnalistDepartamentService;
