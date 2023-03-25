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
class Validator {
}
function params(obj, key, index) { }
class Test {
    constructor() { }
    methods(arg1, arg2) {
        console.log(arg1 + 1 + arg2);
    }
    methods2(arg1, arg2) {
        console.log(arg1 + 1 + arg2);
    }
}
__decorate([
    __param(0, params),
    __param(1, params),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Validator, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "methods", null);
__decorate([
    __param(0, params),
    __param(1, params),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Validator, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "methods2", null);
const obj = new Test();
obj.methods();
