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
const express_1 = __importDefault(require("express"));
const categorySpent_entitie_1 = require("../entities/categorySpent.entitie");
const handlerResponses_1 = require("../utils/handlerResponses");
const mysql_1 = require("../config/mysql");
const router = (0, express_1.default)();
const categoryRepository = mysql_1.AppDataSource.getRepository(categorySpent_entitie_1.CategorySpent);
router
    .get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryRepository.find();
        (0, handlerResponses_1.responseSuccess)(res, categories);
    }
    catch (error) {
        (0, handlerResponses_1.responseError)(res, "ERROR_GET_CATEGORYS", error);
    }
}));
exports.default = router;
//# sourceMappingURL=spentcategory.js.map