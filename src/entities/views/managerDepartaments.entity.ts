import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `
  SELECT
  departaments.name departament_name,
  employee.name employee_name,
  employee.role employee_role
FROM
  departaments
  JOIN employee ON departaments.id = employee.departament_id
WHERE
  employee.role ILIKE 'gerente%';
    `,
})
export class ManagerDepartamentsView {
  @ViewColumn()
  departament_name: string;

  @ViewColumn()
  employee_name: string;

  @ViewColumn()
  employee_role: string;
}
