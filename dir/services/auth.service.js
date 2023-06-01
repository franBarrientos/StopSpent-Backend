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
const mysql_1 = require("../config/mysql");
const handlerHash_1 = require("../utils/handlerHash");
const user_entitie_1 = require("../entities/user.entitie");
const userRepository = mysql_1.AppDataSource.getRepository(user_entitie_1.User);
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findOne({ where: { email }, relations: ["spents"] });
    if (!user)
        throw new Error("Doesn't Exist");
    return user;
});
const loginAndVerifyPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getUserByEmail(email);
    if (yield (0, handlerHash_1.compareHash)(password, user.password)) {
        return user;
    }
    throw new Error("Invalid password");
});
const createUser = (attributes) => __awaiter(void 0, void 0, void 0, function* () {
    attributes.password = yield (0, handlerHash_1.hashPassword)(attributes.password);
    const user = userRepository.create(attributes);
    yield userRepository.save(user);
    return user;
});
const updateUser = (id, attributes) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.update({ id }, attributes);
    return user;
});
exports.default = {
    getUserByEmail,
    loginAndVerifyPassword,
    createUser,
    updateUser
};
//# sourceMappingURL=auth.service.js.map