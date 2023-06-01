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
const spent_entitie_1 = require("../entities/spent.entitie");
const mysql_1 = require("../config/mysql");
const handlerResponses_1 = require("../utils/handlerResponses");
const spentRepository = mysql_1.AppDataSource.getRepository(spent_entitie_1.Spent);
const getSpents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const spents = yield spentRepository.find({
            where: {
                user: {
                    id,
                },
                isActive: true,
            },
        });
        (0, handlerResponses_1.responseSuccess)(res, spents);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "ERROR_GET_SPENTS", error);
    }
});
const createSpent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSpent = new spent_entitie_1.Spent();
        newSpent.categorySpent = req.body.categorySpent;
        newSpent.description = req.body.description;
        newSpent.name = req.body.name;
        newSpent.user = req.body.user;
        newSpent.precio = req.body.precio;
        yield spentRepository.save(newSpent);
        (0, handlerResponses_1.responseSuccess)(res, newSpent);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "ERROR_CREATE_SPENT", error);
    }
});
const deleteSpent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const spent = yield spentRepository.delete({ id });
        (0, handlerResponses_1.responseSuccess)(res, spent);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "ERROR_DELETE_SPENT", error);
    }
});
exports.default = {
    getSpents,
    createSpent,
    deleteSpent,
};
//# sourceMappingURL=spent.controller.js.map