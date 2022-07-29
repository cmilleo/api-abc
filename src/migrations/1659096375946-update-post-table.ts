import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePostTable1659096375946 implements MigrationInterface {
    name = 'updatePostTable1659096375946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee" ("code" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "dependents_qtd" integer NOT NULL, "role" character varying(100) NOT NULL, "salary" integer NOT NULL, "departament_id" integer NOT NULL, CONSTRAINT "PK_348a4a9894eef0760bfe0a26328" PRIMARY KEY ("code"))`);
        await queryRunner.query(`CREATE TABLE "departaments" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_4e2ca27f35e6aac0836a684321a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_126b2e591b900a89c2a11a20478" FOREIGN KEY ("departament_id") REFERENCES "departaments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE VIEW "analist_departaments_view" AS 
  SELECT
  departaments.name departament_name,
  employee.name employee_name
FROM
  departaments
  JOIN employee ON departaments.id = employee.departament_id
WHERE
  departaments.name ILIKE 'analista%'
ORDER BY
(departament_name)`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","analist_departaments_view","SELECT\n  departaments.name departament_name,\n  employee.name employee_name\nFROM\n  departaments\n  JOIN employee ON departaments.id = employee.departament_id\nWHERE\n  departaments.name ILIKE 'analista%'\nORDER BY\n(departament_name)"]);
        await queryRunner.query(`CREATE VIEW "more_employees_views" AS 
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
    `);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","more_employees_views","SELECT\n    departaments.name,\n    COUNT(*) AS quantity_employee\n  FROM\n    employee\n    JOIN departaments ON departaments.id = employee.departament_id\n  GROUP BY\n    (departaments.id)\n  ORDER BY\n    (quantity_employee) DESC\n  LIMIT\n    1;"]);
        await queryRunner.query(`CREATE VIEW "minimum_dependents_per_departament_view" AS 
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
    `);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","minimum_dependents_per_departament_view","SELECT\n  departaments.name,\n  COUNT(employee.dependents_qtd) FILTER(\n    WHERE\n      employee.dependents_qtd = 0\n  ) AS no_dependents,\n  COUNT(*) AS total_employees\nFROM\n  employee\n  JOIN departaments ON departaments.id = employee.departament_id\nGROUP BY\n(departaments.name)\nORDER BY\n(no_dependents) ASC\nLIMIT\n  1;"]);
        await queryRunner.query(`CREATE VIEW "manager_departaments_view" AS 
  SELECT
  departaments.name departament_name,
  employee.name employee_name,
  employee.role employee_role
FROM
  departaments
  JOIN employee ON departaments.id = employee.departament_id
WHERE
  employee.role ILIKE 'gerente%';
    `);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","manager_departaments_view","SELECT\n  departaments.name departament_name,\n  employee.name employee_name,\n  employee.role employee_role\nFROM\n  departaments\n  JOIN employee ON departaments.id = employee.departament_id\nWHERE\n  employee.role ILIKE 'gerente%';"]);
        await queryRunner.query(`CREATE VIEW "top_salary_view" AS 
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
  );`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("database", "schema", "table", "type", "name", "value") VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4)`, ["public","VIEW","top_salary_view","SELECT\n  employee.name,\n  employee.salary,\n  (\n    SELECT\n      departaments.name departament_name\n    FROM\n      departaments\n    WHERE\n      departaments.id = employee.departament_id\n  )\nFROM\n  employee\nWHERE\n  employee.salary = (\n    SELECT\n      MAX(employee.salary)\n    FROM\n      employee\n  );"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","top_salary_view","public"]);
        await queryRunner.query(`DROP VIEW "top_salary_view"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","manager_departaments_view","public"]);
        await queryRunner.query(`DROP VIEW "manager_departaments_view"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","minimum_dependents_per_departament_view","public"]);
        await queryRunner.query(`DROP VIEW "minimum_dependents_per_departament_view"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","more_employees_views","public"]);
        await queryRunner.query(`DROP VIEW "more_employees_views"`);
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "name" = $2 AND "schema" = $3`, ["VIEW","analist_departaments_view","public"]);
        await queryRunner.query(`DROP VIEW "analist_departaments_view"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_126b2e591b900a89c2a11a20478"`);
        await queryRunner.query(`DROP TABLE "departaments"`);
        await queryRunner.query(`DROP TABLE "employee"`);
    }

}
