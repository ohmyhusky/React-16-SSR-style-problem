import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import express from "express";
import fs from "fs";
import { resolve } from "path";

const app = express();
const appDirectory = fs.realpathSync(process.cwd());
app.use(express.static(resolve(appDirectory, "./build")));

app.use((req, res) => {
  res.write(`
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Client</title>
  </head>
  
  <body>
    <div id="application">`);

  res.write(renderToString(<App />));
  res.write(`
    </div>
    <script src="client.js"></script>
  </body>
  
  </html>
    `);
  res.end();
});

app.listen(3003);
