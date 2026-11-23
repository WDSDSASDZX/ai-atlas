import type { AllContent } from "../types/content";
import { getCollection } from "astro:content";
import { getListings } from "./getListings";

export async function getRootPages(remapIndex = true) {
  const entries: Array<AllContent> = [
    ...await getListings(),
    ...await getCollection("pages"),
  ];
  return entries.map(entry => ({
    params: { slug: entry.collection === "directory" ? "entry/" + entry.id : entry.id === "index" && remapIndex ? undefined : entry.id },
    props: { entry },
  }));
}
