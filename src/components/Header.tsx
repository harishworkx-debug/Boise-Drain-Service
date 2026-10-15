import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Droplet, ChevronDown, MapPin, Wrench } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { buildServiceLocationUrl } from '@/utils/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleDropdownEnter = (name: string) => {
    window.clearTimeout(timeoutRef.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = window.setTimeout(() => setOpenDropdown(null), 150);
  };

  const staticNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900">Boise Drain</span>
              <span className="text-xs text-blue-600 font-medium">Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {/* Home */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/services') ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-[70vh] overflow-y-auto">
                    <Link
                      to="/services"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-slate-100"
                    >
                      <Wrench className="w-4 h-4 text-blue-600" />
                      All Services Overview
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={buildServiceLocationUrl(service.slug, businessInfo.primaryLocationSlug)}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('areas')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/service-areas') ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                Service Areas
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'areas' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'areas' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2 max-h-[70vh] overflow-y-auto">
                    <Link
                      to="/service-areas"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-slate-100"
                    >
                      <MapPin className="w-4 h-4 text-blue-600" />
                      All Service Areas
                    </Link>
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={buildServiceLocationUrl('drain-cleaning', loc.slug)}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {loc.name}, {loc.state}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other nav links */}
            {staticNavLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <a
            href={businessInfo.phoneLink}
            className="hidden lg:inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all hover:shadow-lg flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            {businessInfo.phone}
          </a>

          {/* Mobile Actions: Call Button + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={businessInfo.phoneLink}
              className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm"
              aria-label={`Call ${businessInfo.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1 pt-4">
              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                  className="w-full px-4 py-3 flex items-center justify-between rounded-lg text-base font-medium text-slate-700 hover:bg-gray-50 transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'services' && (
                  <div className="ml-4 border-l border-slate-200 pl-2 mb-1">
                    <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      All Services Overview
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={buildServiceLocationUrl(service.slug, businessInfo.primaryLocationSlug)}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas accordion */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'areas' ? null : 'areas')}
                  className="w-full px-4 py-3 flex items-center justify-between rounded-lg text-base font-medium text-slate-700 hover:bg-gray-50 transition-colors"
                >
                  Service Areas
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'areas' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'areas' && (
                  <div className="ml-4 border-l border-slate-200 pl-2 mb-1">
                    <Link to="/service-areas" className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      All Service Areas
                    </Link>
                    {locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={buildServiceLocationUrl('drain-cleaning', loc.slug)}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        {loc.name}, {loc.state}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other links */}
              {staticNavLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={businessInfo.phoneLink}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {businessInfo.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
