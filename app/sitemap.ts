import type { MetadataRoute } from 'next';
import { posts } from './blog/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://aiskillsagents.com';
  const now = new Date().toISOString();
  const static_pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
  const blog_pages: MetadataRoute.Sitemap = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));
  return [...static_pages, ...blog_pages];
}
