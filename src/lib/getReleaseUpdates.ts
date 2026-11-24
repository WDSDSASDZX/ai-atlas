import type { DirectoryEntry } from "./editorial";

const versionOrder = new Intl.Collator("en", { numeric: true });

export function getReleaseUpdates(listings: DirectoryEntry[]) {
  const projects = new Map(listings.map(item => [item.id, item]));
  return listings.flatMap(update => {
    const { projectId, version, eventDate } = update.data;
    if (!projectId || !version || !eventDate) return [];
    const project = projects.get(projectId);
    if (!project || project.id === update.id || project.data.projectId) {
      throw new Error(`版本动态 ${update.id} 需要关联一份已公开的项目档案（${projectId}）`);
    }
    return [{ update, project, version, eventDate }];
  }).sort((a, b) =>
    b.eventDate.localeCompare(a.eventDate)
    || a.project.data.title.localeCompare(b.project.data.title, "zh-CN")
    || versionOrder.compare(b.version, a.version)
    || a.update.data.title.localeCompare(b.update.data.title, "zh-CN")
  );
}

export type ReleaseUpdate = ReturnType<typeof getReleaseUpdates>[number];
