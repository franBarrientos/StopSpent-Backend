import { NextFunction, Request, Response } from "express";
import { UserDTO, LoginDto } from "../dto/user.dto";
import { validate } from "class-validator";
import { responseError } from "../utils/handlerResponses";
export const userValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { name, surname, google, password, email, salary } = req.body;
  const userDTO:UserDTO  = new UserDTO;
  userDTO.name = name;
  userDTO.surname = surname;
  userDTO.salary = salary;
  userDTO.google = google;
  userDTO.password = password;
  userDTO.email = email;
  const errors = await validate(userDTO);
  if (errors.length > 0) return responseError(res, errors, "Error in Validate");    
    next()
};
export const loginValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { password, email } = req.body;
  const userDto:LoginDto  = new LoginDto;
  userDto.password = password;
  userDto.email = email;
  const errors = await validate(userDto);
  if (errors.length > 0) return responseError(res, errors, "Error in Validate");    
    next()
};
