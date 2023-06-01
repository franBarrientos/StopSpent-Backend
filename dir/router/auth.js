"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.default)();
router
    .post("/register", [auth_middleware_1.userValidator], auth_controller_1.default.register)
    .post("/login", auth_controller_1.default.login)
    .put("/update/:id", auth_controller_1.default.update);
exports.default = router;
//# sourceMappingURL=auth.js.map