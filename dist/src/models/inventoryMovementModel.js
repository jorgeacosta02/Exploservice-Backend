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
exports.InventoryMovementModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const articleModel_1 = require("./articleModel");
const locationModel_1 = require("./locationModel");
let InventoryMovementModel = class InventoryMovementModel extends sequelize_typescript_1.Model {
};
exports.InventoryMovementModel = InventoryMovementModel;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        allowNull: false,
    }),
    __metadata("design:type", Object)
], InventoryMovementModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('entrada', 'salida', 'transferencia'),
        allowNull: false,
    }),
    __metadata("design:type", String)
], InventoryMovementModel.prototype, "movementType", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], InventoryMovementModel.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => articleModel_1.ArticleModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", Object)
], InventoryMovementModel.prototype, "articleId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => locationModel_1.LocationModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", Object)
], InventoryMovementModel.prototype, "originLocationId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => locationModel_1.LocationModel),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
    }),
    __metadata("design:type", Object)
], InventoryMovementModel.prototype, "destinationLocationId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => articleModel_1.ArticleModel),
    __metadata("design:type", articleModel_1.ArticleModel)
], InventoryMovementModel.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => locationModel_1.LocationModel, { as: 'originWarehouse' }),
    __metadata("design:type", locationModel_1.LocationModel)
], InventoryMovementModel.prototype, "originWarehouse", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => locationModel_1.LocationModel, { as: 'destinationWarehouse' }),
    __metadata("design:type", locationModel_1.LocationModel)
], InventoryMovementModel.prototype, "destinationWarehouse", void 0);
exports.InventoryMovementModel = InventoryMovementModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'inventoryMovements' })
], InventoryMovementModel);
//# sourceMappingURL=inventoryMovementModel.js.map