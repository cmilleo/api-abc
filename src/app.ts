import express from "express";
import "express-async-errors";
import handleAppErrorMiddeware from "./middleware/handleAppError.middleware";
import departamentRoutes from "./routes/departaments.routes";
import employeeRoutes from "./routes/employee.routes";
import viewsRoutes from "./routes/views.routes";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/departaments", departamentRoutes);
app.use("/employee", employeeRoutes);
app.use("/view", viewsRoutes);
app.use(handleAppErrorMiddeware);
export default app;
