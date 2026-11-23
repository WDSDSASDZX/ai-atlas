// The Markdown loader from Minted Directory; content stays in the repository.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { directorySchema } from "@validation/directory";

export function createDirectoryCollection() {
  return defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/directory" }),
    schema: ({ image }) => directorySchema(image()),
  });
}
