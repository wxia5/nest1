exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\r\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\r\nconst cats_controller_1 = __webpack_require__(/*! ./cats/cats.controller */ \"./src/cats/cats.controller.ts\");\r\nconst cats_service_1 = __webpack_require__(/*! ./cats/cats.service */ \"./src/cats/cats.service.ts\");\r\nlet AppModule = class AppModule {\r\n};\r\nAppModule = __decorate([\r\n    common_1.Module({\r\n        imports: [],\r\n        controllers: [app_controller_1.AppController, cats_controller_1.CatsController],\r\n        providers: [app_service_1.AppService, cats_service_1.CatsService],\r\n    })\r\n], AppModule);\r\nexports.AppModule = AppModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/cats/cats.controller.ts":
/*!*************************************!*\
  !*** ./src/cats/cats.controller.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst cats_service_1 = __webpack_require__(/*! ./cats.service */ \"./src/cats/cats.service.ts\");\r\nconst cat_interface_1 = __webpack_require__(/*! ./interfaces/cat.interface */ \"./src/cats/interfaces/cat.interface.ts\");\r\nlet CatsController = class CatsController {\r\n    constructor(catsService) {\r\n        this.catsService = catsService;\r\n    }\r\n    create(createCatDto) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            this.catsService.create(createCatDto);\r\n        });\r\n    }\r\n    findAll() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            return this.catsService.findAll();\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    common_1.Post(),\r\n    __param(0, common_1.Body()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [cat_interface_1.Cat]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], CatsController.prototype, \"create\", null);\r\n__decorate([\r\n    common_1.Get(),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", Promise)\r\n], CatsController.prototype, \"findAll\", null);\r\nCatsController = __decorate([\r\n    common_1.Controller('cats'),\r\n    __metadata(\"design:paramtypes\", [cats_service_1.CatsService])\r\n], CatsController);\r\nexports.CatsController = CatsController;\r\n\n\n//# sourceURL=webpack:///./src/cats/cats.controller.ts?");

/***/ })

};