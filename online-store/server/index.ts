import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import sequelize from "./db";
import cors from "cors";
import fileupload from "express-fileupload";
import router from "./routes/index";
import errorHandler from "./middleware/ErrorHandlingMiddleware";
import path from "path";

const PORT: number | string = process.env.PORT || 5000;

const app: Express = express();
app.use(cors());
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileupload({}));
app.use("/api", router);

app.use(errorHandler);

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
};

start();
