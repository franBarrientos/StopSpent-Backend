import express, { Request, Response } from "express";
import { Spent } from "../entities/spent.entitie";
import { AppDataSource } from "../config/mysql";
import { responseError, responseSuccess } from "../utils/handlerResponses";

const spentRepository = AppDataSource.getRepository(Spent);

const getSpents = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const spents = await spentRepository.find({
      where: {
        user: {
          id,
        },
        isActive: true,
      },
      
    });
    responseSuccess(res, spents);
  } catch (error) {
    responseError(res, "ERROR_GET_SPENTS", error);
  }
};

const createSpent = async (req: Request, res: Response) => {
  try {
    const newSpent = new Spent();
    newSpent.categorySpent = req.body.categorySpent;
    newSpent.description = req.body.description;
    newSpent.name = req.body.name;
    newSpent.user = req.body.user;
    newSpent.precio = req.body.precio;
    await spentRepository.save(newSpent);
    responseSuccess(res, newSpent);
  } catch (error) {
    responseError(res, "ERROR_CREATE_SPENT", error);
  }
};
const deleteSpent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const spent = await spentRepository.delete({ id });
    responseSuccess(res, spent);
  } catch (error) {
    responseError(res, "ERROR_DELETE_SPENT", error);
  }
};

export default {
  getSpents,
  createSpent,
  deleteSpent,
};
