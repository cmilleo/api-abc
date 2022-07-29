"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: false,
    synchronize: false,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    entities: process.env.NODE_ENV === "production"
        ? ["dir/src/entities/*.js", "dir/src/entities/views/*.js"]
        : ["src/entities/*.ts", "/src/entities/views/*.js"],
    migrations: process.env.NODE_ENV === "production" ? ["dir/src/migrations/*.js"] : ["src/migrations/*.ts"],
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map