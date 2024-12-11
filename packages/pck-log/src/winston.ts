import { createLogger, format, transports } from "winston";

export const winstonLogger = createLogger({
    level: "info",
    format: format.json(),
    defaultMeta: {
        service: "user-service",
    },
    transports: [
        new transports.File({ filename: "log/error.log", level: "error" }),
        new transports.File({ filename: "log/combine.log" }),
    ],
});
