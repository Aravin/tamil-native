import { locationByPopulation } from '@/components/Locations/locationData';
import { MetadataRoute } from 'next';

const domain = 'https://www.tamilnative.com';

// importing from component
// TODO: optimize it, bad practice

const generateSitemapForAllLocation = (path: string) => {
  return locationByPopulation.map((_) => {
      return {
        url: `${domain}/article/${path}-${_.country.split(' ').join('-')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as any,
        priority: 0.4,
      };
  });
}


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: domain + '/transport-types',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: domain + '/service-locations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: domain + '/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: domain + '/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: domain + '/terms',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    ...generateSitemapForAllLocation('most-shipped-items-from-tamilnadu-to'),
  ]
}