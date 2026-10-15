import { Link } from 'react-router-dom';
import { Droplet, Phone, Globe, MapPin } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';

export default function Footer() {
  const primaryLocation = locations.find((l) => l.slug === businessInfo.primaryLocationSlug)!;
  const featuredServices = services.slice(0, 6);
  const featuredLocations = locations.slice(0, 6);

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 lg:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Business Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">Boise Drain</span>
                <span className="text-xs text-blue-400 font-medium">Service</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Professional drain cleaning and repair services serving Boise, Idaho, and the surrounding Treasure Valley communities.
            </p>
            <div className="space-y-2">
              <a
                href={businessInfo.phoneLink}
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                {businessInfo.phone}
              </a>
              <a
                href={businessInfo.website}
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                rel="noopener noreferrer"
              >
                <Globe className="w-4 h-4 text-blue-500" />
                boisedrainservice.com
              </a>
              <a
                href={businessInfo.googleMapsLink}
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 text-blue-500" />
                Boise, Idaho
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Drain Services
            </h3>
            <ul className="space-y-2">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={buildServiceLocationUrl(service.slug, primaryLocation.slug)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {featuredLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={buildServiceLocationUrl('drain-cleaning', loc.slug)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {loc.name}, {loc.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  HTML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Serving Boise, ID & Treasure Valley</span>
            <span>•</span>
            <Link to="/sitemap" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
