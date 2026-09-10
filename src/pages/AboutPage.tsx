import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, Cpu, UserCheck, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openCalendly, navigate } = useNavigation();

  const aiSupports = [
    'Research',
    'Enrichment',
    'Trigger Monitoring',
    'Contact Discovery',
    'Preparation',
    'CRM Capture',
    'Follow-Up Preparation',
    'Workflow Automation',
    'Pattern Analysis',
  ];

  const humanJudgmentLeads = [
    'Market Selection',
    'Prioritisation',
    'Executive Messaging',
    'Discovery',
    'Qualification',
    'Business Cases',
    'Solution Alignment',
    'Negotiation',
    'Closing',
    'Relationships',
    'Expansion',
  ];

  return (
    <div className="w-full flex flex-col bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white transition-colors">
      {/* Hero */}
      <section
        id="about-hero"
        aria-label="About SalesNego Hero"
        className="relative overflow-hidden w-full pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E5E3DC] dark:border-white/10"
      >
        {/* Subtle Grid Matrix Overlay - Light Mode */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 dark:hidden bg-[linear-gradient(to_right,rgba(225,29,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(225,29,42,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        />

        {/* Subtle Grid Matrix Overlay - Dark Mode */}
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
              ABOUT SALESNEGO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#161519] dark:text-white mb-6 leading-tight">
              Commercial Strategy Connected to Commercial Execution.
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>SalesNego was built around a simple commercial belief:</p>
              <p className="font-bold text-[#161519] dark:text-white text-lg border-l-4 border-[#EE2338] pl-4 py-1">
                Strategy gives execution direction. Execution gives strategy evidence.
              </p>
              <p>
                We help technology companies connect market understanding, revenue infrastructure
                and full-cycle commercial execution instead of treating them as separate functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What SalesNego Is */}
      <section
        id="what-salesnego-is"
        aria-label="What SalesNego Is"
        className="w-full py-16 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-3">
              WHAT SALESNEGO IS
            </span>
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                SalesNego is an AI-accelerated, human-led and founder-led commercial execution
                partner for B2B SaaS, AI and technology companies.
              </p>
              <p>
                Our role can extend from understanding the market and identifying priority accounts
                through discovery, qualification, solution alignment, negotiation, closure,
                Customer Success and account expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section
        id="founder-profile"
        aria-label="Founder Profile"
        className="w-full py-16 md:py-20 border-b border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-3">
                FOUNDER
              </span>

              {/* Founder Portrait & Details */}
              <div className="flex flex-col items-start w-full mb-5">
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#E5E3DC] dark:border-white/10 shrink-0 bg-white dark:bg-[#1C1B20] mb-4">
                  <img
                    src="https://www.image2url.com/r2/default/images/1785784733130-463697ea-d4b8-40a6-a8e3-46ef59c33d68.jpg"
                    alt="Raja Kumar - Founder & Principal Commercial Operator of SalesNego"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#161519] dark:text-white mb-1">
                    Raja Kumar
                  </h2>
                  <p className="text-sm font-bold text-[#EE2338] mb-1">
                    Founder &amp; Principal Commercial Operator
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    MBA — University of Chester, UK • Commercial Leadership
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 mb-6 shadow-xs w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-1">
                  Commercial Principle
                </span>
                <p className="text-sm font-bold text-[#161519] dark:text-white">
                  “We use AI to accelerate execution, but never replace senior commercial judgment.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                With over 14 years of hands-on commercial ownership across Enterprise SaaS, Cloud &amp; IT Services, and Global B2B Business Development, Raja Kumar leads every core commercial engagement directly.
              </p>
              <p>
                Rather than handing critical enterprise accounts to inexperienced junior reps or volume outreach bots, SalesNego brings executive judgment to ICP qualification, discovery, and enterprise contract negotiation.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                MBA — University of Chester, UK.
              </p>

              <div className="pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-3">
                  Experience Across the Commercial Lifecycle
                </span>
                <div className="p-4 rounded-xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 text-xs sm:text-sm font-semibold text-[#161519] dark:text-white leading-relaxed flex flex-wrap items-center gap-1.5 shadow-xs">
                  <span>Market Strategy</span>
                  <span>→</span>
                  <span>ICP</span>
                  <span>→</span>
                  <span>Account Intelligence</span>
                  <span>→</span>
                  <span>Outreach</span>
                  <span>→</span>
                  <span>Discovery</span>
                  <span>→</span>
                  <span>Solution Alignment</span>
                  <span>→</span>
                  <span>Proposal</span>
                  <span>→</span>
                  <span>Negotiation</span>
                  <span>→</span>
                  <span>Closure</span>
                  <span>→</span>
                  <span>Customer Success</span>
                  <span>→</span>
                  <span className="font-extrabold text-[#EE2338]">Expansion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Think & AI + Human Judgment */}
      <section
        id="how-we-think"
        aria-label="Commercial Philosophy"
        className="w-full py-16 md:py-24 border-b border-[#E5E3DC] dark:border-white/10 bg-white dark:bg-[#161519]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#EE2338] block mb-3">
              HOW WE THINK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#161519] dark:text-white mb-4">
              Evidence Before Assumption
            </h2>
            <div className="space-y-3 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                Signals such as funding, hiring, expansion, technology adoption or leadership changes
                may indicate commercial relevance.
              </p>
              <p className="font-bold text-[#161519] dark:text-white">
                They do not automatically prove buying intent.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-1">
                DISCIPLINE
              </span>
              <p className="text-sm font-extrabold text-[#161519] dark:text-white">
                FACT → HYPOTHESIS → DISCOVERY QUESTION
              </p>
            </div>
          </div>

          {/* AI + Human Judgment Comparison Columns */}
          <div className="pt-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#161519] dark:text-white mb-8">
              AI + Human Judgment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Supports Column */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#161519]/5 dark:bg-white/10 text-[#161519] dark:text-white">
                    <Cpu className="w-5 h-5 text-[#161519] dark:text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#161519] dark:text-white">
                      AI Supports
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold">
                      Automated high-velocity workload
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {aiSupports.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Human Judgment Leads Column */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#EE2338]/10 text-[#EE2338]">
                    <UserCheck className="w-5 h-5 text-[#EE2338]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#161519] dark:text-white">
                      Human Judgment Leads
                    </h4>
                    <span className="text-xs text-[#EE2338] font-semibold">
                      Commercial nuance and decisions
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                  {humanJudgmentLeads.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EE2338]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Closing Principle */}
            <div className="mt-8 text-center p-6 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
              <p className="text-base sm:text-lg font-bold text-[#161519] dark:text-white">
                Automate the workload with AI. <span className="text-[#EE2338]">Keep commercial judgment human.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section
        id="about-cta"
        aria-label="About Call to Action"
        className="w-full py-16 md:py-24 bg-[#F6F5F2] dark:bg-[#121214]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#161519] dark:text-white">
              Need More Than Sales Activity?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#E11D2A] hover:bg-[#c91521] active:scale-98 rounded-full shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2A]"
              >
                <span>Discuss Your Growth Priorities</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-[#161519] dark:text-white bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
