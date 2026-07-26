import { cpSync, mkdirSync, rmSync, copyFileSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("public", "dist", { recursive: true });
copyFileSync("index.html", "dist/index.html");
copyFileSync("index.html", "dist/404.html");
copyFileSync("styles.css", "dist/styles.css");
copyFileSync("analytics.js", "dist/analytics.js");
