import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  AlertTriangle,
  ShieldCheck,
  Check,
  Phone,
  HelpCircle,
  FileText,
  Star,
  Activity,
  Compass,
} from 'lucide-react';
import { useSeo, buildServiceLocationUrl } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services, Service } from '@/data/services';
import { locations, Location } from '@/data/locations';
import { serviceDetails, serviceKeywordStrategies } from '@/data/serviceDetails';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData, {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from '@/components/StructuredData';
import * as Icons from 'lucide-react';

export default function ServiceLocation() {
  const params = useParams();
  const fullPath = (params['*'] || '').replace(/^\//, '');

  // Match against known services and locations
  const matchedService = services.find((s) => fullPath.startsWith(s.slug + '-'));
  const matchedLocation = matchedService
    ? locations.find((l) => fullPath === `${matchedService.slug}-${l.slug}`)
    : undefined;

  if (!matchedService || !matchedLocation) {
    return <Navigate to="/404" replace />;
  }

  const service: Service = matchedService;
  const location: Location = matchedLocation;
  const detail = serviceDetails[service.slug];
  const canonicalPath = buildServiceLocationUrl(service.slug, location.slug);
  const Icon = (Icons[service.icon as keyof typeof Icons] || Icons.Droplets) as Icons.LucideIcon;

  // Custom SEO titles and descriptions based on intent
  const seoTitle = `${service.name} in ${location.name}, ${location.state} | Boise Drain Service`;
  const seoDescription = detail?.categoryIntent
    ? `${detail.categoryIntent.slice(0, 115)} Serving ${location.name}, ${location.state}. Call Boise Drain Service at 208-860-1639 for direct technician service.`
    : `${service.shortDescription} Serving ${location.name}, ${location.state}. Call Boise Drain Service at 208-860-1639.`;

  useSeo({
    title: seoTitle,
    description: seoDescription,
    canonicalPath,
    ogImage: service.image,
  });

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 5);
  const otherLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 6);

  // Merge service-specific FAQs with location verification FAQ
  const pageFaqs = [
    ...(detail?.serviceFaqs || service.faqs),
    {
      question: `Does Boise Drain Service provide ${service.name.toLowerCase()} in ${location.name}, ${location.state}?`,
      answer: `Yes. Boise Drain Service is locally based in Boise and dispatches fully equipped drain cleaning service vehicles directly to ${location.name}, ${location.state}, and surrounding Treasure Valley communities. Call ${businessInfo.phone} to speak directly with an experienced technician about your specific drainage problem.`,
    },
  ];

  const canonicalUrl = `${businessInfo.website.replace(/\/$/, '')}${canonicalPath}`;

  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: service.name, path: buildServiceLocationUrl(service.slug, businessInfo.primaryLocationSlug) },
    { label: `${location.name}, ${location.state}`, path: canonicalPath },
  ];

  // Pick matching case study or closest regional case study
  const caseStudy =
    detail?.caseStudies.find((c) => c.locationSlug === location.slug) ||
    detail?.caseStudies[0];

  const testimonial = detail?.serviceTestimonials[0];

  return (
    <>
      <StructuredData
        id="service"
        data={buildServiceSchema(service.name, location.name, service.description, canonicalUrl)}
      />
      <StructuredData id="faq" data={buildFAQSchema(pageFaqs)} />
      <StructuredData id="breadcrumb" data={buildBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData id="business" data={buildLocalBusinessSchema()} />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Icon className="w-4 h-4 text-blue-400" />
              <span>{service.name} Specialist</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              {service.name} in {location.name}, {location.state}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {detail?.categoryIntent || service.shortDescription}
            </p>

            {/* Direct Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-2.5 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-lg p-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Direct Technician Assessment</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-lg p-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Dispatched from Boise to {location.name}</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-200">Equipped for PVC, Clay & Cast Iron</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CallButton variant="primary" size="lg" label="Call 208-860-1639" />
              <div className="text-xs text-slate-400 sm:border-l sm:border-slate-700 sm:pl-4 flex flex-col justify-center">
                <span className="font-semibold text-slate-200">Need immediate help?</span>
                <span>Speak directly with an experienced technician today.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="bg-slate-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Primary Content Column (Left 2 cols) */}
            <div className="lg:col-span-2 space-y-12">
              {/* 1. Service Overview & Authentic Local Plumbing Context */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <span>Understanding {service.name} in {location.name}</span>
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {service.serviceDescription}
                </p>

                {/* Local Housing & Plumbing Profile */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>Local Plumbing Realities in {location.name}, {location.state}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Housing Profile: </strong>
                    {location.housingProfile}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Typical Pipe Materials: </strong>
                    {location.typicalPipeMaterials}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Local Drainage Factors: </strong>
                    {location.localPlumbingNotes}
                  </p>
                  <p className="text-xs text-slate-500 italic pt-1 border-t border-slate-200">
                    {location.serviceDispatchNote}
                  </p>
                </div>
              </div>

              {/* 2. Common Symptoms & Problems Checklist */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Common {service.name} Problems We Resolve in {location.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Drain issues rarely solve themselves and often worsen quickly if ignored. If your {location.name} property is exhibiting any of the following symptoms, a professional assessment is recommended:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.commonProblems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-800 leading-snug">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. What Customers Can Expect (The 4-Step Process) */}
              {detail?.processSteps && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2.5">
                    <Compass className="w-6 h-6 text-blue-600" />
                    <span>What to Expect on Your Service Call</span>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    We believe in full transparency. Here is our step-by-step diagnostic and service process when you schedule a visit to your property in {location.name}:
                  </p>
                  <div className="space-y-6">
                    {detail.processSteps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-extrabold flex items-center justify-center flex-shrink-0 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {step.stepNumber}
                        </div>
                        <div className="flex-1 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Methods Used & Realistic Limitations */}
              {detail?.methods && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                    <Icons.Wrench className="w-6 h-6 text-blue-600" />
                    <span>Cleaning & Diagnostic Methods We Deploy</span>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    We select our equipment based on your home’s pipe material, age, and the exact physical nature of the obstruction:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {detail.methods.map((method, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-sm transition-all">
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{method.name}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-2.5">{method.description}</p>
                        <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide bg-blue-50 px-2.5 py-1 rounded inline-block">
                          Best for: {method.bestFor}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Realistic Limitations Warning Box */}
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>Realistic Limitations & What Customers Should Know</span>
                    </div>
                    <ul className="space-y-2">
                      {detail.limitations.map((lim, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-amber-950 leading-relaxed">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 5. Special Module: Crucial Pipe Condition Safety Warning (Hydro Jetting) */}
              {detail?.pipeConditionWarning && (
                <div className="bg-rose-50 rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-rose-950">{detail.pipeConditionWarning.title}</h3>
                      <p className="text-xs text-rose-700 font-medium">Why we inspect before applying high-pressure water</p>
                    </div>
                  </div>
                  <p className="text-sm text-rose-900 leading-relaxed mb-4">
                    {detail.pipeConditionWarning.warningText}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-3 border-t border-rose-200">
                    <div>
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        Safe for High Pressure
                      </h4>
                      <ul className="space-y-1">
                        {detail.pipeConditionWarning.safePipeTypes.map((pt, i) => (
                          <li key={i} className="text-xs text-slate-700">• {pt}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        Caution / Pre-Inspection Mandatory
                      </h4>
                      <ul className="space-y-1">
                        {detail.pipeConditionWarning.cautionPipeTypes.map((pt, i) => (
                          <li key={i} className="text-xs text-slate-700">• {pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Special Module: Diagnostic Decision Matrix (Cleaning vs Repair, Jetting vs Snaking) */}
              {detail?.diagnosticComparison && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{detail.diagnosticComparison.title}</h3>
                  <p className="text-xs text-slate-500 mb-6">{detail.diagnosticComparison.subtitle}</p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <th className="py-3 px-3 font-semibold text-slate-600">Decision Aspect</th>
                          <th className="py-3 px-3 font-bold text-blue-700">{detail.diagnosticComparison.optionAName}</th>
                          <th className="py-3 px-3 font-bold text-indigo-700">{detail.diagnosticComparison.optionBName}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {detail.diagnosticComparison.rows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="py-3 px-3 font-semibold text-slate-800">{row.aspect}</td>
                            <td className="py-3 px-3 text-slate-600 leading-relaxed">{row.cleaningOrOptionA}</td>
                            <td className="py-3 px-3 text-slate-600 leading-relaxed">{row.repairOrOptionB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-blue-900">Technician Guidance: </strong>
                    {detail.diagnosticComparison.recommendation}
                  </div>
                </div>
              )}

              {/* 7. Special Module: Camera Inspection Guidance & How Findings Guide Repairs */}
              {detail?.cameraInspectionGuidance && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Icons.Camera className="w-5 h-5 text-blue-600" />
                    <span>How Camera Inspection Findings Guide Repair Decisions</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {detail.cameraInspectionGuidance.howItGuidesDecision}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        When a Camera Inspection is Recommended:
                      </h4>
                      <ul className="space-y-1.5">
                        {detail.cameraInspectionGuidance.whenRecommended.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        What the Camera Can Positively Identify:
                      </h4>
                      <ul className="space-y-1.5">
                        {detail.cameraInspectionGuidance.whatItIdentifies.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 8. Keyword Intent & Cannibalization Prevention: Differentiating Service Purpose */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <Compass className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Understanding the Difference: Which Drain Service Do You Need in {location.name}?
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Different drainage problems can share similar symptoms (like slow water or bubbling), but require entirely different diagnostic and mechanical approaches. To ensure you receive the exact solution without paying for unneeded repairs, compare our specialized services in {location.name}:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedServices.map((rel) => {
                    const relStrategy = serviceKeywordStrategies[rel.slug];
                    const anchorText = relStrategy?.descriptiveAnchorText.replace('{city}', location.name) || `${rel.name} in ${location.name}`;
                    const scope = relStrategy?.distinctScope || rel.shortDescription;

                    return (
                      <div key={rel.slug} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between">
                        <div>
                          <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1">
                            {rel.name}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            {scope}
                          </p>
                        </div>
                        <Link
                          to={buildServiceLocationUrl(rel.slug, location.slug)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2 border-t border-slate-200/60"
                        >
                          <span>{anchorText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 9. Real Treasure Valley Completed Job Case Study */}
              {caseStudy && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-md">
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                        Completed Job Case Study
                      </span>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {caseStudy.city}, ID ({caseStudy.neighborhoodOrArea})
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Property Profile</h4>
                      <p className="text-sm font-semibold text-white">{caseStudy.propertyType}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Reported Problem</h4>
                      <p className="text-sm text-slate-200 leading-relaxed">{caseStudy.problem}</p>
                    </div>
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                      <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-1">
                        Technician Diagnosis & Action Taken
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed mb-2">
                        {caseStudy.technicianDiagnosis}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-white">Method & Equipment: </strong>
                        {caseStudy.solutionAndEquipment}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Final Outcome</h4>
                      <p className="text-sm text-emerald-200 leading-relaxed">{caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 9. Verified Customer Testimonial */}
              {testimonial && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-800 ml-1.5">5.0 Star Feedback</span>
                    </div>
                    <a
                      href={businessInfo.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-blue-600 hover:text-blue-700 underline flex items-center gap-1"
                    >
                      <span>Google Verified (65 Reviews)</span>
                    </a>
                  </div>
                  <blockquote className="text-slate-700 text-base italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-xs font-semibold text-slate-900">
                    {testimonial.name} <span className="text-slate-400 font-normal">• {testimonial.city}</span>
                    <span className="block text-[11px] text-blue-600 font-medium">{testimonial.service} Customer</span>
                  </div>
                </div>
              )}

              {/* 10. Service-Specific FAQs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    {service.name} FAQs in {location.name}
                  </h2>
                </div>
                <p className="text-sm text-slate-600 mb-6">
                  Clear answers to common questions about drain diagnostics, methods, and service in {location.name}, Idaho.
                </p>
                <FAQAccordion faqs={pageFaqs} />
              </div>
            </div>

            {/* Sidebar Column (Right 1 col) */}
            <div className="space-y-6">
              {/* Sticky Call Card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-center sticky top-24 shadow-lg border border-slate-800">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Speak to a Technician</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Describe your drainage problem directly to an experienced professional serving {location.name}, {location.state}.
                </p>
                <CallButton variant="primary" size="md" label="Call 208-860-1639" className="w-full" />
                <p className="text-[11px] text-slate-400 mt-3">
                  Direct dispatch • Transparent assessment • No call centers
                </p>
              </div>

              {/* Related Services in this Location with Descriptive Anchor Text */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Differentiated Services in {location.name}
                </h3>
                <div className="space-y-2.5">
                  {relatedServices.map((rel) => {
                    const relStrategy = serviceKeywordStrategies[rel.slug];
                    const anchorText = relStrategy?.descriptiveAnchorText.replace('{city}', location.name) || `${rel.name} in ${location.name}`;

                    return (
                      <Link
                        key={rel.slug}
                        to={buildServiceLocationUrl(rel.slug, location.slug)}
                        className="flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50/60 rounded-xl border border-slate-100 hover:border-blue-200 transition-all group"
                      >
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                          {anchorText}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* This Service in Other Treasure Valley Cities */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                  {service.name} in Other Areas
                </h3>
                <div className="space-y-2">
                  {otherLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={buildServiceLocationUrl(service.slug, loc.slug)}
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all group"
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span className="text-xs text-slate-700 group-hover:text-blue-700 transition-colors">
                        {service.name} in {loc.name}, {loc.state}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/service-areas"
                    className="block text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors pt-3 text-center border-t border-slate-100"
                  >
                    View All Treasure Valley Service Areas →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline={`Dealing with a Drain Issue in ${location.name}?`}
        subtext={`Call 208-860-1639 to consult with Boise Drain Service. We provide honest diagnostics and reliable solutions across ${location.name} and the Treasure Valley.`}
        bgClass="bg-slate-900"
      />
    </>
  );
}
