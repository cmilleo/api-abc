"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimumDependentsPerDepartamentView = void 0;
const typeorm_1 = require("typeorm");
let MinimumDependentsPerDepartamentView = class MinimumDependentsPerDepartamentView {
};
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], MinimumDependentsPerDepartamentView.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], MinimumDependentsPerDepartamentView.prototype, "no_dependents", void 0);
__decorate([
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], MinimumDependentsPerDepartamentView.prototype, "total_employees", void 0);
MinimumDependentsPerDepartamentView = __decorate([
    (0, typeorm_1.ViewEntity)({
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
], MinimumDependentsPerDepartamentView);
exports.MinimumDependentsPerDepartamentView = MinimumDependentsPerDepartamentView;
//# sourceMappingURL=minimumDependentsPerDepartament.entity.js.map