import Departaments from "../../entities/departaments.entity";

export interface IRequestedEmployee {
  name: string;
  role: string;
  salary: number;
  dependents_qtd: number;
  departament_id: number;
}
export interface IResponseEmployee {
  code: number;
  name: string;
  role: string;
  salary: number;
  dependents_qtd: number;
  departament: Departaments;
}
