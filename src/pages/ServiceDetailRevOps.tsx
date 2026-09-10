import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ArrowUpRight, Cpu, UserCheck, CheckCircle2 } from 'lucide-react';

export const ServiceDetailRevOps: React.FC = () => {
  const { navigate, openCalendly } = useNavigation();

  const whatWeSupport = [
    'CRM & Pipeline Architecture',
    'Qualification Frameworks',
    'Account & Contact Data',
    'Account Scoring',
    'Research & Enrichment',
    'Trigger Monitoring',
    'AI-Assisted Preparation',
    'Workflow Automation',
    'CRM Capture',
    'Pipeline Reporting',
    'Win/Loss Learning',
  ];

  const aiRole = [
    'Research',
    'Enrichment',
    'Contact Discovery',
    'Trigger Monitoring',
    'Preparation',
    'Meeting Summaries',
    'CRM Capture',
    'Follow-Up Preparation',
    'Pattern Analysis',
  ];

  const humanRole = [
    'Prioritisation',
    'Discovery',
    'Qualification',
    'Solution Alignment',
    'Business Cases',
    'Negotiation',
    'Closing',
    'Account Relationships',
  ];

  const possibleOutputs = [
    'CRM & Pipeline Architecture',
    'Qualification Framework',
    'Workflow Design',
    'Automation Map',
    'Revenue Dashboard',
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <section
        id="revops-hero"
        aria-label="Service 2 Hero"
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
              SERVICE 02 — REVOPS &amp; AI-ACCELERATED SALES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#161519] dark:text-white leading-[1.15] mb-6">
              Build the Revenue Infrastructure <br />
              Behind <span className="text-[#EE2338]">Better Commercial Execution.</span>
            </h1>
            <div className="space-y-3 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p className="font-bold text-[#161519] dark:text-white">
                Sales technology is valuable when it improves commercial execution rather than
                creating more operational complexity.
              </p>
              <p>
                SalesNego connects CRM, data, qualification, workflows, automation and AI-supported
                intelligence around the buying process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section
        id="revops-support"
        aria-label="What We Support"
        className="w-full py-16 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white mb-2">
              What We Support
            </h2>
            <p className="text-sm text-[#555459] dark:text-zinc-400">
              Commercial operations architected for clean execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeSupport.map((item) => (
              <div
                key={item}
                className="p-4 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-start gap-3 shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#EE2338] mt-1.5 shrink-0" />
                <span className="text-sm font-bold text-[#161519] dark:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI's Role vs Human Role */}
      <section
        id="revops-roles"
        aria-label="AI and Human Roles"
        className="w-full py-16 border-b border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE2338]/10 border border-[#EE2338]/20 text-[#EE2338] text-xs font-semibold w-fit mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EE2338] animate-pulse" />
              DIVISION OF RESPONSIBILITY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white">
              Accelerating Workflows While Preserving Human Commercial Judgment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI's Role */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#EE2338]/10 text-[#EE2338]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#161519] dark:text-white">
                    AI's Role
                  </h3>
                  <p className="text-xs text-[#555459] dark:text-zinc-400">AI can accelerate:</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-[#555459] dark:text-zinc-300">
                {aiRole.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EE2338]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Human Role */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#EE2338]/10 text-[#EE2338]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#161519] dark:text-white">
                    Human Role
                  </h3>
                  <p className="text-xs text-[#555459] dark:text-zinc-400">
                    Commercial judgment remains human-led across:
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm text-[#555459] dark:text-zinc-300">
                {humanRole.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EE2338]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Possible Outputs */}
      <section
        id="revops-outputs"
        aria-label="Possible Outputs"
        className="w-full py-16 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161519] dark:text-white mb-2">
              Possible Outputs
            </h2>
            <p className="text-sm text-[#555459] dark:text-zinc-400">
              Operating systems and frameworks configured for your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {possibleOutputs.map((output) => (
              <div
                key={output}
                className="p-5 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-center gap-3 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#EE2338] shrink-0" />
                <span className="text-sm font-bold text-[#161519] dark:text-white">
                  {output}
                </span>
              </div>
            ))}
          </div>

          {/* Next Step Progression */}
          <div className="mt-12 pt-8 border-t border-[#E5E3DC] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block">
                Next Step in System
              </span>
              <p className="text-base font-bold text-[#161519] dark:text-white">
                End-to-End Commercial Execution
              </p>
            </div>
            <button
              onClick={() => navigate('/services/commercial-execution')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#EE2338] bg-[#EE2338]/10 hover:bg-[#EE2338] hover:text-white rounded-full transition-colors cursor-pointer"
            >
              <span>See End-to-End Commercial Execution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-[#F6F5F2] dark:bg-[#121214] text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#161519] dark:text-white">
            Strengthen Your Revenue Operations
          </h2>
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
