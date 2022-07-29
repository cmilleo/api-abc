import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: false,
  synchronize: false,
  entities: ["src/entities/*.ts", "src/entities/views/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;
