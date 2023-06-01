import express, { Application } from "express";
import router from "../router";
import cors from "cors";
import path from "path"
import { dbConnect } from "../config/mysql";

export class Server {
  private app: Application;
  private port: String;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.middlewares();
    this.routes();
    this.connectDb();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listening on port " + this.port);
    });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", router);
  }

  async connectDb() {
    try {
      await dbConnect()
      console.log("Database connected Succesfuly")
    } catch (error) {
      console.log(error)
      throw new Error("Can't Connect to DB")
    }
  }
}


