import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const ServicesIndexPage: React.FC = () => {
  const { navigate, openCalendly } = useNavigation();

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section
        id="services-overview-hero"
        aria-label="Services Overview Hero"
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
              SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161519] dark:text-white mb-6 leading-tight">
              One Commercial System. Three Connected Capabilities.
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>
                SalesNego combines GTM Strategy &amp; Market Intelligence, RevOps &amp;
                AI-Accelerated Sales and End-to-End Commercial Execution under one commercial
                partnership.
              </p>
              <p>They are not isolated service lines.</p>
              <p className="font-bold text-[#161519] dark:text-white">
                Each part strengthens the next.
              </p>
            </div>
          </div>

          {/* Flow Visual */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/10 max-w-2xl shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-3">
              The System Flow
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-bold text-[#161519] dark:text-white">
              <span>Understand the Market</span>
              <span className="text-[#EE2338]">→</span>
              <span>Build the System</span>
              <span className="text-[#EE2338]">→</span>
              <span>Execute the Sale</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Connected Services */}
      <section
        id="services-cards-grid"
        aria-label="Three Capabilities Details"
        className="w-full py-16 md:py-24 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Service 01 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161519] dark:bg-[#1C1B20] border border-[#E5E3DC]/30 dark:border-white/10 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#EE2338]/15 border border-[#EE2338]/30 text-[#EE2338]">
                SERVICE 01
              </span>
              <span className="text-xs text-zinc-400">Foundational</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              GTM Strategy &amp; Market Intelligence
            </h2>
            <p className="text-base font-semibold text-[#EE2338] mb-3">
              Know where to compete, who to target and why they should care.
            </p>
            <p className="text-sm text-zinc-300 mb-6 max-w-2xl leading-relaxed">
              We help define markets, ICPs, buyers, positioning, account priorities and commercial
              hypotheses before execution begins.
            </p>
            <button
              onClick={() => navigate('/services/gtm-strategy-market-intelligence')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#EE2338] hover:bg-[#c91521] rounded-full transition-colors shadow-xs cursor-pointer"
            >
              <span>Explore Service 01 Detail &rarr;</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Service 02 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161519] dark:bg-[#1C1B20] border border-[#E5E3DC]/30 dark:border-white/10 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#EE2338]/15 border border-[#EE2338]/30 text-[#EE2338]">
                SERVICE 02
              </span>
              <span className="text-xs text-zinc-400">Infrastructure</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              RevOps &amp; AI-Accelerated Sales
            </h2>
            <p className="text-base font-semibold text-[#EE2338] mb-3">
              Build the commercial infrastructure required for disciplined execution.
            </p>
            <p className="text-sm text-zinc-300 mb-6 max-w-2xl leading-relaxed">
              We connect CRM, data, qualification, workflows and AI-supported automation so
              commercial teams can execute with better intelligence and less manual workload.
            </p>
            <button
              onClick={() => navigate('/services/revops-ai-sales')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#EE2338] hover:bg-[#c91521] rounded-full transition-colors shadow-xs cursor-pointer"
            >
              <span>Explore Service 02 Detail &rarr;</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Service 03 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161519] dark:bg-[#1C1B20] border border-[#E5E3DC]/30 dark:border-white/10 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-md bg-[#EE2338]/15 border border-[#EE2338]/30 text-[#EE2338]">
                SERVICE 03
              </span>
              <span className="text-xs text-zinc-400">Execution</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              End-to-End Commercial Execution
            </h2>
            <p className="text-base font-semibold text-[#EE2338] mb-3">
              Take qualified opportunities beyond the meeting and through the buying process.
            </p>
            <p className="text-sm text-zinc-300 mb-6 max-w-2xl leading-relaxed">
              SalesNego supports the commercial journey from account engagement through discovery,
              qualification, solution alignment, proposals, negotiation, closure and account growth.
            </p>
            <button
              onClick={() => navigate('/services/commercial-execution')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#EE2338] hover:bg-[#c91521] rounded-full transition-colors shadow-xs cursor-pointer"
            >
              <span>Explore Service 03 Detail &rarr;</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#F6F5F2] dark:bg-[#121214] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">
            Where Is Your Commercial Motion Getting Stuck?
          </h2>
          <p className="text-base text-[#555459] dark:text-zinc-400">
            Tell us what you are selling, where you want to grow and what is preventing the
            commercial motion from progressing.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#EE2338] hover:bg-[#c91521] rounded-full shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EE2338] cursor-pointer"
          >
            <span>Discuss Your Growth Priorities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
