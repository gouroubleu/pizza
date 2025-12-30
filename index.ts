import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const app = new Elysia()
  .use(html())
  .get("/", () => `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Pizza</title>
        <style>
          body {
            font-family: system-ui;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #ff6b6b, #ffa502);
          }
          h1 {
            font-size: 5rem;
            color: white;
            text-shadow: 3px 3px 0 #c0392b;
          }
        </style>
      </head>
      <body>
        <h1>Pizza</h1>
      </body>
    </html>
  `)
  .get("/health", () => ({ status: "ok" }))
  .listen(3000);

console.log("Pizza server running on port " + app.server?.port);
