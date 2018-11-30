exports.id = "main";
exports.modules = {

/***/ "./src/common/middlewares/logger.middleware.ts":
/*!*****************************************************!*\
  !*** ./src/common/middlewares/logger.middleware.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nlet LoggerMiddleware = class LoggerMiddleware {\r\n    resolve(...args) {\r\n        return (req, res, next) => {\r\n            let [xwq] = args;\r\n            console.log(xwq);\r\n            next();\r\n        };\r\n    }\r\n};\r\nLoggerMiddleware = __decorate([\r\n    common_1.Injectable()\r\n], LoggerMiddleware);\r\nexports.LoggerMiddleware = LoggerMiddleware;\r\n\n\n//# sourceURL=webpack:///./src/common/middlewares/logger.middleware.ts?");

/***/ })

};