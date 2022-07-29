import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `
  SELECT
  employee.name,
  employee.salary,
  (
    SELECT
      departaments.name departament_name
    FROM
      departaments
    WHERE
      departaments.id = employee.departament_id
  )
FROM
  employee
WHERE
  employee.salary = (
    SELECT
      MAX(employee.salary)
    FROM
      employee
  );`,
})
export class topSalaryView {
  @ViewColumn()
  name: string;

  @ViewColumn()
  salary: number;

  @ViewColumn()
  departament_name: string;
}
