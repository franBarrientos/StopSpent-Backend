"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spent = void 0;
const typeorm_1 = require("typeorm");
const user_entitie_1 = require("./user.entitie");
const categorySpent_entitie_1 = require("./categorySpent.entitie");
let Spent = class Spent {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Spent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Spent.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 1 }),
    __metadata("design:type", Boolean)
], Spent.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Spent.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entitie_1.User, (user) => user.spents),
    __metadata("design:type", user_entitie_1.User)
], Spent.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categorySpent_entitie_1.CategorySpent, (categorySpent) => categorySpent.spents),
    __metadata("design:type", categorySpent_entitie_1.CategorySpent)
], Spent.prototype, "categorySpent", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Spent.prototype, "description", void 0);
Spent = __decorate([
    (0, typeorm_1.Entity)()
], Spent);
exports.Spent = Spent;
//# sourceMappingURL=spent.entitie.js.map