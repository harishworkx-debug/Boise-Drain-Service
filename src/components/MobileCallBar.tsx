import { Phone, ShieldCheck } from 'lucide-react';
import { businessInfo } from '@/data/business';

export default function MobileCallBar() {
  return (
    <aside
      aria-label="Quick Emergency Call"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl lg:hidden safe-area-pb"
    >
      <div className="max-w-md mx-auto">
        <a
          href={businessInfo.phoneLink}
          className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white py-3 px-4 rounded-xl font-bold shadow-lg shadow-blue-600/30 transition-all group"
          aria-label={`Direct Call Boise Drain Service at ${businessInfo.phone}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/80 flex items-center justify-center flex-shrink-0 relative group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-white animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>
            <div className="text-left leading-tight">
              <div className="text-[11px] text-blue-100 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
                <span>24/7 Direct Dispatch</span>
              </div>
              <div className="text-base font-extrabold text-white tracking-wide">
                {businessInfo.phone}
              </div>
            </div>
          </div>

          <div className="bg-white text-blue-600 px-3.5 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm group-hover:bg-blue-50 transition-colors">
            Call Now
          </div>
        </a>
      </div>
    </aside>
  );
}
