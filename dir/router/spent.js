"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spent_controller_1 = __importDefault(require("../controllers/spent.controller"));
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router
    .get("/:id", spent_controller_1.default.getSpents)
    .post("/", spent_controller_1.default.createSpent)
    .delete("/:id", spent_controller_1.default.deleteSpent);
exports.default = router;
//# sourceMappingURL=spent.js.map