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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlerResponses_1 = require("../utils/handlerResponses");
const auth_service_1 = __importDefault(require("../services/auth.service"));
const handlerJWT_1 = require("../utils/handlerJWT");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const { password } = req.body;
        const user = yield auth_service_1.default.loginAndVerifyPassword(email, password);
        const JWT = (0, handlerJWT_1.signToken)({ id: user.id });
        const data = {
            user,
            JWT,
        };
        (0, handlerResponses_1.responseSuccess)(res, data, 200);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "Error en login", error);
    }
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const user = yield auth_service_1.default.createUser(body);
        const JWT = (0, handlerJWT_1.signToken)({ id: user.id });
        const data = {
            user,
            JWT,
        };
        (0, handlerResponses_1.responseSuccess)(res, data, 201);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "Error en register", error);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { id } = req.params;
        const attributes = req.body;
        const data = yield auth_service_1.default.updateUser(Number(id), attributes);
        (0, handlerResponses_1.responseSuccess)(res, data, 201);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "Error en update", error);
    }
});
exports.default = {
    login,
    register,
    update
};
//# sourceMappingURL=auth.controller.js.map