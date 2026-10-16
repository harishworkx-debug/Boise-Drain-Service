import { useEffect } from 'react';
import { businessInfo } from '@/data/business';

interface StructuredDataProps {
  id?: string;
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function StructuredData({ id, data }: StructuredDataProps) {
  useEffect(() => {
    // Generate a unique script tag ID based on props or data type
    const inferredType = Array.isArray(data)
      ? 'list'
      : typeof data['@type'] === 'string'
      ? data['@type'].toLowerCase()
      : 'custom';
    const scriptId = `structured-data-${id || inferredType}`;

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data, null, 2);

    return () => {
      // Clean up script on unmount so stale structured data does not leak between route changes
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, [id, data]);

  return null;
}

export function buildLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${businessInfo.website}#business`,
    name: businessInfo.name,
    telephone: businessInfo.phone,
    url: businessInfo.website,
    image: businessInfo.image,
    priceRange: businessInfo.priceRange,
    currenciesAccepted: businessInfo.currenciesAccepted,
    paymentAccepted: businessInfo.paymentAccepted,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '65',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Leslie Penney' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Kevin Bell at Boise Drain Service figured out when other plumbers did not that the blockage is on the City of Boise side of the property line. Kevin not only has very reasonable prices, but saved me a bunch of money as well!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jack Burrus' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Kevin is an exceptional plumber. We had a challenging issue that another plumber couldn’t resolve, but Kevin arrived promptly and identified a solution almost immediately.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Ryan Shaver' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Kevin responded quickly and came out that night to identify and fix the issue within a couple hours. He was courteous, friendly, and his price was very fair.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Matt Knauss' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Fantastic service! Kevin came out on a Sunday when our sewer line was backed up. Cleaned it out and check the rest of the drains to make sure there wasn’t any leaks.',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    hasMap: businessInfo.googleMapsLink,
    sameAs: [businessInfo.googleMapsLink],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency Sewer & Drain Dispatch',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Boise, ID' },
      { '@type': 'City', name: 'Meridian, ID' },
      { '@type': 'City', name: 'Eagle, ID' },
      { '@type': 'City', name: 'Garden City, ID' },
      { '@type': 'City', name: 'Nampa, ID' },
      { '@type': 'City', name: 'Caldwell, ID' },
      { '@type': 'City', name: 'Kuna, ID' },
      { '@type': 'City', name: 'Star, ID' },
      { '@type': 'City', name: 'Middleton, ID' },
      { '@type': 'City', name: 'Hidden Springs, ID' },
    ],
  };
}

export function buildServiceSchema(
  serviceName: string,
  locationName: string,
  description: string,
  canonicalUrl?: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...(canonicalUrl ? { '@id': `${canonicalUrl}#service`, url: canonicalUrl } : {}),
    name: `${serviceName} in ${locationName}, ID`,
    serviceType: serviceName,
    description,
    provider: {
      '@type': 'Plumber',
      '@id': `${businessInfo.website}#business`,
      name: businessInfo.name,
      telephone: businessInfo.phone,
      url: businessInfo.website,
    },
    areaServed: {
      '@type': 'City',
      name: `${locationName}, ID`,
    },
    termsOfService: `${businessInfo.website}faq`,
  };
}

export function buildFAQSchema(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { label: string; path?: string }[]
): Record<string, unknown> {
  const baseUrl = businessInfo.website.replace(/\/$/, '');

  const hasHome =
    items.length > 0 &&
    (items[0].label.toLowerCase() === 'home' || items[0].path === '/');
  const fullItems = hasHome
    ? items
    : [{ label: 'Home', path: '/' }, ...items];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => {
      let itemUrl: string | undefined;
      if (item.path) {
        itemUrl = item.path.startsWith('http')
          ? item.path
          : `${baseUrl}${item.path.startsWith('/') ? item.path : '/' + item.path}`;
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(itemUrl ? { item: itemUrl } : {}),
      };
    }),
  };
}

