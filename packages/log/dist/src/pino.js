"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinoLogger = void 0;
const pino_1 = require("pino");
exports.pinoLogger = (0, pino_1.default)({
    browser: {
        asObject: true, // 将日志输出为对象格式
    },
    timestamp: () => new Date().toLocaleString(),
    level: "trace", // 设置日志级别
});
// export const logger = (args) => console.log(args);
