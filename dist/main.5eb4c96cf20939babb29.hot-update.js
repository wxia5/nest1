exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\r\nconst logger_middleware_1 = __webpack_require__(/*! ./common/middlewares/logger.middleware */ \"./src/common/middlewares/logger.middleware.ts\");\r\nlet AppModule = class AppModule {\r\n    configure(consumer) {\r\n        consumer\r\n            .apply(logger_middleware_1.LoggerMiddleware)\r\n            .forRoutes({ path: 'cats', method: common_1.RequestMethod.GET });\r\n    }\r\n};\r\nAppModule = __decorate([\r\n    common_1.Module({\r\n        imports: [cats_module_1.CatsModule]\r\n    })\r\n], AppModule);\r\nexports.AppModule = AppModule;\r\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/common/middlewares/logger.middleware.ts":
/*!*****************************************************!*\
  !*** ./src/common/middlewares/logger.middleware.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nlet LoggerMiddleware = class LoggerMiddleware {\r\n    resolve(...args) {\r\n        return (req, res, next) => {\r\n            let obj = '';\r\n            for (let item in req) {\r\n                obj += req[item];\r\n            }\r\n            fs.writeFile('input.txt', JSON.stringify(obj), function (err) {\r\n                if (err) {\r\n                    return console.error(err);\r\n                }\r\n            });\r\n            next();\r\n        };\r\n    }\r\n};\r\nLoggerMiddleware = __decorate([\r\n    common_1.Injectable()\r\n], LoggerMiddleware);\r\nexports.LoggerMiddleware = LoggerMiddleware;\r\n\n\n//# sourceURL=webpack:///./src/common/middlewares/logger.middleware.ts?");

/***/ })

};