require("dotenv").config();
const models = require("./models/models");
import express, { Express } from "express";
import sequelize from "./db";
import cors from "cors";
import fileupload from "express-fileupload";
import router from "./routes/index";
import errorHandler from "./middleware/ErrorHandlingMiddleware";

const PORT: number | string = process.env.PORT || 5000;

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(fileupload({}));
app.use("/api", router);
app.use(errorHandler);

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
