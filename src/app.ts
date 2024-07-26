import express, { Request, Response } from "express";
import { NurseryRoutes } from "./modules/nursery/nursery.route";
import cors from "cors";
import { OrderRoutes } from "./modules/order/order.route";

const app = express();

// Enable CORS for all origins
app.use(cors());

//parsers
app.use(express.json());

app.use("/api/nurseries",NurseryRoutes);
app.use('/api/orders', OrderRoutes);



app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

export default app;