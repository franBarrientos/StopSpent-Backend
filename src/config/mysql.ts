import { DataSource } from "typeorm";
import path from "path"
import entities from "../entities";
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource  = new DataSource ({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: entities, 
    synchronize:false,
    logging:false,
    connectTimeout: 20000, // Aumentar el tiempo de espera a 20 segundos
    })
  
export const dbConnect = async () => {
    await AppDataSource.initialize();
    console.log("Connection has been established successfully.");
};


