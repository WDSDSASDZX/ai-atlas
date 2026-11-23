export function initDirectory() {
  const grid = document.querySelector<HTMLElement>("#directory-grid");
  const search = document.querySelector<HTMLInputElement>("#search");
  const tag = document.querySelector<HTMLSelectElement>("#tag-filter");
  const sort = document.querySelector<HTMLSelectElement>("#sort-filter");
  const featured = document.querySelector<HTMLInputElement>("#featured-filter");
  const count = document.querySelector("#result-count");
  const empty = document.querySelector<HTMLElement>("#empty-state");
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-category-filter]"));
  if (!grid || !search || !tag || !sort || !featured) return;
  const cards = Array.from(grid.querySelectorAll<HTMLElement>(".listing"));
  const params = new URLSearchParams(location.search);
  let category = params.get("category") || "all";
  if (!buttons.some(button => button.dataset.categoryFilter === category)) category = "all";
  search.value = params.get("q") || "";
  if (Array.from(tag.options).some(option => option.value === params.get("tag"))) tag.value = params.get("tag") || "";
  if (Array.from(sort.options).some(option => option.value === params.get("sort"))) sort.value = params.get("sort") || "featured";
  featured.checked = params.get("featured") === "1";

  function update() {
    if (!grid || !search || !tag || !sort || !featured) return;
    const tokens = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.sort((a,b) => {
      const dates = (b.dataset.date || "").localeCompare(a.dataset.date || "");
      const names = (a.dataset.title || "").localeCompare(b.dataset.title || "", "zh-CN");
      if (sort.value === "title") return names;
      if (sort.value === "oldest") return -dates || names;
      if (sort.value === "newest") return dates || names;
      return Number(b.dataset.featured) - Number(a.dataset.featured) || dates || names;
    });
    for (const card of cards) {
      const tags: string[] = JSON.parse(card.dataset.tags || "[]");
      const text = card.dataset.search || "";
      const show = (category === "all" || card.dataset.category === category)
        && (!tag.value || tags.includes(tag.value))
        && (!featured.checked || card.dataset.featured === "1")
        && tokens.every(token => text.includes(token));
      card.hidden = !show;
      if (show) visible++;
      grid.append(card);
    }
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.categoryFilter === category)));
    if (count) count.textContent = visible + " 条记录";
    if (empty) empty.hidden = visible !== 0;
    const url = new URL(location.href);
    const values: Record<string, string> = { category: category === "all" ? "" : category, q: search.value, tag: tag.value, sort: sort.value === "featured" ? "" : sort.value, featured: featured.checked ? "1" : "" };
    Object.entries(values).forEach(([key,value]) => value ? url.searchParams.set(key,value) : url.searchParams.delete(key));
    history.replaceState(null, "", url);
  }
  buttons.forEach(button => button.addEventListener("click", () => { category = button.dataset.categoryFilter || "all"; update(); }));
  search.addEventListener("input", update);
  [tag, sort, featured].forEach(control => control.addEventListener("change", update));
  document.querySelector("#reset-filters")?.addEventListener("click", () => {
    category = "all"; search.value = ""; tag.value = ""; sort.value = "featured"; featured.checked = false; update(); search.focus();
  });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); search.focus(); }
  });
  update();
}
