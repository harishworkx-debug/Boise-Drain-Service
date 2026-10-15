import { useEffect } from 'react';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

interface SeoOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

export function useSeo({ title, description, canonicalPath, ogImage }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    const baseUrl = businessInfo.website.replace(/\/$/, '');
    const fullCanonical = `${baseUrl}${canonicalPath || ''}`;

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', fullCanonical, true);
    if (ogImage) {
      setMeta('og:image', ogImage, true);
    }
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);

    setCanonical(fullCanonical);
  }, [title, description, canonicalPath, ogImage]);
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  let tag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

export function buildServiceLocationUrl(serviceSlug: string, locationSlug: string): string {
  return `/${serviceSlug}-${locationSlug}`;
}

export function getAllServiceLocationUrls(): { serviceSlug: string; locationSlug: string; url: string }[] {
  const urls: { serviceSlug: string; locationSlug: string; url: string }[] = [];
  for (const service of services) {
    for (const location of locations) {
      urls.push({
        serviceSlug: service.slug,
        locationSlug: location.slug,
        url: buildServiceLocationUrl(service.slug, location.slug),
      });
    }
  }
  return urls;
}

export function generateSitemap(): string {
  const baseUrl = businessInfo.website.replace(/\/$/, '');
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/service-areas', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/faq', priority: '0.7', changefreq: 'monthly' },
    { path: '/sitemap', priority: '0.7', changefreq: 'weekly' },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const page of staticPages) {
    xml += `  <url>\n    <loc>${baseUrl}${page.path}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
  }

  for (const service of services) {
    for (const location of locations) {
      const url = buildServiceLocationUrl(service.slug, location.slug);
      xml += `  <url>\n    <loc>${baseUrl}${url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    }
  }

  xml += '</urlset>';
  return xml;
}

export function generateRobotsTxt(): string {
  const baseUrl = businessInfo.website.replace(/\/$/, '');
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
}
