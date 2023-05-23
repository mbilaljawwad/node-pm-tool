import express, { Request, Response } from "express";
import dotenv from "dotenv";
import type { Express } from "express";


dotenv.config();
const app: Express = express();
const port = process.env.PORT || 9000;

/**
 * Health check endpoint
 */
app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("Health check. Server is up and running");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});