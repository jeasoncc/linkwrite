import pino from "pino";

// export const pinoLogger = pino({
//   browser: {
//     asObject: true, // 将日志输出为对象格式
//   },
//   timestamp: () => new Date().toLocaleString(),
//   level: "trace", // 设置日志级别
// });
// export const pinoLogger = (args) => console(args);
// export const pinoLogger = pino({
//   browser: {
//     asObject: true,
//     serialize: true,
//     write: (log) => {
//       const stack = new Error().stack.split("\n");
//       const callerStack = stack[3] || stack[2]; // 处理不同浏览器的调用栈格式
//       const match =
//         callerStack.match(/\((.*):(\d+):\d+\)/) ||
//         callerStack.match(/at (.*):(\d+):\d+/);

//       if (match) {
//         const [file, line] = match.slice(1, 3);
//         console.log(`[${file}:${line}]`, log);
//       } else {
//         console.log(log); // 如果无法解析调用栈，直接输出日志
//       }
//     },
//   },
// });
export const pinoLogger = pino({
  browser: {
    asObject: true,
    serialize: true,
    write: (log) => {
      try {
        const stack = new Error().stack.split("\n");
        // 处理不同浏览器的调用栈格式
        const callerStack = stack[3] || stack[2];
        const match =
          callerStack.match(/\((.*):(\d+):\d+\)/) ||
          callerStack.match(/at (.*):(\d+):\d+/);

        if (match) {
          const [file, line] = match.slice(1, 3);
          console.log(`[${file}:${line}]`, log);
        } else {
          console.log(log); // 如果无法解析调用栈，直接输出日志
        }
      } catch (error) {
        console.error("Error parsing stack trace:", error);
        console.log(log); // 如果解析调用栈时出错，直接输出日志
      }
    },
  },
});

// export const pinoLogger = console;
