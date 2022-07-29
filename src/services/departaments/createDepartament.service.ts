import AppDataSource from "../../data-source";
import Departaments from "../../entities/departaments.entity";
import { AppError } from "../../errors/appError";
import { IResponseDepartament } from "../../interfaces/departaments";

const createDepartamentService = async (
  name: string
): Promise<IResponseDepartament> => {
  const departamentRepository = AppDataSource.getRepository(Departaments);
  const validateDepartament = await departamentRepository.findOneBy({
    name: name,
  });

  if (validateDepartament) {
    throw new AppError("Departament already exists");
  }

  const departament = departamentRepository.create({ name });
  if (!departament) {
    throw new AppError(
      "Something is wrong with database, try again later",
      500
    );
  }
  await departamentRepository.save(departament);
  return departament;
};

export default createDepartamentService;
