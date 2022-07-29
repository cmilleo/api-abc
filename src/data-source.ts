import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  synchronize: false,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  entities:
    process.env.NODE_ENV === "production"
      ? ["dir/src/entities/*.js", "dir/src/entities/views/*.js"]
      : ["src/entities/*.ts", "/src/entities/views/*.js"],
  migrations: process.env.NODE_ENV === "production" ? ["dir/src/migrations/*.js"] : ["src/migrations/*.ts"],
});

export default AppDataSource;
