exports.id = "main";
exports.modules = {

/***/ "./src/cats/cats.service.ts":
/*!**********************************!*\
  !*** ./src/cats/cats.service.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nlet CatsService = class CatsService {\r\n    constructor() {\r\n        this.cats = [];\r\n    }\r\n    create(cat) {\r\n        this.cats.push(cat);\r\n    }\r\n    findAll() {\r\n        return this.cats;\r\n    }\r\n};\r\nCatsService = __decorate([\r\n    common_1.Injectable()\r\n], CatsService);\r\nexports.CatsService = CatsService;\r\n\n\n//# sourceURL=webpack:///./src/cats/cats.service.ts?");

/***/ })

};