import { availabilityLabels, categories, opennessLabels, topicLabels, topicsFor, type DirectoryEntry } from "./editorial";
import config from "@util/themeConfig";

export function entrySearch(entry: DirectoryEntry) {
  const data = entry.data;
  const extraText = [
    data.note, data.source, data.pricing, data.status, data.takeaway, data.access,
    data.availability && availabilityLabels[data.availability],
    data.openness && opennessLabels[data.openness],
    ...data.attributes.flatMap(item => [item.name, item.value]),
    ...data.timeline.flatMap(item => [item.date, item.title, item.description]),
    ...data.thoughts.flatMap(item => [item.title, item.kind, item.content, item.date]),
    ...data.strengths, ...data.limitations,
    ...data.tasks.map(item => item.title),
    ...data.sections.flatMap(item => [item.title, item.content]),
    ...data.links.flatMap(item => [item.title, item.description]),
  ];
  const tagNames = data.tags.map(tag => config.directoryData.tags.find(value => value.key === tag)?.name);
  const topics = topicsFor(data);
  return {
    "data-category": data.category,
    "data-date": data.recordedAt,
    "data-event": data.eventDate ?? "",
    "data-title": data.title,
    "data-featured": data.featured ? "1" : "0",
    "data-tags": JSON.stringify(data.tags),
    "data-topics": topics.join(" "),
    "data-search": [
      data.title, data.description, data.eventDate, categories[data.category],
      ...data.tags, ...tagNames, ...topics.map(topic => topicLabels[topic]), ...extraText, entry.body,
    ].filter(Boolean).join(" ").toLocaleLowerCase(),
  };
}
