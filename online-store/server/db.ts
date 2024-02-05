import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME ?? "default_db_name";
const dbUser = process.env.DB_USER ?? "default_user";
const dbPassword = process.env.DB_PASSWORD ?? "";
const dbHost = process.env.DB_HOST ?? "localhost";
const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
  port: dbPort,
});

export default sequelize;
