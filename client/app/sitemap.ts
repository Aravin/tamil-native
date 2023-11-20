import { MetadataRoute } from 'next'

const domain = 'https://www.tamilnative.com'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
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
      url: domain + '/service-locations',
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
  ]
}