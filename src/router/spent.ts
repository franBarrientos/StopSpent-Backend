import spentController from "../controllers/spent.controller";
import express from 'express'
const router = express()
router
    .get("/:id", spentController.getSpents)
    .post("/", spentController.createSpent)
    .delete("/:id", spentController.deleteSpent )


export default router;