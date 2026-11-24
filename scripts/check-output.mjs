import { readdir, readFile, access } from "node:fs/promises";
import { join, dirname, resolve, sep } from "node:path";

const root = resolve("dist");
const base = "/ai-atlas/";
let checked = 0;
let failures = [];
async function exists(file) { try { await access(file); return true; } catch { return false; } }
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { await walk(file); continue; }
    if (!entry.name.endsWith(".html")) continue;
    const html = await readFile(file, "utf8");
    if (html.includes("草稿示例：待补充")) failures.push("Draft leaked into " + file);
    for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
      const url = match[1].replaceAll("&amp;", "&");
      if (/^(?:https?:|mailto:|data:|#|javascript:)/.test(url)) continue;
      const target = decodeURIComponent(url.split(/[?#]/)[0]);
      if (!target) continue;
      if (target.startsWith("/") && !target.startsWith(base)) { failures.push(file + ": missing base path " + target); continue; }
      const local = target.startsWith(base) ? join(root, target.slice(base.length)) : resolve(dirname(file), target);
      if (local !== root && !local.startsWith(root + sep)) { failures.push("Path outside output: " + url); continue; }
      checked++;
      if (!await exists(local) && !await exists(join(local, "index.html"))) failures.push(file + ": missing target " + url);
    }
  }
}
await walk(root);
if (await exists(join(root, "entry/draft-example/index.html"))) failures.push("Draft detail page was generated.");
if (!await exists(join(root, "index.html"))) failures.push("Homepage is missing.");
if (!await exists(join(root, "guide/index.html"))) failures.push("Guide is missing.");
if (!await exists(join(root, "updates/index.html"))) failures.push("Release archive is missing.");
if (failures.length) throw new Error(failures.join("\n"));
console.log("Verified " + checked + " local links/assets; draft exclusion and required pages passed.");
