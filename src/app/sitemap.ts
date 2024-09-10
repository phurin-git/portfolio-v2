import type { MetadataRoute } from 'next';
import { data } from './data/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: data.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
};