import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `
  SELECT
  departaments.name departament_name,
  employee.name employee_name
FROM
  departaments
  JOIN employee ON departaments.id = employee.departament_id
WHERE
  departaments.name ILIKE 'analista%'
ORDER BY
(departament_name)`,
})
export class AnalistDepartamentsView {
  @ViewColumn()
  departament_name: string;

  @ViewColumn()
  employee_name: string;
}
