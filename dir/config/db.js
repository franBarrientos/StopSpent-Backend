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
exports.dbConnect = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
//import entities from "../entities";
const entities = ["user"];
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "franco19",
    database: "stopSpent",
    entities: entities,
    synchronize: true,
    logging: false,
    connectTimeout: 20000, // Aumentar el tiempo de espera a 20 segundos
});
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.AppDataSource.initialize();
    console.log("Connection has been established successfully.");
});
exports.dbConnect = dbConnect;
//# sourceMappingURL=db.js.map