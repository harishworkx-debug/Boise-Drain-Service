import { useState } from 'react';
import {
  Phone,
  Globe,
  MapPin,
  ExternalLink,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Star,
} from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import CallButton from '@/components/CallButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'boise-id',
    service: 'drain-cleaning',
    urgency: 'urgent',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useSeo({
    title: 'Contact Boise Drain Service | Call 208-860-1639 | Boise, ID',
    description:
      'Contact Boise Drain Service for fast drain cleaning and sewer diagnostics in Boise, ID. Call 208-860-1639 or submit an online service request. Fast Treasure Valley response.',
    canonicalPath: '/contact',
    ogImage: heroImage,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate interactive submission
    setFormSubmitted(true);
  };

  return (
    <>
      <StructuredData id="business" data={buildLocalBusinessSchema()} />
      <StructuredData
        id="breadcrumb"
        data={buildBreadcrumbSchema([{ label: 'Contact', path: '/contact' }])}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Plumbing tools and blueprints on technician workbench"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Direct Technician Dispatch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Contact Boise Drain Service
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The fastest way to get help with your drain or sewer problem is by calling directly. You will speak with an experienced technician who understands your problem and can dispatch service immediately.
            </p>

            {/* Emergency Hotline Banner */}
            <div className="bg-blue-600/90 backdrop-blur rounded-2xl p-6 border border-blue-400/40 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">
                  Primary Telephone Dispatch Hotline
                </div>
                <a
                  href={businessInfo.phoneLink}
                  className="text-3xl sm:text-4xl font-black text-white hover:text-blue-100 transition-colors tracking-tight"
                >
                  {businessInfo.phone}
                </a>
                <div className="text-xs text-blue-100 mt-1">
                  Serving Boise, Meridian, Eagle, Nampa & all surrounding cities
                </div>
              </div>
              <CallButton variant="primary" size="lg" label="Call Now" className="bg-white text-blue-900 hover:bg-blue-50 shadow-md font-bold" />
            </div>

            {/* Google Verified Rating Trust Snippet */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star Rating</span>
              <span className="text-slate-400">•</span>
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors flex items-center gap-1"
              >
                <span>65 Verified Google Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-400">•</span>
              <span>Owner Operated by Kevin Bell</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Details */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Interactive Contact / Request Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5" /> Online Service Request
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Request an Evaluation or Service Call
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Fill out the form below and an on-duty technician will review your situation promptly. For active wastewater emergencies, please call <a href={businessInfo.phoneLink} className="text-blue-600 font-bold underline">{businessInfo.phone}</a> immediately.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    Request Received!
                  </h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'valued customer'}</strong>. Your service details have been transmitted directly to our on-duty technician team. We will call you at <strong>{formData.phone || 'your number'}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-emerald-700 underline hover:text-emerald-900"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Miller"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 208-555-0199"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Community *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                      >
                        {locations.map((loc) => (
                          <option key={loc.slug} value={loc.slug}>
                            {loc.name}, {loc.state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                      >
                        {services.map((svc) => (
                          <option key={svc.slug} value={svc.slug}>
                            {svc.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Urgency Level *
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                      >
                        <option value="emergency">Emergency (Active Backup / Standing Water)</option>
                        <option value="urgent">Urgent (Needed Today / Tomorrow)</option>
                        <option value="routine">Routine (Slow Drain / Preventative Maintenance)</option>
                        <option value="inspection">Home Purchase Sewer Inspection</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Describe the Drain Issue
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details (e.g. which fixtures are affected, gurgling sounds, how long it has been occurring)..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Service Request</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Your information is protected and used solely to coordinate your drain service visit.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Accurate Availability & Coverage (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Operating Hours & Emergency Availability */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2.5 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Operating Hours & Availability</h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">Monday – Friday</span>
                    <span className="font-bold text-slate-900">7:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">Saturday</span>
                    <span className="font-bold text-slate-900">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">Sunday</span>
                    <span className="font-bold text-emerald-600">Emergency On-Call Dispatch</span>
                  </div>
                </div>

                <div className="mt-4 p-3.5 bg-blue-50/80 rounded-xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
                  <strong>Emergency Sewer Response: </strong>
                  For active sewer overflows and main line backups, our on-call emergency technician team is available 24/7. Call <a href={businessInfo.phoneLink} className="underline font-bold">{businessInfo.phone}</a>.
                </div>
              </div>

              {/* Verified Service Area Coverage */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2.5 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Treasure Valley Service Coverage</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  We are centrally located in Boise and dispatch service vehicles throughout Ada and Canyon Counties daily:
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {locations.map((loc) => (
                    <div key={loc.slug} className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span className="font-medium text-slate-800">{loc.name}, ID</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Office & Google Map Listing */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Central Location</h3>
                <p className="text-xs text-slate-600 mb-4">
                  Boise, Idaho, USA • Operating across the Treasure Valley
                </p>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs mb-3">
                  <iframe
                    src={businessInfo.googleMapsEmbed}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Boise Drain Service Location"
                    className="w-full"
                  />
                </div>

                <a
                  href={businessInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
