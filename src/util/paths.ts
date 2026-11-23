/** Resolve internal paths for both a project subpath and public assets. */
export function withBase(path = ""): string {
  if (/^(?:https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && (path === base || path.startsWith(base + "/"))) return path;
  return base + "/" + path.replace(/^\//, "");
}
