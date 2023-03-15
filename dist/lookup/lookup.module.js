"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const lookup_controller_1 = require("./lookup.controller");
const lookup_service_1 = require("./lookup.service");
const lookup_schema_1 = require("./schemas/lookup.schema");
let LookupModule = class LookupModule {
};
LookupModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'lookup', schema: lookup_schema_1.DataSchema }])],
        controllers: [lookup_controller_1.LookupController],
        providers: [lookup_service_1.LookupService]
    })
], LookupModule);
exports.LookupModule = LookupModule;
//# sourceMappingURL=lookup.module.js.map