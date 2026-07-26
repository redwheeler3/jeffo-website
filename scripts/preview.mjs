import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = "dist";
const port = 8080;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
};

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const candidate = normalize(join(root, pathname === "/" ? "index.html" : pathname));
  const file = candidate.startsWith(`${root}${process.platform === "win32" ? "\\" : "/"}`) && existsSync(candidate) && statSync(candidate).isFile()
    ? candidate
    : join(root, "404.html");

  response.writeHead(200, { "Content-Type": mimeTypes[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Preview available at http://localhost:${port}`);
});
