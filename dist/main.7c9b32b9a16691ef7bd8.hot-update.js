exports.id = "main";
exports.modules = {

/***/ "./src/cats/cats.module.ts":
/*!*********************************!*\
  !*** ./src/cats/cats.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst cats_controller_1 = __webpack_require__(/*! ./cats.controller */ \"./src/cats/cats.controller.ts\");\r\nconst cats_service_1 = __webpack_require__(/*! ./cats.service */ \"./src/cats/cats.service.ts\");\r\nlet CatsModule = class CatsModule {\r\n};\r\nCatsModule = __decorate([\r\n    common_1.Module({\r\n        controllers: [cats_controller_1.CatsController],\r\n        providers: [cats_service_1.CatsService],\r\n    })\r\n], CatsModule);\r\nexports.CatsModule = CatsModule;\r\n\n\n//# sourceURL=webpack:///./src/cats/cats.module.ts?");

/***/ })

};