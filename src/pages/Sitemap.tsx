import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  MapPin,
  Wrench,
  Search,
  ExternalLink,
  Layers,
  CheckCircle2,
  Phone,
  Home,
  Info,
  HelpCircle,
  Mail,
  ArrowRight
} from 'lucide-react';
import { useSeo, buildServiceLocationUrl } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import StructuredData, { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Sitemap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'service' | 'location'>('service');

  useSeo({
    title: 'HTML Sitemap | All Services & Locations | Boise Drain Service',
    description:
      'Complete HTML sitemap directory of all drain cleaning and sewer repair services, service areas, and localized pages across Boise, ID and Treasure Valley.',
    canonicalPath: '/sitemap',
    ogImage: heroImage,
  });

  const staticPages = [
    { name: 'Home Page', path: '/', description: 'Overview of Boise Drain Service, 24/7 availability, core specialties, and direct emergency dispatch.', icon: Home },
    { name: 'All Services', path: '/services', description: 'Comprehensive directory of all professional drain cleaning and sewer repair services.', icon: Wrench },
    { name: 'Service Areas', path: '/service-areas', description: 'Directory of Boise and 9 surrounding Treasure Valley communities we serve.', icon: MapPin },
    { name: 'About Us', path: '/about', description: 'Learn about our local team, specialized drain equipment, mission, and commitment to quality.', icon: Info },
    { name: 'Frequently Asked Questions', path: '/faq', description: 'Answers to common drain clogs, sewer line maintenance, and pricing questions.', icon: HelpCircle },
    { name: 'Contact Us', path: '/contact', description: 'Phone dispatch, local address, online inquiry form, and emergency contact details.', icon: Mail },
  ];

  const primaryLocation = locations.find((l) => l.slug === businessInfo.primaryLocationSlug) || locations[0];

  // Filtered lists based on search
  const filteredServices = useMemo(() => {
    if (!searchTerm.trim()) return services;
    const term = searchTerm.toLowerCase();
    return services.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.shortDescription.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const filteredLocations = useMemo(() => {
    if (!searchTerm.trim()) return locations;
    const term = searchTerm.toLowerCase();
    return locations.filter(
      (l) =>
        l.name.toLowerCase().includes(term) ||
        l.description.toLowerCase().includes(term) ||
        l.state.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const totalPagesCount = staticPages.length + 1 + (services.length * locations.length); // static + /sitemap + 100 combos

  return (
    <>
      <StructuredData id="business" data={buildLocalBusinessSchema()} />
      <StructuredData
        id="breadcrumb"
        data={buildBreadcrumbSchema([{ label: 'Sitemap', path: '/sitemap' }])}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Boise Drain Service Sitemap"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sitemap' }]} />
          
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-500/30">
              <Layers className="w-3.5 h-3.5" /> Full Site Directory
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Website Sitemap
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Explore the complete directory of Boise Drain Service. Here you will find quick access to all core pages, drain and sewer services, and localized pages for every community in the Treasure Valley.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl">
            <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700/60">
              <div className="text-3xl font-extrabold text-blue-400">{totalPagesCount}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Total Indexed Pages</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700/60">
              <div className="text-3xl font-extrabold text-white">{services.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Core Services</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700/60">
              <div className="text-3xl font-extrabold text-white">{locations.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Service Cities</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur rounded-xl p-4 border border-slate-700/60">
              <div className="text-3xl font-extrabold text-emerald-400">{services.length * locations.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Location Landing Pages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Technical Note Callout */}
          <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-blue-950 leading-relaxed">
              <strong className="font-bold text-blue-900">HTML Directory vs. Search Engine XML Sitemap: </strong>
              This readable directory is curated for human visitors to navigate all core pages, services, and local Treasure Valley resources. For search engine crawlers (Googlebot, Bingbot), our technically validated index is maintained separately at{' '}
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-700">
                /sitemap.xml
              </a>{' '}
              following the official Sitemap 0.9 XML protocol.
            </div>
          </div>

          {/* Search Bar & XML Link */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services or cities (e.g., Meridian, Hydro Jetting)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors border border-slate-300"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                Raw XML Sitemap
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors border border-slate-300"
              >
                Robots.txt
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* 1. Main Website Pages */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
              <Home className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Main Pages</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {staticPages.map((page) => {
                const PageIcon = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <PageIcon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {page.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {page.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {page.path} <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 2. Core Plumbing & Drain Services */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Wrench className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Core Services ({filteredServices.length})</h2>
              </div>
              <Link to="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View Services Page &rarr;
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <Link
                  key={service.slug}
                  to={buildServiceLocationUrl(service.slug, primaryLocation.slug)}
                  className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 truncate transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {service.shortDescription}
                    </p>
                    <span className="text-[11px] text-blue-600 font-medium inline-block mt-1">
                      /{service.slug}-{primaryLocation.slug}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Service Areas */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Treasure Valley Service Areas ({filteredLocations.length})</h2>
              </div>
              <Link to="/service-areas" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View All Areas &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {filteredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={buildServiceLocationUrl('drain-cleaning', loc.slug)}
                  className="group bg-white p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {loc.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">{loc.state}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Complete Service by City Landing Pages (100 URLs) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-blue-600" />
                  All 100 Localized Service Landing Pages
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Every service paired with each local Treasure Valley city for targeted local assistance.
                </p>
              </div>

              {/* View Switcher */}
              <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-slate-50">
                <button
                  onClick={() => setViewMode('service')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    viewMode === 'service'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Group by Service
                </button>
                <button
                  onClick={() => setViewMode('location')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    viewMode === 'location'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Group by City
                </button>
              </div>
            </div>

            {viewMode === 'service' ? (
              <div className="space-y-8">
                {filteredServices.map((service) => (
                  <div key={service.slug} className="border border-slate-100 rounded-xl p-5 bg-slate-50/50">
                    <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      {service.name} Pages
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                      {locations.map((loc) => {
                        const url = buildServiceLocationUrl(service.slug, loc.slug);
                        return (
                          <Link
                            key={`${service.slug}-${loc.slug}`}
                            to={url}
                            className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
                          >
                            <span className="truncate">{loc.name}, {loc.state}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {filteredLocations.map((loc) => (
                  <div key={loc.slug} className="border border-slate-100 rounded-xl p-5 bg-slate-50/50">
                    <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {loc.name}, {loc.state} Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                      {services.map((service) => {
                        const url = buildServiceLocationUrl(service.slug, loc.slug);
                        return (
                          <Link
                            key={`${service.slug}-${loc.slug}`}
                            to={url}
                            className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
                          >
                            <span className="truncate">{service.name}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
