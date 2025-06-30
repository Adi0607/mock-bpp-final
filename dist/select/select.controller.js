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
exports.SelectController = void 0;
const common_1 = require("@nestjs/common");
let SelectController = class SelectController {
    handleSelect(body) {
        const context = body.context;
        return {
            context: Object.assign(Object.assign({}, context), { action: 'on_select', bpp_id: 'mock-bpp-final.onrender.com', bpp_uri: 'https://mock-bpp-final.onrender.com', message_id: 'msg-onselect-001', timestamp: new Date().toISOString() }),
            message: {
                order: {
                    provider: {
                        id: 'provider-1',
                        descriptor: { name: 'Mock Store' }
                    },
                    items: [
                        {
                            id: 'item-1',
                            descriptor: { name: 'Mock Product' },
                            quantity: { count: 1 },
                            price: { currency: 'INR', value: '100' }
                        }
                    ],
                    fulfillments: [
                        {
                            type: 'Delivery',
                            end: {
                                location: {
                                    gps: '12.9715987,77.5945627',
                                    address: {
                                        door: '123',
                                        locality: 'Koramangala',
                                        city: 'Bengaluru',
                                        state: 'KA',
                                        country: 'IND',
                                        area_code: '560034'
                                    }
                                },
                                contact: {
                                    phone: '9999999999',
                                    email: 'test@example.com'
                                }
                            }
                        }
                    ]
                }
            }
        };
    }
};
exports.SelectController = SelectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectController.prototype, "handleSelect", null);
exports.SelectController = SelectController = __decorate([
    (0, common_1.Controller)('select')
], SelectController);
