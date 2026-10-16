import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Truck,
  Phone,
  CheckCircle2,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { useSeo, buildServiceLocationUrl } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import StructuredData, { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/917037/pexels-photo-917037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function ServiceAreas() {
  useSeo({
    title: 'Service Areas in Treasure Valley, ID | Boise Drain Service',
    description:
      'Boise Drain Service provides professional drain cleaning and sewer diagnostics across Boise, Meridian, Eagle, Nampa, Caldwell, and the Treasure Valley. Call 208-860-1639.',
    canonicalPath: '/service-areas',
    ogImage: heroImage,
  });

  // Key high-intent service categories to highlight per city (protecting against low-value link farming)
  const coreServiceSlugs = [
    'drain-cleaning',
    'drain-camera-inspection',
    'hydro-jetting',
    'sewer-line-cleaning',
    'sewer-line-repair',
  ];

  const primaryServices = services.filter((s) => coreServiceSlugs.includes(s.slug));

  const countyGroups = [
    {
      regionTitle: 'Ada County Core Communities',
      description: 'Our primary dispatch zone covering historic Boise neighborhoods and rapid-growth adjacent cities.',
      slugs: ['boise-id', 'meridian-id', 'eagle-id', 'garden-city-id', 'kuna-id', 'star-id', 'hidden-springs-id'],
    },
    {
      regionTitle: 'Canyon County Service Coverage',
      description: 'Daily mobile service runs along the I-84 and Highway 20/26 corridors to Canyon County properties.',
      slugs: ['nampa-id', 'caldwell-id', 'middleton-id'],
    },
  ];

  return (
    <>
      <StructuredData id="business" data={buildLocalBusinessSchema()} />
      <StructuredData
        id="breadcrumb"
        data={buildBreadcrumbSchema([{ label: 'Service Areas', path: '/service-areas' }])}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Scenic view of the Boise Foothills and Treasure Valley"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service Areas' }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Treasure Valley Coverage</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Service Areas
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Boise Drain Service operates locally out of Boise, dispatching equipped mobile service trucks across all 10 major communities in the Treasure Valley. Explore the distinct plumbing characteristics and core services for each area below.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CallButton variant="primary" size="lg" label="Call (208) 860-1639" />
              <div className="text-xs text-slate-400 sm:border-l sm:border-slate-700 sm:pl-4">
                <span className="font-semibold text-slate-200">Local Dispatch Notice: </span>
                <span>We do not use call centers or subcontract. You speak directly to our local technician team.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Coverage Highlights */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Truck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Direct Mobile Dispatch</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Service trucks travel fully equipped with continuous drum augers, HD inspection cameras, and hydro jetting rigs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Honest Local Representation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are based in Boise and serve surrounding communities transparently. No fake branch offices or misleading claims.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Navigation className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Plumbing Matched to Housing Age</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We tailor methods to local pipe materials: vintage clay/cast iron in older cores vs. modern PVC in newer subdivisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional City Hubs */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {countyGroups.map((group, gIdx) => {
            const groupLocations = locations.filter((l) => group.slugs.includes(l.slug));

            return (
              <div key={gIdx} className="space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                    {group.regionTitle}
                  </h2>
                  <p className="text-sm text-slate-600">{group.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {groupLocations.map((location) => (
                    <div
                      key={location.slug}
                      className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <h3 className="text-xl font-bold text-slate-900">
                              {location.name}, {location.state}
                            </h3>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                            Treasure Valley
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {location.description}
                        </p>

                        {/* Local Plumbing Context */}
                        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 mb-5">
                          <div className="text-[11px] text-slate-700 leading-tight">
                            <strong className="text-slate-900">Housing: </strong>
                            {location.housingProfile}
                          </div>
                          <div className="text-[11px] text-slate-700 leading-tight">
                            <strong className="text-slate-900">Pipes: </strong>
                            {location.typicalPipeMaterials}
                          </div>
                          <div className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200/60">
                            {location.serviceDispatchNote}
                          </div>
                        </div>
                      </div>

                      {/* Targeted Core Service Links */}
                      <div>
                        <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                          Key Services in {location.name}:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {primaryServices.map((service) => (
                            <Link
                              key={service.slug}
                              to={buildServiceLocationUrl(service.slug, location.slug)}
                              className="text-xs font-medium bg-blue-50/80 hover:bg-blue-600 text-blue-700 hover:text-white px-3 py-1.5 rounded-lg border border-blue-100 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Central Location</h2>
            <p className="text-sm text-slate-600">
              Centrally based in Boise, Idaho, dispatching service vehicles across Ada and Canyon counties.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src={businessInfo.googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Boise Drain Service Location Map"
              className="w-full"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href={businessInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
            >
              Open Boise Drain Service on Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Need Drain Service in the Treasure Valley?"
        subtext="Call 208-860-1639 to consult directly with our drain team. We'll verify current service dispatch to your neighborhood immediately."
        bgClass="bg-slate-900"
      />
    </>
  );
}
