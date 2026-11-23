import { getCollection } from "astro:content";

export async function getListings() {
  return getCollection("directory", ({ data }) => !data.draft);
}
