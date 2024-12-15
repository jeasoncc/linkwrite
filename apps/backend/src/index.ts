import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia()
  // Apply the swagger plugin
  .use(swagger())
  // .get("/", ({ path }) => path)
  .get("/", () => "Hello Elysia hahaha This is a test server")
  .post("/hello", "Do you miss me?")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
