import pino from "pino";

export const pinoLogger = pino({
  browser: {
    asObject: true, // 将日志输出为对象格式
  },
  timestamp: () => new Date().toLocaleString(),
  level: "trace", // 设置日志级别
});
// export const logger = (args) => console.log(args);
