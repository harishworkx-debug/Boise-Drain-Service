import { useState, useMemo } from 'react';
import {
  Star,
  ExternalLink,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { googleReviews, googleReviewsSummary, GoogleReview } from '@/data/reviews';

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  defaultFilter?: 'all' | 'emergency' | 'drain-cleaning' | 'sewer-roots' | 'pricing-honesty';
  limit?: number;
  showFilters?: boolean;
}

export default function GoogleReviews({
  title = 'Real Google Reviews for Boise Drain Service',
  subtitle = 'Read authentic, unfiltered feedback from Treasure Valley homeowners and businesses who rely on Kevin Bell for prompt, honest drain and sewer service.',
  defaultFilter = 'all',
  limit = 6,
  showFilters = true,
}: GoogleReviewsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>(defaultFilter);
  const [showAll, setShowAll] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Reviews', count: googleReviews.length },
    {
      id: 'emergency',
      label: 'Emergency & Weekend Calls',
      count: googleReviews.filter((r) => r.category === 'emergency').length,
    },
    {
      id: 'sewer-roots',
      label: 'Sewer & Root Jetting',
      count: googleReviews.filter((r) => r.category === 'sewer-roots').length,
    },
    {
      id: 'drain-cleaning',
      label: 'Kitchen & Clogged Drains',
      count: googleReviews.filter((r) => r.category === 'drain-cleaning').length,
    },
    {
      id: 'pricing-honesty',
      label: 'Fair Pricing & Second Opinions',
      count: googleReviews.filter((r) => r.category === 'pricing-honesty').length,
    },
  ];

  const filteredReviews = useMemo(() => {
    if (selectedFilter === 'all') return googleReviews;
    return googleReviews.filter((r) => r.category === selectedFilter);
  }, [selectedFilter]);

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, limit);

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Google Business Profile Verified</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Google Summary Badge Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            
            {/* Google Rating Big Metric */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-600 font-black text-3xl shadow-xs">
                5.0
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 font-bold text-slate-900 text-sm">5.0 Star Rating</span>
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Based on <strong>65 Verified Google Reviews</strong>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  100% 5-Star Customer Satisfaction across Boise & the Treasure Valley
                </div>
              </div>
            </div>

            {/* Google Maps Actions */}
            <div className="flex items-center gap-3">
              <a
                href={googleReviewsSummary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={googleReviewsSummary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
              >
                <span>Write a Review</span>
              </a>
            </div>
          </div>

          {/* Authentic Google Mention Keywords */}
          <div className="pt-5">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Common Mentions by Real Customers:
            </div>
            <div className="flex flex-wrap gap-2">
              {googleReviewsSummary.topKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{kw.label}</span>
                  <span className="text-[11px] text-slate-400 font-bold">({kw.count})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedFilter(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {tab.label}
                  <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${active ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Author Info & Badges */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.isLocalGuide && (
                          <span className="inline-flex items-center text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            Local Guide
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">
                        {rev.timeAgo}
                        {rev.reviewCount && <span> • {rev.reviewCount} reviews</span>}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Category Pill */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
                    {rev.categoryLabel}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  "{rev.text}"
                </p>

                {/* Positive Attributes */}
                {rev.positiveAttributes && rev.positiveAttributes.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {rev.positiveAttributes.map((attr, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
                      >
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>{attr}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Owner Response Box */}
              {rev.ownerResponse && (
                <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                    <span>Response from Kevin Bell (Owner)</span>
                    <span className="text-slate-400 font-normal text-[11px]">
                      • {rev.ownerResponse.timeAgo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{rev.ownerResponse.text}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Show All Button */}
        {filteredReviews.length > limit && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm shadow-xs transition-colors cursor-pointer"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span>Show Fewer Reviews</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span>Show More Reviews ({filteredReviews.length - limit} more available)</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
