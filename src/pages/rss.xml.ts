import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

const posts = [
  { slug: 'judgement-per-hour', title: 'judgement per hour', date: '2026-03-21', description: 'wrong metric is lines of code. the one that compounds is judgement calls.' },
  { slug: 'build-your-own-arsenal', title: 'build your own arsenal', date: '2026-03-19', description: 'best skills don\'t come from browsing packs. they come from the step that keeps repeating because skipping it broke something.' },
  { slug: 'ai-yes-machine', title: 'you\'re not thinking with ai. you\'re hiding behind it.', date: '2026-03-18', description: 'there\'s a version of ai productivity that looks like building and functions like avoidance.' },
  { slug: 'baptism-by-ice', title: 'baptism by ice', date: '2026-03-17', description: 'walk long enough and things separate on their own. what matters. what doesn\'t.' },
  { slug: 'market-timing', title: 'market timing', date: '2026-03-13', description: 'co-founded knowhere. $30m volume. we were tracking to #1. window closed. market timing beats execution every time.' },
  { slug: 'new-paradigm', title: 'new paradigm', date: '2026-03-12', description: 'designer codes. developer codes. biz guy codes. the tool just works for all three now.' },
  { slug: 'kanly-governance', title: 'kanly governance', date: '2026-03-09', description: 'ai makes you faster at building the wrong thing too. governance isn\'t overhead — it\'s what keeps speed from becoming expensive.' },
  { slug: 'openclaw-to-claude-code', title: 'openclaw → claude code', date: '2026-03-09', description: 'the middleware was the problem the entire time.' },
  { slug: 'ai-coding', title: 'ai in coding', date: '2026-03-08', description: 'not chasing speed — trying to see where it actually changes outcomes. a 10-post thread.' },
];

export function GET(context: APIContext) {
  return rss({
    title: 'isagi — writing',
    description: 'essays and threads',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.description,
      link: `/writing/${post.slug}/`,
    })),
  });
}
