import express from "express";
import authController from "../controllers/auth.controller";
import {userValidator } from "../middleware/auth.middleware"
const router = express()

router
    .post("/register", [userValidator], authController.register)
    .post("/login", authController.login)
    .put("/update/:id", authController.update)


export default router;