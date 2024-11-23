import { Elysia } from "elysia";

const app = new Elysia()
    .get("/", () => "Hello Elysia hahaha This is a test server")
    .get("hello", () => "hello world")
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
