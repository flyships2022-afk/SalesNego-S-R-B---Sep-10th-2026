import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const { openCalendly } = useNavigation();

  // Founder Commercial Track Record (Document Pages 18-19)
  const founderTrackRecord = [
    {
      company: 'TC+ LIMS',
      category: 'SaaS / Laboratory Digitisation',
      description:
        'SaaS and laboratory digitisation experience spanning discovery, workflow mapping, solution positioning, implementation coordination, adoption and account growth.',
    },
    {
      company: 'Infocodec',
      category: 'Enterprise Technology & Services',
      description:
        'Enterprise technology and IT-services selling involving technical-commercial alignment, requirements, proposals, negotiation and account expansion.',
    },
    {
      company: 'Metafic',
      category: 'AI & Custom Software',
      description:
        'International business development across AI, SaaS, digital products and custom software, including technical scoping, proposals, negotiation and closure.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white transition-colors">
      {/* Hero */}
      <section
        id="case-studies-hero"
        aria-label="Case Studies Hero"
        className="relative overflow-hidden w-full pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E5E3DC] dark:border-white/10"
      >
        {/* Dynamic Faded Grid Matrix Overlay - Enhanced Light Mode Visibility */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 dark:hidden bg-[linear-gradient(to_right,rgba(225,29,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(225,29,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        />

        {/* Light-colored Grid Matrix Overlay - Dark Mode Only */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#EE2338] block mb-3">
              COMMERCIAL EXPERIENCE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161519] dark:text-white mb-6 leading-tight">
              Selected Commercial &amp; Technology Experience.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              SalesNego combines founder commercial track record with deep cross-border experience across SaaS, AI,
              enterprise technology and technical services.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Commercial Track Record (Anonymized: Client Names Removed) */}
      <section
        id="founder-track-record"
        aria-label="Founder Commercial Track Record"
        className="w-full py-16 md:py-20 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              PROVEN TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white">
              Founder Commercial Track Record
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Verified commercial engagements across key technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founderTrackRecord.map((item) => (
              <div
                key={item.company}
                className="p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 hover:border-[#EE2338]/50 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:lg font-bold text-[#161519] dark:text-white">
                      {item.company}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EE2338]/10 text-[#EE2338] shrink-0 self-start sm:self-auto">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-white dark:bg-[#161519] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white">
            Discuss Your Commercial Priorities
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Schedule a founder-led conversation to review relevance to your target market and sales cycle.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#E11D2A] hover:bg-[#c91521] rounded-full shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2A]"
          >
            <span>Discuss Growth Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
