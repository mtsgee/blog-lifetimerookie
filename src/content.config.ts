import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const personal = defineCollection({
	loader: glob({ base: './src/content/personal', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const money = defineCollection({
	loader: glob({ base: './src/content/money', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const music = defineCollection({
	loader: glob({ base: './src/content/music', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		artist: z.string(),
		type: z.enum(['song', 'album']),
		url: z.string().url(),
		videoId: z.string(),
		note: z.string().optional(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { personal, money, music };
