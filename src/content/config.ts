import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const kanlyCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kanly' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    description: z.string(),
  }),
});

export const collections = {
  kanly: kanlyCollection,
};
