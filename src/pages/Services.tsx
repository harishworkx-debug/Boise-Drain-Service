import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Droplets,
  Camera,
  Gauge,
  GitBranch,
  Wrench,
  Construction,
  CookingPot,
  ShowerHead,
  Waves,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';
import { serviceKeywordStrategies } from '@/data/serviceDetails';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/components/StructuredData';
import * as Icons from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Services() {
  const primaryLocation = locations.find((l) => l.slug === businessInfo.primaryLocationSlug) || locations[0];

  useSeo({
    title: 'Professional Drain & Sewer Services | Boise Drain Service',
    description:
      'Explore all drain and sewer services offered by Boise Drain Service. From mechanical drain cleaning and 4,000 PSI hydro jetting to HD camera inspections and sewer repair. Call 208-768-0044.',
    canonicalPath: '/services',
    ogImage: heroImage,
  });

  const coreServiceGroups = [
    {
      groupTitle: 'Core Drain Clearing & Emergency Stoppages',
      groupDescription:
        'Targeted mechanical clearing for residential and commercial drains to restore fast, reliable flow without pipe damage.',
      slugs: ['drain-cleaning', 'clogged-drain-repair', 'main-drain-cleaning'],
    },
    {
      groupTitle: 'Advanced Diagnostics & Deep Scouring',
      groupDescription:
        'High-resolution underground camera inspections and commercial 4,000 PSI water jetting that scrub pipe walls 360 degrees.',
      slugs: ['drain-camera-inspection', 'hydro-jetting'],
    },
    {
      groupTitle: 'Underground Sewer Lateral Solutions',
      groupDescription:
        'Comprehensive diagnosis and solutions for your main underground line connecting your home to the municipal main or septic system.',
      slugs: ['sewer-line-cleaning', 'sewer-line-repair'],
    },
    {
      groupTitle: 'Fixture-Specific Branch Cleaning',
      groupDescription:
        'Tailored servicing for kitchen grease lines, bathroom hair clogs, and basement utility floor drains.',
      slugs: ['kitchen-drain-cleaning', 'bathroom-drain-cleaning', 'floor-drain-cleaning'],
    },
  ];

  return (
    <>
      <StructuredData id="business" data={buildLocalBusinessSchema()} />
      <StructuredData
        id="breadcrumb"
        data={buildBreadcrumbSchema([{ label: 'Services', path: '/services' }])}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional drain cleaning and sewer inspection tools"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Wrench className="w-4 h-4 text-blue-400" />
              <span>Full Service Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Professional Drain & Sewer Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Boise Drain Service provides specialized drain cleaning, underground camera diagnostics, hydro jetting, and sewer line solutions across Boise and the Treasure Valley. Find the right service for your plumbing issue below.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CallButton variant="primary" size="lg" label="Call (208) 768-0044" />
              <span className="text-xs text-slate-400 sm:border-l sm:border-slate-700 sm:pl-4">
                Direct technician intake • Upfront diagnostic assessments • No call centers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Anchor Bar */}
      <section className="bg-white border-b border-slate-200 py-4 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto text-xs font-semibold whitespace-nowrap pb-1 sm:pb-0">
            <span className="text-slate-400 uppercase tracking-wider">Jump to:</span>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Grouped Service Hub Sections */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {coreServiceGroups.map((group, groupIndex) => {
            const groupServices = services.filter((s) => group.slugs.includes(s.slug));

            return (
              <div key={groupIndex} className="space-y-8">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    {group.groupTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600">
                    {group.groupDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupServices.map((service) => {
                    const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Droplets) as Icons.LucideIcon;

                    return (
                      <div
                        id={service.slug}
                        key={service.slug}
                        className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                      >
                        <div>
                          <div className="relative h-48 overflow-hidden bg-slate-100">
                            <img
                              src={service.image}
                              alt={service.imageAlt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3 w-10 h-10 bg-slate-900/80 backdrop-blur rounded-lg flex items-center justify-center text-white">
                              <Icon className="w-5 h-5 text-blue-400" />
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                              {service.shortDescription}
                            </p>

                            <div className="space-y-2 pt-2 border-t border-slate-100 mb-4">
                              <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                                Common Symptoms Solved:
                              </div>
                              <ul className="space-y-1">
                                {service.commonProblems.slice(0, 3).map((prob, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 leading-snug">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>{prob}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 pt-0 space-y-3">
                          <Link
                            to={buildServiceLocationUrl(service.slug, primaryLocation.slug)}
                            className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl text-xs font-semibold transition-colors group/link"
                          >
                            <span>
                              {serviceKeywordStrategies[service.slug]?.descriptiveAnchorText.replace('{city}', 'Boise') || `View ${service.name} in Boise`}
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                          <div className="text-[11px] text-slate-400 text-center">
                            Available in Boise, Meridian, Eagle & all 10 cities
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Selection Guidance */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" /> Diagnostic Help
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Not Sure Which Drain Service You Need?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Different plumbing issues require different mechanical and diagnostic methods. Here is a quick reference guide:
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Single Slow Fixture (Kitchen Sink, Shower, or Vanity)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If only one drain in your house is slow while all other fixtures drain freely, you have an isolated branch line clog. Standard <strong>Drain Cleaning</strong> or fixture-specific cleaning is recommended.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Multiple Drains Backing Up or Toilets Gurgling
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If flushing an upstairs toilet causes water to bubble in a ground-floor shower or basement floor drain, you have a central blockage. You need <strong>Main Drain Cleaning</strong> or <strong>Sewer Line Cleaning</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Recurring Clogs Every Few Months
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you keep snaking the same drain over and over, stop guessing. A <strong>Drain Camera Inspection</strong> will identify whether tree roots, a pipe belly (sag), or heavy grease require <strong>Hydro Jetting</strong> or localized <strong>Sewer Repair</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Ready to Clear Your Drain Problem?"
        subtext="Speak directly with an experienced technician at Boise Drain Service. Call 208-768-0044 to discuss your situation and schedule prompt service."
        bgClass="bg-slate-900"
      />
    </>
  );
}
