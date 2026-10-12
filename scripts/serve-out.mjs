// Minimal static file server for the `out/` directory (output: "export").
// Used by `npm start`. Zero dependencies, supports clean URLs (/vi -> /vi.html).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..", "out");
const PORT = Number(process.env.PORT || 3000);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function resolve(pathname) {
  const safe = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const candidates = [
    join(root, safe),
    join(root, safe + ".html"),
    join(root, safe, "index.html"),
  ];
  for (const p of candidates) {
    if (!p.startsWith(root + sep) && p !== root) continue;
    try {
      const st = await stat(p);
      if (st.isFile()) return p;
    } catch {
      /* try next */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://localhost");
    const file = await resolve(decodeURIComponent(url.pathname));
    if (!file) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": MIME[extname(file)] || "application/octet-stream",
    });
    res.end(body);
  } catch {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Internal error");
  }
});

server.listen(PORT, () => {
  console.log(`Serving ${root} at http://localhost:${PORT}`);
});
