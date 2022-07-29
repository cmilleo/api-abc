import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `
  SELECT
  departaments.name,
  COUNT(employee.dependents_qtd) FILTER(
    WHERE
      employee.dependents_qtd = 0
  ) AS no_dependents,
  COUNT(*) AS total_employees
FROM
  employee
  JOIN departaments ON departaments.id = employee.departament_id
GROUP BY
(departaments.name)
ORDER BY
(no_dependents) ASC
LIMIT
  1;
    `,
})
export class MinimumDependentsPerDepartamentView {
  @ViewColumn()
  name: string;

  @ViewColumn()
  no_dependents: number;

  @ViewColumn()
  total_employees: number;
}
