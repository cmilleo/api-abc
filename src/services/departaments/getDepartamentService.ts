import AppDataSource from "../../data-source";
import Departaments from "../../entities/departaments.entity";
import { IResponseDepartament } from "../../interfaces/departaments";

const getDepartamentService = async (): Promise<IResponseDepartament[]> => {
  const departaments = AppDataSource.getRepository(Departaments);
  return await departaments.find();
};

export default getDepartamentService;
