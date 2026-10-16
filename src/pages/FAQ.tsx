import { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  Phone,
  Droplets,
  Camera,
  Clock,
  DollarSign,
  AlertTriangle,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo, detailedFaqs, generalFaqs } from '@/data/business';
import FAQAccordion from '@/components/FAQAccordion';
import CallButton from '@/components/CallButton';
import CTASection from '@/components/CTASection';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData, { buildFAQSchema, buildLocalBusinessSchema, buildBreadcrumbSchema } from '@/components/StructuredData';

const heroImage = 'https://images.pexels.com/photos/12105083/pexels-photo-12105083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useSeo({
    title: 'Frequently Asked Questions | Boise Drain Service',
    description:
      'Answers to common questions about drain clogs, camera inspections, hydro jetting, response times, estimates, and safety limitations. Call 208-768-0044.',
    canonicalPath: '/faq',
    ogImage: heroImage,
  });

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'problems', label: 'Drain Problems', icon: Droplets },
    { id: 'inspections', label: 'Camera Inspections', icon: Camera },
    { id: 'scheduling', label: 'Scheduling & Response', icon: Clock },
    { id: 'estimates', label: 'Estimates & Pricing', icon: DollarSign },
    { id: 'limitations', label: 'Limitations & Safety', icon: AlertTriangle },
  ];

  const filteredFaqs = useMemo(() => {
    return detailedFaqs.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch =
        !searchTerm.trim() ||
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <StructuredData id="business" data={buildLocalBusinessSchema()} />
      <StructuredData id="faq" data={buildFAQSchema(generalFaqs)} />
      <StructuredData
        id="breadcrumb"
        data={buildBreadcrumbSchema([{ label: 'FAQ', path: '/faq' }])}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Plumbing diagnostics and hand tools"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span>Knowledge Base & Practical Answers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Practical answers to help you understand drain issues, when an inspection is necessary, how scheduling works, and realistic equipment limitations.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <CallButton variant="primary" size="lg" label="Call (208) 768-0044" />
              <div className="text-xs text-slate-400 sm:border-l sm:border-slate-700 sm:pl-4">
                <span className="font-semibold text-slate-200">Have a specific question? </span>
                <span>Speak directly with our on-duty technicians anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter & Search Bar */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Accordion Content */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length > 0 ? (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <FAQAccordion
                faqs={filteredFaqs.map((f) => ({
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No matching questions found</h3>
              <p className="text-xs text-slate-500 mb-6">
                Try adjusting your search terms or view all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Direct Help Callout */}
          <div className="mt-12 bg-blue-50/80 rounded-2xl p-6 sm:p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Have a question about your specific pipe or problem?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Describe your symptoms directly to our technician team. We provide honest answers with zero obligation.
              </p>
            </div>
            <CallButton variant="primary" size="md" label="Call 208-768-0044" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Still Experiencing Drain Trouble?"
        subtext="Contact Boise Drain Service today for fast, honest service across Boise and the Treasure Valley."
        bgClass="bg-slate-900"
      />
    </>
  );
}
