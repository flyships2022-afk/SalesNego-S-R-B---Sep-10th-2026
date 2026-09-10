import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight } from 'lucide-react';

export const ServiceDetailExecution: React.FC = () => {
  const { openCalendly } = useNavigation();

  const commercialJourney = [
    'Engage',
    'Diagnose',
    'Qualify',
    'Align',
    'Propose',
    'Negotiate',
    'Close',
    'Grow',
  ];

  const whatWeSupport = [
    'Account Research',
    'Buyer Identification',
    'Executive Outreach',
    'Discovery',
    'Qualification',
    'Demos',
    'Requirements',
    'Solution Alignment',
    'Business Cases',
    'Technical Validation',
    'Proposals',
    'Objection Management',
    'Procurement Navigation',
    'Negotiation',
    'Closure',
    'Customer Success',
    'Account Expansion',
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section
        id="execution-hero"
        aria-label="Service 3 Hero"
        className="relative overflow-hidden w-full pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214]"
      >
        {/* Dynamic Faded Grid Matrix Overlay - Enhanced Light Mode Visibility */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 dark:hidden bg-[linear-gradient(to_right,rgba(238,35,56,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(238,35,56,0.12)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        />

        {/* Light-colored Grid Matrix Overlay - Dark Mode Only */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 hidden dark:block bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#EE2338] block mb-3">
              SERVICE 03 — END-TO-END COMMERCIAL EXECUTION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#161519] dark:text-white leading-[1.15] mb-6">
              Take Qualified Opportunities <br />
              Beyond the Meeting to <span className="text-[#EE2338]">Closed Revenue.</span>
            </h1>
            <div className="space-y-3 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p className="font-bold text-[#161519] dark:text-white">
                SalesNego does not define success simply as generating a meeting.
              </p>
              <p>
                We help engage relevant accounts, diagnose customer problems, qualify genuine
                opportunities and support the commercial process through solution alignment,
                proposal, negotiation, closure and customer growth.
              </p>
            </div>
          </div>

          {/* Commercial Journey Visual */}
          <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-3">
              Commercial Journey
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-[#161519] dark:text-white">
              {commercialJourney.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5 rounded-md bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10">
                    {step}
                  </span>
                  {idx < commercialJourney.length - 1 && (
                    <span className="text-[#EE2338]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section
        id="execution-support"
        aria-label="What We Support"
        className="w-full py-16 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white mb-2">
              What We Support
            </h2>
            <p className="text-sm text-[#555459] dark:text-zinc-400">
              Active commercial involvement from first contact to deal closure and adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {whatWeSupport.map((item) => (
              <div
                key={item}
                className="p-3.5 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-center gap-2.5 shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#EE2338] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#161519] dark:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification & After the Sale */}
      <section
        id="qualification-expansion"
        aria-label="Qualification and After The Sale"
        className="w-full py-16 border-b border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Qualification */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 space-y-3 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE2338]/10 border border-[#EE2338]/20 text-[#EE2338] text-xs font-semibold w-fit mb-1">
                <span className="w-2 h-2 rounded-full bg-[#EE2338] animate-pulse" />
                QUALIFICATION
              </div>
              <h3 className="text-xl font-extrabold text-[#161519] dark:text-white">
                Evidence Earns Priority
              </h3>
              <p className="text-sm text-[#555459] dark:text-zinc-300 leading-relaxed">
                Discovery determines whether the problem, impact, stakeholders, urgency and buying
                process support a qualified commercial opportunity.
              </p>
            </div>

            {/* After the Sale */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 space-y-3 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE2338]/10 border border-[#EE2338]/20 text-[#EE2338] text-xs font-semibold w-fit mb-1">
                <span className="w-2 h-2 rounded-full bg-[#EE2338] animate-pulse" />
                AFTER THE SALE
              </div>
              <h3 className="text-xl font-extrabold text-[#161519] dark:text-white">
                Customer Acquisition Is Only the Beginning
              </h3>
              <div className="p-3 rounded-xl bg-[#EE2338]/5 dark:bg-[#EE2338]/10 border border-[#EE2338]/20 text-[#EE2338] font-mono text-xs tracking-wider uppercase font-bold">
                LAND → ADOPT → EXPAND → RETAIN &amp; GROW
              </div>
              <p className="text-sm text-[#555459] dark:text-zinc-300 leading-relaxed">
                Expansion is pursued only where a legitimate adjacent customer problem becomes
                visible and is validated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#F6F5F2] dark:bg-[#121214] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white">
            Discuss Your Commercial Priorities
          </h2>
          <p className="text-base text-[#555459] dark:text-zinc-400">
            Explore how end-to-end commercial execution can support your deal cycles.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#EE2338] hover:bg-[#c91521] rounded-full shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2338] cursor-pointer"
          >
            <span>Discuss Commercial Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
