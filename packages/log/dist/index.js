"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLogger = exports.pinoLogger = void 0;
const pino_1 = require("./src/pino");
Object.defineProperty(exports, "pinoLogger", { enumerable: true, get: function () { return pino_1.pinoLogger; } });
const winston_1 = require("./src/winston");
Object.defineProperty(exports, "winstonLogger", { enumerable: true, get: function () { return winston_1.winstonLogger; } });
