import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Express } from "express";
const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  synchronize: false,

  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  entities:
    process.env.NODE_ENV === "production"
      ? ["build/entities/*.js", "build/entities/views/*.js"]
      : ["src/entities/*.ts", "/src/entities/views/*.ts"],
  migrations: process.env.NODE_ENV === "production" ? ["build/migrations/*.js"] : ["src/migrations/*.ts"],
});

export default AppDataSource;
