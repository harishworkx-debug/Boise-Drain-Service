import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft, Droplet } from 'lucide-react';
import { useSeo } from '@/utils/seo';
import { businessInfo } from '@/data/business';
import CallButton from '@/components/CallButton';

export default function NotFound() {
  useSeo({
    title: 'Page Not Found | Boise Drain Service',
    description: 'The page you are looking for could not be found. Please call Boise Drain Service at 208-768-0044 or visit our homepage.',
    canonicalPath: '/404',
  });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-20 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Droplet className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-slate-700 mb-3">Page Not Found</h2>
          <p className="text-slate-500 leading-relaxed">
            The page you are looking for may have been moved or no longer exists. Try going back to the homepage, or call us if you need assistance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </Link>
          <CallButton variant="secondary" size="md" label="Call 208-768-0044" />
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-sm text-slate-500 mb-3">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/services" className="text-sm text-blue-600 hover:text-blue-700 font-medium">Services</Link>
            <Link to="/service-areas" className="text-sm text-blue-600 hover:text-blue-700 font-medium">Service Areas</Link>
            <Link to="/faq" className="text-sm text-blue-600 hover:text-blue-700 font-medium">FAQ</Link>
            <Link to="/contact" className="text-sm text-blue-600 hover:text-blue-700 font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
