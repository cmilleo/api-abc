import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `
    SELECT
    departaments.name,
    COUNT(*) AS quantity_employee
  FROM
    employee
    JOIN departaments ON departaments.id = employee.departament_id
  GROUP BY
    (departaments.id)
  ORDER BY
    (quantity_employee) DESC
  LIMIT
    1;
    `,
})
export class moreEmployeesViews {
  @ViewColumn()
  name: string;

  @ViewColumn()
  quantity_employee: number;
}
