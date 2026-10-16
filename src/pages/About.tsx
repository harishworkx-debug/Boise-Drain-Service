import {
  Phone,
  Droplets,
  Wrench,
  Camera,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Truck,
  Users,
  Award,
  FileCheck,
  Eye,
  Activity,
  Layers,
} from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleReviews from '@/components/GoogleReviews';
import StructuredData, { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/components/StructuredData';

const aboutHero = 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const techWorkImage = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const cameraJobImage = 'https://images.pexels.com/photos/16442684/pexels-photo-16442684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const equipmentToolsImage = 'https://images.pexels.com/photos/5414384/pexels-photo-5414384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function About() {
  useSeo({
    title: 'About Boise Drain Service | Local Drain & Sewer Specialists',
    description:
      'Learn about Boise Drain Service: experienced local drain cleaning technicians, commercial-grade cameras and jetters, and verifiable workmanship standards. Call 208-768-0044.',
    canonicalPath: '/about',
    ogImage: aboutHero,
  });

  const coreSpecialties = services.map((s) => s.name);

  const workmanshipStandards = [
    {
      icon: CheckCircle2,
      title: 'Sustained Flow Testing Guarantee',
      desc: 'We never snake a drain and immediately walk out. Every cleared line is tested under prolonged high-volume water flow to verify complete drainage before we pack up our tools.',
    },
    {
      icon: Eye,
      title: 'Visual Camera Proof Before Major Repairs',
      desc: 'If a contractor tells you your sewer line needs a $10,000 excavation without showing you video proof, be cautious. We share real-time camera footage on our monitor so you see the condition for yourself.',
    },
    {
      icon: ShieldCheck,
      title: 'Home Protection Protocols',
      desc: 'We treat your home with care. We use clean drop cloths around all work areas, wear protective boot covers, and utilize fully enclosed cable drums to prevent splashback.',
    },
    {
      icon: Clock,
      title: 'Direct Technician Communication',
      desc: 'No answering services or third-party call centers. When you call 208-768-0044, you speak directly with an experienced technician who understands your problem.',
    },
  ];

  const equipmentFleet = [
    {
      name: 'High-Resolution Color Inspection Cameras',
      details: 'Self-leveling optical camera heads with integrated 512 Hz radio sonde transmitters for underground depth locating.',
      purpose: 'Diagnosing root intrusion, pipe bellies (sags), offset collars, and fractures down to the exact inch.',
    },
    {
      name: 'Trailer-Mounted 4,000 PSI Hydro Jetters',
      details: 'High-volume commercial water pumps equipped with specialized forward penetrator and rotating descaling nozzles.',
      purpose: 'Scouring 100% of the pipe wall diameter to eliminate hardened grease, heavy mineral scale, and root hairs.',
    },
    {
      name: 'Heavy-Duty Electric Drum Augers',
      details: 'Continuous-feed sectional and drum machines with sized 3/4" and 5/8" cables and expanding root-cutting saws.',
      purpose: 'Clearing dense tree root balls, wet wipe masses, and stubborn solid blockages without pipe damage.',
    },
    {
      name: 'Digital Underground Sonde Locators',
      details: 'Precision handheld electromagnetic receivers tuned to 512 Hz frequencies emitted from in-pipe camera heads.',
      purpose: 'Marking exact surface repair spots on lawns, driveways, or sidewalks to eliminate unnecessary trenching.',
    },
  ];

  return (
    <>
      <StructuredData id="business" data={buildLocalBusinessSchema()} />
      <StructuredData
        id="breadcrumb"
        data={buildBreadcrumbSchema([{ label: 'About', path: '/about' }])}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Plumber installing pipe with specialized tools"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Local Experience & Integrity</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              About Boise Drain Service
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Locally owned and based in Boise, Idaho, we specialize exclusively in professional drain cleaning, camera diagnostics, and sewer line solutions across the entire Treasure Valley.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CallButton variant="primary" size="lg" label="Call (208) 768-0044" />
              <div className="text-xs text-slate-400 sm:border-l sm:border-slate-700 sm:pl-4">
                <span className="font-semibold text-slate-200">Owner-Operated Focus: </span>
                <span>Real technicians, honest diagnostics, and transparent pricing.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technician Experience & Company Story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" /> Our Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Dedicated Drain Specialists Serving the Treasure Valley
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Boise Drain Service was founded with a straightforward mission: to provide Boise and neighboring communities with honest, specialized drain cleaning and sewer diagnostics without the high-pressure sales tactics common in the industry.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                General plumbing companies often treat drain cleaning as a side gig or an opportunity to push costly whole-house repipes. We focus strictly on the drainage and sewer system. Our technicians understand the specific nuances of local Treasure Valley infrastructure—from 80-year-old vitrified clay and cast iron in the Boise North End and Bench to settling SDR35 PVC laterals in newer Meridian subdivisions.
              </p>

              {/* Verified Credentials Checklist */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-blue-600" />
                  Verifiable Standards & Qualifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Idaho Plumbing Safety Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>OSHA Confined Space Awareness</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>811 Digline Underground Safety</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Sanitary Waste Containment Protocols</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={techWorkImage}
                  alt="Technician assembling professional drain cleaning equipment"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-800 hidden sm:block">
                <div className="text-2xl font-black text-blue-400 mb-1">100%</div>
                <div className="text-xs text-slate-300 leading-snug">
                  Dedicated focus on drain cleaning, sewer line clearing, and non-invasive camera diagnostics.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Equipment Fleet */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Commercial Grade Fleet</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
              Equipped for Complex Drain & Sewer Problems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We invest in professional industrial equipment designed to clear clogs safely without damaging modern plastic or fragile historic pipes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {equipmentFleet.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.details}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-800 font-medium bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-blue-700 font-bold">Primary Application: </span>
                  {item.purpose}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genuine Job Evidence Gallery */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Real Work in the Field</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-3">
              Genuine Job Examples & Evidence
            </h2>
            <p className="text-slate-600 text-sm">
              We take pride in clean, methodical workmanship across every residential and commercial service call.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs">
              <img
                src={cameraJobImage}
                alt="Technician monitoring HD sewer inspection camera screen"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-1">In-Pipe HD Video Diagnostics</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time color camera inspection identifying root penetration at clay collars before recommending mechanical cutting.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs">
              <img
                src={equipmentToolsImage}
                alt="Professional plumbing cutters, augers and cables"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Sized Cutters & Clean Cables</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Carefully chosen cutter heads match pipe diameter exactly, preventing scratches on plastic or cracking in vintage cast iron.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs">
              <img
                src={techWorkImage}
                alt="Clean indoor fixture work area protection"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Indoor Work Area Protection</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Heavy canvas drop cloths and catch basins keep vanities, floors, and finished basements clean throughout service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workmanship Standards & Guarantees */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Our Commitment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Workmanship Standards You Can Count On
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We operate on honesty and tangible proof. Here is how we ensure every customer receives reliable service:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workmanshipStandards.map((std, i) => {
              const Icon = std.icon;
              return (
                <div key={i} className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{std.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{std.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Business Profile Verified Reviews */}
      <GoogleReviews
        title="Verified Reviews for Kevin Bell & Boise Drain Service"
        subtitle="Read real, unfiltered testimonials from local Treasure Valley homeowners and commercial property managers who rely on Kevin Bell for fast, professional drain and sewer diagnostics."
      />

      {/* Bottom CTA */}
      <CTASection
        headline="Have Questions for Our Drain Team?"
        subtext="Speak directly with our local technicians at 208-768-0044. We're happy to discuss your specific drainage issue and provide straightforward guidance."
        bgClass="bg-slate-900"
      />
    </>
  );
}
