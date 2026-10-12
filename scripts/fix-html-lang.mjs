// Sau khi `next build` (output: "export"), sửa <html lang="vi"> thành
// <html lang="en"> cho mọi file HTML trong out/en/.
// Lý do: root layout không nhận được params.lang của route con [lang],
// nên không thể render đúng lang attribute ngay lúc build.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const enDir = join(rootDir, "out", "en");

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (entry.endsWith(".html")) yield p;
  }
}

let fixed = 0;
function fixFile(file) {
  const html = readFileSync(file, "utf8");
  const next = html.replace('<html lang="vi">', '<html lang="en">');
  if (next !== html) {
    writeFileSync(file, next);
    fixed++;
  }
}
try {
  for (const file of walk(enDir)) fixFile(file);
  // Trang chủ /en nằm ở out/en.html (không trong thư mục out/en/)
  fixFile(join(rootDir, "out", "en.html"));
} catch (err) {
  if (err.code !== "ENOENT") throw err;
}
console.log(`fix-html-lang: ${fixed} file(s) set to lang="en"`);
