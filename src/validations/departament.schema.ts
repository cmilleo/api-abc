import * as yup from "yup";

export const departamentSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required("Name is required")
      .max(100, "Name length is too longer"),
  })
  .noUnknown(true);
