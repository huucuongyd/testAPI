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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LookupService = class LookupService {
    constructor(model) {
        this.model = model;
    }
    async findAll() {
        const id = new mongoose_2.default.Types.ObjectId('63ff06ca057efdafbb877e09');
        return await this.model.aggregate([
            {
                $match: {
                    _id: id
                }
            }
        ]);
    }
    async create(createData) {
        const createdCat = new this.model(createData);
        return createdCat.save();
    }
    async addlookup(objid) {
        const res = await this.model.aggregate([
            {
                $match: {
                    _id: objid
                }
            },
            {
                $addFields: {
                    OBJ: {
                        $toObjectId: '$add_id'
                    }
                }
            },
            {
                $lookup: {
                    from: "addtolookup",
                    localField: "OBJ",
                    foreignField: "_id",
                    as: "add"
                }
            },
            {
                $project: {
                    _id: 0,
                    OBJ: 0
                }
            }
        ]);
        console.log(res[0].add);
    }
};
LookupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('lookup')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LookupService);
exports.LookupService = LookupService;
//# sourceMappingURL=lookup.service.js.map