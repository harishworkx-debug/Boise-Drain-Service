import { Link } from 'react-router-dom';
import {
  Phone,
  Droplets,
  Wrench,
  Eye,
  Camera,
  CookingPot,
  ShowerHead,
  ArrowRight,
  AlertTriangle,
  ClipboardList,
  Users,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Truck,
  Star,
  Building2,
  Home as HomeIcon,
  AlertOctagon,
  ThermometerSnowflake,
  TreePine,
  Waves,
  MapPin,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo, generalFaqs } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';
import ServiceCard from '@/components/ServiceCard';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData, { buildLocalBusinessSchema, buildFAQSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const boiseImage = 'https://images.pexels.com/photos/30145897/pexels-photo-30145897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const techImage = 'https://images.pexels.com/photos/16442684/pexels-photo-16442684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const trustHighlights = [
  {
    icon: Truck,
    title: 'Rapid Local Dispatch',
    desc: 'Serving Boise, Meridian, Eagle, Nampa & the entire Treasure Valley.',
  },
  {
    icon: Wrench,
    title: 'Professional Equipment',
    desc: 'HD sewer cameras, 4,000 PSI hydro-jetters, and heavy-duty electric augers.',
  },
  {
    icon: ShieldCheck,
    title: 'Direct Honest Advice',
    desc: 'Speak directly with our drain team without pressure or hidden costs.',
  },
  {
    icon: Clock,
    title: 'Emergency Availability',
    desc: 'Prompt response for urgent main line sewer backups and overflow clogs.',
  },
];

const commonProblems = [
  {
    icon: Droplets,
    title: 'Slow-Draining Sinks & Showers',
    text: 'Water taking minutes to drain away from bathroom basins or tub stalls usually indicates an accumulating obstruction of soap scum, hair, and mineral scale in the P-trap or waste arm.',
  },
  {
    icon: CookingPot,
    title: 'Kitchen Grease & Food Clogs',
    text: 'Cooking oils, food particles, coffee grounds, and dishwashing soap create stubborn sludge that clings to pipe interiors, causing foul odors and complete sink stoppage.',
  },
  {
    icon: GitBranch,
    title: 'Main Sewer Line Blockages',
    text: 'When multiple plumbing fixtures back up simultaneously or your shower gurgles when you flush the toilet, the main underground sewer line is clogged and needs immediate clearing.',
  },
  {
    icon: AlertTriangle,
    title: 'Tree Root Intrusion',
    text: 'Tree roots relentlessly seek moisture in older clay or cast-iron sewer lines. Over time, hair-fine roots expand into dense webs that trap paper and cause severe structural blockages.',
  },
  {
    icon: Waves,
    title: 'Basement & Floor Drain Backups',
    text: 'Floor drains in basements, laundry rooms, and garages are the lowest relief points in your home. Backups here threaten water damage and sanitation if left unaddressed.',
  },
  {
    icon: Eye,
    title: 'Foul Sewer Gas Odors',
    text: 'Persistent rotten egg or sewer odors in your living areas often stem from dried-out traps, cracked vent pipes, or hidden sewer line breaches that require camera inspection.',
  },
];

const equipmentFeatures = [
  {
    icon: Camera,
    title: 'High-Definition Sewer Cameras',
    description:
      'Our waterproof digital cameras enter drain lines through standard cleanouts, streaming crisp, real-time video to inspect pipe conditions, identify cracks, and locate root nests with zero yard excavation.',
    tag: 'Accurate Diagnostics',
  },
  {
    icon: Waves,
    title: 'Commercial 4,000 PSI Hydro-Jetting',
    description:
      'Hydro-jetting uses high-velocity pressurized water jets to scour pipe walls completely clean of grease, calcified sludge, and invasive roots—restoring your pipes to near-original flow capacity.',
    tag: 'Deep Pipe Restoration',
  },
  {
    icon: Wrench,
    title: 'Heavy-Duty Electric Augers & Cutters',
    description:
      'Equipped with specialized cutting heads, our mechanical drain snakes safely bore through solid obstructions, wet wipes, hardened debris, and stubborn root masses without cracking your pipes.',
    tag: 'Solid Blockage Removal',
  },
  {
    icon: GitBranch,
    title: 'Electronic Sonde Depth Locators',
    description:
      'Built-in radio transmitters on our camera heads allow us to pinpoint the exact underground location and depth of sewer blockages, saving thousands in unnecessary exploratory digging.',
    tag: 'Precision Mapping',
  },
];

const customerReviews = [
  {
    name: 'Mark T.',
    city: 'Boise, ID (North End)',
    service: 'Main Sewer Line Cleaning',
    quote:
      'Had raw sewage backing up through our basement drain on a Sunday morning. Called Boise Drain Service and spoke directly to the technician. He arrived quickly with heavy equipment, cleared tree roots out of our 1950s line, and ran a camera to verify everything was flowing freely. Lifesaver!',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    city: 'Meridian, ID',
    service: 'Kitchen Drain Cleaning & Hydro Jetting',
    quote:
      'Our kitchen sink had been draining slowly for months and finally clogged solid. Store-bought chemical drain cleaners did nothing. Boise Drain Service cleared the grease build-up completely and gave us great advice on preventive maintenance. Super clean and honest work!',
    rating: 5,
  },
  {
    name: 'David R.',
    city: 'Eagle, ID',
    service: 'Clogged Bathroom & Shower Drain',
    quote:
      'Prompt, professional, and very fair pricing. They took care of a bad shower clog and inspected the line without trying to upsell unneeded repairs. Highly recommend them to anyone in the Treasure Valley.',
    rating: 5,
  },
];

const benefits = [
  {
    icon: Phone,
    title: 'Direct Technician Communication',
    text: 'No complicated call centers. When you call, you describe your exact problem directly to an experienced local drain professional who listens and guides you.',
  },
  {
    icon: ClipboardList,
    title: 'Upfront & Honest Assessment',
    text: 'We diagnose the root cause of your drainage issue before starting work, explaining what is needed in plain language with transparent service recommendations.',
  },
  {
    icon: Users,
    title: 'Personalized Problem Solving',
    text: 'Older historic Boise homes have different plumbing needs than newer subdivisions in Meridian or Kuna. We tailor our cleaning approach to your specific pipe material and age.',
  },
  {
    icon: Wrench,
    title: 'Proven Professional Equipment',
    text: 'We invest in commercial-grade augers, hydro-jetters, and inspection cameras designed to clear clogs safely without damaging modern PVC, vintage cast iron, or clay lines.',
  },
];

const seasonalTips = [
  {
    season: 'Winter & Freezes',
    icon: ThermometerSnowflake,
    title: 'Freezing Traps & Sluggish Drains',
    desc: 'Treasure Valley winter temperatures drop below freezing. Cold pipes cause grease and soap scum to congeal much faster. Ensure crawlspace vents are insulated and never pour warm cooking oils down cold drain pipes.',
  },
  {
    season: 'Spring Growth',
    icon: TreePine,
    title: 'Aggressive Tree Root Invasions',
    desc: 'As Boise’s mature trees emerge from dormancy in spring, their root systems actively seek moisture escaping through microscopic sewer pipe seams. A preventative camera inspection catches roots before they cause a basement backup.',
  },
  {
    season: 'Summer & Fall',
    icon: Sparkles,
    title: 'Outdoor Runoff & Heavy Appliance Use',
    desc: 'Summer gatherings and harvest season increase kitchen disposal and laundry demands. Keep exterior yard and patio drains clear of leaves, lawn clippings, and sediment to avoid localized pooling.',
  },
];

export default function Home() {
  useSeo({
    title: 'Boise Drain Service | Drain Cleaning in Boise, Idaho | 208-860-1639',
    description:
      'Professional drain cleaning and sewer repair in Boise, Idaho and Treasure Valley. Contact Boise Drain Service at 208-860-1639 for clogged drains, hydro jetting, camera inspection & main sewer backups.',
    canonicalPath: '/',
    ogImage: heroImage,
  });

  const featuredServices = services.slice(0, 6);
  const homeFaqs = generalFaqs.slice(0, 6);
  const primaryLocation = locations.find((l) => l.slug === businessInfo.primaryLocationSlug)!;

  return (
    <>
      <StructuredData data={buildLocalBusinessSchema()} />
      <StructuredData data={buildFAQSchema(homeFaqs)} />

      {/* Hero Section */}
      <section className="relative min-h-[640px] flex items-center pt-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional plumber cleaning drain pipes in Boise ID"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Rapid Response in Boise & Treasure Valley
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Professional Drain Cleaning & Sewer Line Services
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed font-normal">
              Facing a stubborn clogged drain, sewer backup, or sluggish plumbing? Speak directly with Boise Drain Service for rapid diagnostics, hydro-jetting, and permanent flow restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton variant="primary" size="lg" label="Call (208) 860-1639" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/80 rounded-xl hover:bg-white hover:text-slate-900 transition-all backdrop-blur-xs shadow-lg"
              >
                Explore All 10 Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Commercial-Grade Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Local Boise Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Trust & Stats Bar */}
      <section className="bg-slate-800 text-white border-b border-slate-700 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Emergency vs. Standard Diagnostic Guide */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Drain Problem Diagnosis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Is Your Drain Problem an Emergency?
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Understanding whether your plumbing issue is a localized fixture clog or a main sewer line failure helps determine the urgency and best corrective action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Urgent Main Sewer Warning */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 relative shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <AlertOctagon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Immediate Emergency Signs</h3>
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">Main Sewer Line Compromised</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                If you observe any of the following symptoms, stop running water and contact us immediately to prevent severe wastewater flooding:
              </p>

              <ul className="space-y-3 mb-6 text-sm text-slate-800">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Multiple fixtures backing up</strong> at once (e.g., shower fills with water when the toilet is flushed).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Water or raw sewage bubbling up</strong> through basement floor drains or laundry utility sinks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Loud gurgling sounds</strong> echoing from toilets or kitchen sinks when washing machine drains.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Strong sewage odors</strong> lingering inside the home or sudden soggy sinkholes in the front yard.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-red-200/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">Requires emergency dispatch:</span>
                <a
                  href={businessInfo.phoneLink}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" /> Call 208-860-1639
                </a>
              </div>
            </div>

            {/* Right: Routine Fixture Clog */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Standard / Secondary Clogs</h3>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Scheduled Professional Clearing</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                Isolated to one specific drain fixture. While not an immediate flood hazard, prompt cleaning prevents pipe corrosion and complete blockage:
              </p>

              <ul className="space-y-3 mb-6 text-sm text-slate-800">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Bathroom vanity or tub</strong> draining slowly due to soap scum, toothpaste, and hair accumulation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Kitchen sink water pooling</strong> when running the garbage disposal or washing dishes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span><strong>Recurring clogs</strong> in a single fixture that clear temporarily with a plunger then return.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <span><strong>P-trap debris buildup</strong> creating unpleasant localized odors in the kitchen or laundry room.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">Schedule standard service:</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm shadow-md transition-all"
                >
                  Contact Us Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Introduction */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
                Locally Owned & Operated
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-6 leading-tight">
                Your Trusted Drain & Sewer Specialists in Boise, Idaho
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Boise Drain Service is dedicated solely to the craft of clear, healthy drain lines. Unlike general plumbing outfits juggling remodels and new construction, our trucks are specialized specifically for drain cleaning, sewer unclogging, root removal, and pipe diagnostic inspections.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                From the classic 1920s brick homes in Boise’s North End to modern developments across Meridian, Eagle, and Kuna, we understand the local soil conditions, root types, and pipe configurations of the Treasure Valley.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-blue-600">100%</div>
                  <div className="text-xs font-medium text-slate-600 mt-1">Dedicated Drain Focus</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-blue-600">10 Cities</div>
                  <div className="text-xs font-medium text-slate-600 mt-1">Full Valley Coverage</div>
                </div>
              </div>

              <CallButton variant="primary" size="md" label="Speak With Our Team (208) 860-1639" />
            </div>

            <div className="relative">
              <img
                src={boiseImage}
                alt="Downtown Boise, Idaho with mountains in the background"
                className="rounded-2xl shadow-xl w-full h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-2xl hidden sm:block border-4 border-white">
                <p className="text-3xl font-extrabold">10+</p>
                <p className="text-xs text-blue-100 font-medium uppercase tracking-wider mt-0.5">Specialized Drain Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Services */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Full Spectrum Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Featured Drain & Sewer Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional, prompt drain care designed to clear clogs without damaging your pipes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} locationSlug={primaryLocation.slug} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              View All 10 Drain Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Advanced Technology & Equipment Showcase */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
              Modern Technology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Advanced Drain Diagnostics & Heavy Equipment
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We do not rely on guesswork or harsh chemicals. Our service vehicles carry industry-leading inspection cameras and high-pressure jetting technology to diagnose and solve problems right the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {equipmentFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-blue-400 bg-blue-900/40 border border-blue-500/30 px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need a Video Camera Inspection of Your Sewer Line?</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Great for homebuyers, recurring clogs, or pre-remodel plumbing evaluations.
                </p>
              </div>
            </div>
            <a
              href={businessInfo.phoneLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors flex-shrink-0"
            >
              <Phone className="w-4 h-4" /> Schedule Camera Inspection
            </a>
          </div>
        </div>
      </section>

      {/* 6. Residential vs. Commercial Drain Solutions */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Tailored Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Residential & Commercial Drain Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you are a homeowner dealing with a backed-up bathroom or a restaurant owner with grease trap line emergencies, we have the specialized equipment for the job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Residential Homeowners</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Protect your home from expensive water damage and unsanitary conditions. We treat your property with absolute respect, using drop cloths and clean shoe covers:
                </p>

                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Kitchen sinks, food disposal backups & grease clearing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Bathroom tubs, showers & slow-draining vanity sinks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Main sewer lines clogged by toilet paper or tree roots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Basement floor drains, utility sinks & washing machine lines</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-600 font-bold rounded-xl text-sm transition-all"
              >
                Explore Residential Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Commercial & Business Properties</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Drain stoppages can shut down your kitchen or alienate customers. We provide rapid service and heavy-duty preventative hydro-jetting programs:
                </p>

                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Restaurant grease trap lines & commercial dishwashers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Retail & office multi-stall restroom main lines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Automotive shop, car wash & warehouse floor drains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Property management & multi-family rental sewer maintenance</span>
                  </li>
                </ul>
              </div>

              <a
                href={businessInfo.phoneLink}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all"
              >
                Commercial Dispatch Call <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Common Drain Problems */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Symptom Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Common Drain Problems We Solve Daily
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recognizing the early warning signs of drain distress helps you avoid catastrophic water damage and expensive emergency repairs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{problem.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Treasure Valley Seasonal Drain Challenges */}
      <section className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
              Idaho Climate Tips
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Treasure Valley Seasonal Plumbing & Drain Care
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our unique high-desert climate, freezing winter nights, and mature river valley trees create distinct seasonal challenges for residential sewer and drain systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {seasonalTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 hover:border-blue-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{tip.season}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-3">{tip.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Verified Customer Reviews & Testimonials */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Local Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              What Treasure Valley Homeowners Say
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We take pride in transparent diagnostics, honest advice, and quick resolution for plumbing clogs across Ada and Canyon counties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {customerReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-base">{rev.name}</div>
                  <div className="text-xs text-blue-600 font-semibold">{rev.city}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{rev.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why Contact Boise Drain Service (4 Pillars) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Why Homeowners Trust Boise Drain Service
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We focus on clear communication, understanding your drain problem, and discussing suitable options without pressure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Simple 3-Step Process */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Hassle-Free Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              How the Service Process Works
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Getting your drain cleared is fast, transparent, and straightforward from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Call and Describe the Problem',
                text: 'Call (208) 860-1639 and speak directly with our team. Describe which fixtures are acting up, how long it has been occurring, and whether multiple drains are backed up.',
              },
              {
                step: '2',
                title: 'Assessment & Strategy',
                text: 'We assess the situation, explain whether snaking, hydro-jetting, or camera inspection is recommended, and provide clear options before work begins.',
              },
              {
                step: '3',
                title: 'Rapid Flow Restoration',
                text: 'We arrive promptly with professional commercial drain equipment, clear the blockage cleanly, test drainage, and restore smooth water flow throughout your property.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
                <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Service Areas Preview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Treasure Valley Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Local Service Areas We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Providing fast, reliable drain cleaning and repair across Ada and Canyon counties:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={buildServiceLocationUrl('drain-cleaning', loc.slug)}
                className="bg-slate-50 hover:bg-white rounded-xl p-4 text-center border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-1.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {loc.name}
                </p>
                <span className="text-xs text-slate-500 font-medium">{loc.state}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              View Detailed Service Area Maps & Info
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQ Preview */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Got questions regarding pricing, sewer camera inspections, or hydro-jetting? Here are quick answers:
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} />

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              View All Frequently Asked Questions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Final High-Impact CTA */}
      <CTASection
        headline="Have a Clogged Drain or Sewer Line Concern in Boise?"
        subtext="Speak directly with an experienced local drain technician. We listen to your problem and provide fast, professional solutions."
        bgClass="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900"
      />
    </>
  );
}
