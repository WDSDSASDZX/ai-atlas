const titleOrder = new Intl.Collator("zh-CN");

export function initDirectory() {
  const grid = document.querySelector<HTMLElement>("#directory-grid");
  const search = document.querySelector<HTMLInputElement>("#search");
  const sort = document.querySelector<HTMLSelectElement>("#sort-filter");
  const month = document.querySelector<HTMLSelectElement>("#month-filter");
  const topic = document.querySelector<HTMLSelectElement>("#topic-filter");
  if (!grid || !search || !sort || !month || !topic) return;

  const tag = document.querySelector<HTMLSelectElement>("#tag-filter");
  const featured = document.querySelector<HTMLInputElement>("#featured-filter");
  const count = document.querySelector("#result-count");
  const empty = document.querySelector<HTMLElement>("#empty-state");
  const clear = document.querySelector<HTMLButtonElement>("#clear-filters");
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-category-filter]"));
  const isTimeline = grid.dataset.mode === "timeline";
  const defaultSort = isTimeline ? "event-newest" : "featured";
  const groups = Array.from(grid.querySelectorAll<HTMLElement>("[data-event-day]"));
  const cards = Array.from(grid.querySelectorAll<HTMLElement>(".listing"), node => ({
    node,
    link: node.querySelector<HTMLAnchorElement>("[data-entry-link]"),
    date: node.dataset.date ?? "",
    event: node.dataset.event ?? "",
    title: node.dataset.title ?? "",
    category: node.dataset.category ?? "",
    featured: node.dataset.featured === "1",
    tags: JSON.parse(node.dataset.tags || "[]") as string[],
    topics: (node.dataset.topics ?? "").split(" "),
    text: node.dataset.search ?? "",
  }));
  const initial = new URLSearchParams(location.search);
  const initialCategory = initial.get("category");
  let category = buttons.some(button => button.dataset.categoryFilter === initialCategory) ? initialCategory ?? "all" : "all";
  search.value = initial.get("q") ?? "";

  function restore(control: HTMLSelectElement | null, key: string, fallback = "") {
    if (!control) return;
    const value = initial.get(key);
    control.value = value && Array.from(control.options).some(option => option.value === value) ? value : fallback;
  }
  restore(tag, "tag");
  restore(sort, "sort", defaultSort);
  restore(month, "month");
  restore(topic, "topic");
  if (featured) featured.checked = initial.get("featured") === "1";

  const eventOrder = (a: string, b: string, oldest: boolean) => {
    if (!a || !b) return Number(!a) - Number(!b);
    return oldest ? a.localeCompare(b) : b.localeCompare(a);
  };

  function update() {
    if (!grid || !search || !sort || !month || !topic) return;
    const tokens = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const url = new URL(location.href);
    const values = {
      category: category === "all" ? "" : category,
      q: search.value.trim(),
      month: month.value,
      topic: topic.value,
      tag: tag?.value ?? "",
      sort: sort.value === defaultSort ? "" : sort.value,
      featured: featured?.checked ? "1" : "",
    };
    Object.entries(values).forEach(([key, value]) => value ? url.searchParams.set(key, value) : url.searchParams.delete(key));
    history.replaceState(null, "", url);
    const returnPath = url.pathname + url.search + "#browse";

    if (!isTimeline) {
      cards.sort((a, b) => {
        const dates = b.date.localeCompare(a.date);
        const names = titleOrder.compare(a.title, b.title);
        if (sort.value === "event-newest" || sort.value === "event-oldest") {
          return eventOrder(a.event, b.event, sort.value === "event-oldest") || dates || names;
        }
        if (sort.value === "title") return names;
        if (sort.value === "oldest") return -dates || names;
        if (sort.value === "newest") return dates || names;
        return Number(b.featured) - Number(a.featured) || dates || names;
      });
      grid.append(...cards.map(card => card.node));
    }

    let visible = 0;
    for (const card of cards) {
      const show = (category === "all" || card.category === category)
        && (!tag?.value || card.tags.includes(tag.value))
        && (!topic.value || card.topics.includes(topic.value))
        && (!month.value || card.event.startsWith(month.value + "-"))
        && (!featured?.checked || card.featured)
        && tokens.every(token => card.text.includes(token));
      card.node.hidden = !show;
      if (!show) continue;
      visible++;
      if (card.link) {
        const href = new URL(card.link.href);
        href.searchParams.set("from", returnPath);
        card.link.href = href.pathname + href.search;
      }
    }
    if (isTimeline) {
      groups.sort((a, b) => eventOrder(a.dataset.eventDay ?? "", b.dataset.eventDay ?? "", sort.value === "event-oldest"));
      for (const group of groups) group.hidden = !group.querySelector(".listing:not([hidden])");
      grid.append(...groups);
    }
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.categoryFilter === category)));
    if (count) count.textContent = visible + (isTimeline ? " 条动态" : " 条记录");
    if (empty) empty.hidden = visible !== 0;
    if (clear) clear.hidden = !Object.values(values).some(Boolean);
  }

  function reset() {
    if (!search || !sort || !month || !topic) return;
    category = "all";
    search.value = month.value = topic.value = "";
    sort.value = defaultSort;
    if (tag) tag.value = "";
    if (featured) featured.checked = false;
    update();
    search.focus();
  }

  buttons.forEach(button => button.addEventListener("click", () => {
    category = button.dataset.categoryFilter ?? "all";
    update();
  }));
  search.addEventListener("input", update);
  [month, topic, tag, sort, featured].forEach(control => control?.addEventListener("change", update));
  clear?.addEventListener("click", reset);
  document.querySelector("#reset-filters")?.addEventListener("click", reset);
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      search.focus();
    }
  });
  update();
}
