import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const whitepapers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/whitepapers' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { whitepapers };
