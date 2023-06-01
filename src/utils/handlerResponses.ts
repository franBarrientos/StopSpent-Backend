import { ValidationError } from "class-validator";
import { Request, Response } from "express";

export const responseSuccess = (
  res: Response,
  data: any,
  status: number = 200
) => {
  res.status(status).json({
    ok:true,
    status,
    data,
    error: "",
  });
};

export const responseError = (
  res: Response,
  error: string | ValidationError[],
  message: unknown,
  status: number = 500
) => {
  console.log(message);
  res.status(status).json({
    ok:false,
    status,
    data: "",
    error,
  });
};
