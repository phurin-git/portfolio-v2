import type { MetadataRoute } from 'next';
import { data } from './data/resume';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${data.url}/sitemap.xml`,
  };
};