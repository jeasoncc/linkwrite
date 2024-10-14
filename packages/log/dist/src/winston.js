"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLogger = void 0;
const winston_1 = require("winston");
exports.winstonLogger = (0, winston_1.createLogger)({
    level: "info",
    format: winston_1.format.json(),
    defaultMeta: {
        service: "user-service",
    },
    transports: [
        new winston_1.transports.File({ filename: "log/error.log", level: "error" }),
        new winston_1.transports.File({ filename: "log/combine.log" }),
    ],
});
