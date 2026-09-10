import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Globe } from 'lucide-react';
import { RoutePath } from '../types';
import { SalesNegoLogo } from './SalesNegoLogo';

export const Footer: React.FC = () => {
  const { currentPath, navigate } = useNavigation();

  const services = [
    { label: 'GTM Strategy & Market Intelligence', path: '/services/gtm-strategy-market-intelligence' as RoutePath },
    { label: 'RevOps & AI-Accelerated Sales', path: '/services/revops-ai-sales' as RoutePath },
    { label: 'End-to-End Commercial Execution', path: '/services/commercial-execution' as RoutePath },
  ];

  const company = [
    { label: 'About Us', path: '/about' as RoutePath },
    { label: 'Services', path: '/services' as RoutePath },
    { label: 'Frequently Asked Questions', path: '/' as RoutePath, sectionId: 'faq-section' },
  ];

  const handleCompanyClick = (item: (typeof company)[0]) => {
    if (item.sectionId) {
      if (currentPath === '/') {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      } else {
        navigate('/', item.sectionId);
        return;
      }
    }
    if (item.label === 'About Us' || item.label === 'About') {
      if (currentPath === '/') {
        const element =
          document.getElementById('founder-section') ||
          document.getElementById('about-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
    }
    navigate(item.path);
  };

  const globalHubs = [
    {
      region: 'North America',
      phone: '+1 415 688 6517',
      tel: '+14156886517',
    },
    {
      region: 'Middle East (UAE)',
      phone: '+971 52 877 0047',
      tel: '+971528770047',
    },
    {
      region: 'India & APAC',
      phone: '+91 98844 50102',
      tel: '+919884450102',
    },
  ];

  return (
    <footer
      id="site-footer"
      className="border-t border-[#E5E3DC] dark:border-white/10 bg-[#161519] text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <SalesNegoLogo
              id="footer-brand-logo"
              variant="white"
              imgClassName="h-9 sm:h-10 w-auto max-w-[210px]"
            />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Founder-led commercial advisory, revenue operations, and pipeline execution for B2B SaaS, AI, and technology companies.
            </p>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE2338] block mb-1">
              Services &amp; Solutions
            </span>
            <ul className="space-y-2.5 text-sm">
              {services.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => navigate(item.path)}
                    className="text-zinc-300 hover:text-white transition-colors text-left font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE2338] block mb-1">
              Company
            </span>
            <ul className="space-y-2.5 text-sm">
              {company.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => handleCompanyClick(item)}
                    className="text-zinc-300 hover:text-white transition-colors text-left font-medium cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Hubs Col */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-[#EE2338] block mb-1">
              Global Capacity Hubs
            </span>
            <div className="space-y-3">
              {globalHubs.map((hub) => (
                <div key={hub.region} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="flex items-center font-bold text-white mb-0.5">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#EE2338]" />
                      {hub.region}
                    </span>
                  </div>
                  <a
                    href={`tel:${hub.tel}`}
                    className="text-zinc-300 hover:text-[#EE2338] transition-colors font-mono"
                  >
                    {hub.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/salesnego-circle-logo.svg"
              alt="SalesNego"
              className="w-4 h-4 rounded-full object-contain opacity-80"
              loading="lazy"
            />
            <p>© {new Date().getFullYear()} SalesNego. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => navigate('/privacy')}
              className="hover:underline hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <a
              href="https://www.linkedin.com/company/salesnego"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
