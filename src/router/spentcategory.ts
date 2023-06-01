import express, { Request, Response } from "express";
import authController from "../controllers/auth.controller";
import { CategorySpent } from "../entities/categorySpent.entitie";
import { responseError, responseSuccess } from "../utils/handlerResponses";
import { AppDataSource } from "../config/mysql";
const router = express()
const categoryRepository = AppDataSource.getRepository(CategorySpent);

router
    .get("/", async (req:Request, res:Response)=>{
        try {
            const categories = await categoryRepository.find()
            responseSuccess(res, categories)
        } catch (error) {
            responseError(res,"ERROR_GET_CATEGORYS", error)
        }
    })


export default router;