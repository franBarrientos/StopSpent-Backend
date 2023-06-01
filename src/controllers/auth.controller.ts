import { Request, Response } from "express";
import { responseError, responseSuccess } from "../utils/handlerResponses";
import authService from "../services/auth.service";
import { signToken } from "../utils/handlerJWT";
const login = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await authService.loginAndVerifyPassword(email, password);
    const JWT = signToken({ id: user.id });
    const data = {
      user,
      JWT,
    };
    responseSuccess(res, data, 200);
  } catch (error) {
    responseError(res, "Error en login", error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const {body}  = req;
    const user = await authService.createUser(body);
    const JWT = signToken({ id: user.id });
    const data = {
        user,
        JWT,
      };
    responseSuccess(res, data, 201);
  } catch (error) {
    responseError(res, "Error en register", error);
  }
};
const update = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const {id}  = req.params;
    const attributes = req.body
    const data = await authService.updateUser(Number(id), attributes);
    responseSuccess(res, data, 201);
  } catch (error) {
    responseError(res, "Error en update", error);
  }
};




export default {
    login,
    register,
    update
}
