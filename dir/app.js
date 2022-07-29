"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const handleAppError_middleware_1 = __importDefault(require("./middleware/handleAppError.middleware"));
const departaments_routes_1 = __importDefault(require("./routes/departaments.routes"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const views_routes_1 = __importDefault(require("./routes/views.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use("/departaments", departaments_routes_1.default);
app.use("/employee", employee_routes_1.default);
app.use("/view", views_routes_1.default);
app.use(handleAppError_middleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map