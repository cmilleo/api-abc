import * as yup from "yup";

export const employeeSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required")
      .max(100, "Name length is too longer"),
    dependents_qtd: yup.number().required("Dependents is required"),
    role: yup
      .string()
      .required("Role is required")
      .max(100, "Role length is too longer"),
    salary: yup.number().required("Salary is required"),
    departament_id: yup.string().required("Departament ID is required"),
  })
  .noUnknown(true);
