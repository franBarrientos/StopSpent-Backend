"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.userValidator = void 0;
const user_dto_1 = require("../dto/user.dto");
const class_validator_1 = require("class-validator");
const handlerResponses_1 = require("../utils/handlerResponses");
const userValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, google, password, email, salary } = req.body;
    const userDTO = new user_dto_1.UserDTO;
    userDTO.name = name;
    userDTO.surname = surname;
    userDTO.salary = salary;
    userDTO.google = google;
    userDTO.password = password;
    userDTO.email = email;
    const errors = yield (0, class_validator_1.validate)(userDTO);
    if (errors.length > 0)
        return (0, handlerResponses_1.responseError)(res, errors, "Error in Validate");
    next();
});
exports.userValidator = userValidator;
const loginValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    const userDto = new user_dto_1.LoginDto;
    userDto.password = password;
    userDto.email = email;
    const errors = yield (0, class_validator_1.validate)(userDto);
    if (errors.length > 0)
        return (0, handlerResponses_1.responseError)(res, errors, "Error in Validate");
    next();
});
exports.loginValidator = loginValidator;
//# sourceMappingURL=auth.middleware.js.map