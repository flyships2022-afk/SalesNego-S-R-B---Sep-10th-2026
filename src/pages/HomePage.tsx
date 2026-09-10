import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ProcessCircleMotion } from '../components/ProcessCircleMotion';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { ClientMarquee } from '../components/ClientMarquee';
import { FAQSection } from '../components/FAQSection';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Mail,
  Linkedin,
  Phone,
  Send,
  AlertCircle,
  Compass,
  Cpu,
  TrendingUp,
  UserCheck,
  Zap,
  Layers,
  Award,
  GraduationCap,
  Briefcase,
  Quote,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { openCalendly, navigate } = useNavigation();

  // Pathway 1: Hero Process Flow (Understand -> Build -> Execute -> Close -> Grow)
  const heroSteps = ['Understand', 'Build', 'Execute', 'Close', 'Grow'];
  const [heroStep, setHeroStep] = useState<number>(0);
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setHeroStep((prev) => (prev + 1) % heroSteps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHeroPaused, heroSteps.length]);

  // Pathway 2: Challenge / Commercial Gap Flow (Right Market -> Right Accounts -> Right Conversations -> Qualified Opportunities -> Closed Business)
  const gapSteps = [
    'Right Market',
    'Right Accounts',
    'Right Conversations',
    'Qualified Opportunities',
    'Closed Business',
  ];
  const [gapStep, setGapStep] = useState<number>(0);
  const [isGapPaused, setIsGapPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isGapPaused) return;
    const timer = setInterval(() => {
      setGapStep((prev) => (prev + 1) % gapSteps.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [isGapPaused, gapSteps.length]);

  // Pathway 3: Commercial Execution Journey in Section 6 (UNDERSTAND -> EXPAND)
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isJourneyPaused, setIsJourneyPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isJourneyPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8);
    }, 2600);
    return () => clearInterval(timer);
  }, [isJourneyPaused]);

  // Contact Form State for Section 10
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    selling: '',
    targetMarket: '',
    objective: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Section 6 Steps (Document Pages 7-8)
  const commercialJourneySteps = [
    {
      stage: 'UNDERSTAND',
      sentence: 'Understand the market, category and commercial environment.',
    },
    {
      stage: 'POSITION',
      sentence: 'Clarify ICP, buyers, value proposition and messaging.',
    },
    {
      stage: 'PRIORITIZE',
      sentence: 'Identify where evidence suggests commercial attention should be applied.',
    },
    {
      stage: 'ENGAGE',
      sentence: 'Reach relevant accounts and buyers with informed commercial context.',
    },
    {
      stage: 'DIAGNOSE',
      sentence: 'Understand the customer problem, impact, urgency and stakeholders.',
    },
    {
      stage: 'QUALIFY',
      sentence: 'Validate whether a genuine buying process and opportunity exist.',
    },
    {
      stage: 'CONVERT',
      sentence: 'Align solution, business case, proposal and negotiation toward closure.',
    },
    {
      stage: 'EXPAND',
      sentence: 'Support adoption and pursue validated adjacent customer needs.',
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xqpkpera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setFormStatus('success');
        setContactForm({
          name: '',
          email: '',
          company: '',
          selling: '',
          targetMarket: '',
          objective: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || 'Unable to submit the form. Please try again.');
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Network error occurred. Please email us directly at sales@salesnego.com.');
    }
  };

  return (
    <div className="relative w-full flex flex-col font-sans">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Document Pages 1-2)                      */}
      {/* ========================================================= */}
      <section
        id="hero-section"
        aria-label="Hero Introduction"
        className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#FFF5F5] to-[#F1F5F9] dark:from-[#0B0C10] dark:via-[#12141A] dark:to-[#0B0C10] transition-colors duration-500 py-16 lg:py-24"
      >
        {/* Background Ambient Glow Accents */}
        <div
          aria-hidden="true"
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-red-600/10 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-slate-300/20 dark:bg-slate-800/20 blur-3xl pointer-events-none"
        />

        {/* Main Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Text & CTAs */}
            <ScrollReveal className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
              {/* Tag Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/60 dark:bg-red-950/40 border border-red-200/80 dark:border-red-900/50 text-[#EE2338] text-xs font-semibold w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#EE2338] animate-pulse" />
                <span>B2B GTM, RevOps &amp; Commercial Execution</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                From Market Signal <br className="hidden sm:inline" />
                to <span className="text-[#EE2338]">Closed Revenue.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                SalesNego helps B2B SaaS, AI, and technology companies turn market intelligence into qualified opportunities, customers, and account growth.
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                We connect strategy, revenue operations, AI-accelerated workflows, and founder-led sales execution under one commercial partnership.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  id="hero-primary-cta"
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#EE2338] hover:bg-[#d01c30] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Discuss Your Growth Priorities</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="hero-secondary-cta"
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else navigate('/services');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all shadow-xs hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </button>
              </div>

              {/* Global Reach Footer Line */}
              <p className="text-xs text-slate-400 dark:text-slate-500 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                Founder-led commercial execution across North America, UAE, Europe, India, and Australia.
              </p>
            </ScrollReveal>

            {/* Right Column: Process Visual */}
            <ScrollReveal delay={150} className="lg:col-span-6 flex items-center justify-center">
              <ProcessCircleMotion />
            </ScrollReveal>
          </div>

          {/* Hero Visual: One Connected Commercial Journey */}
          <ScrollReveal delay={250} className="relative z-10 pt-8 mt-10 border-t border-slate-200/60 dark:border-slate-800">
            <div
              className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-sm shadow-xs"
              onMouseEnter={() => setIsHeroPaused(true)}
              onMouseLeave={() => setIsHeroPaused(false)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {heroSteps.map((step, idx) => {
                    const isActive = heroStep === idx;
                    return (
                      <React.Fragment key={step}>
                        <button
                          type="button"
                          onClick={() => setHeroStep(idx)}
                          className={`px-3 py-1 rounded-full transition-all duration-500 cursor-pointer ${
                            isActive
                              ? 'bg-[#EE2338] text-white shadow-md shadow-[#EE2338]/30 scale-105 border border-[#EE2338]'
                              : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10 hover:border-[#EE2338]/40'
                          }`}
                        >
                          {step}
                        </button>
                        {idx < heroSteps.length - 1 && (
                          <span
                            className={`transition-all duration-300 font-bold ${
                              isActive ? 'text-[#EE2338] scale-110' : 'text-[#EE2338]/60 dark:text-[#EE2338]/80'
                            }`}
                          >
                            →
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-300 italic">
                  AI accelerates the workload. Human commercial judgment drives the outcome.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CLIENT LOGOS - INFINITE MARQUEE (Document Page 2)      */}
      {/* ========================================================= */}
      <ScrollReveal delay={100}>
        <ClientMarquee />
      </ScrollReveal>

      {/* ========================================================= */}
      {/* 3. THE COMMERCIAL GAP (Document Page 3)                   */}
      {/* ========================================================= */}
      <section
        id="commercial-gap-section"
        aria-label="The Commercial Gap"
        className="w-full py-16 sm:py-20 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              THE CHALLENGE
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-6">
              More Sales Activity Does Not Automatically Create Revenue.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>
                Companies can invest in targeting, tools, automation and outbound activity while
                opportunities still fail to progress through the buying process.
              </p>
              <p className="font-medium text-[#161519] dark:text-white">
                SalesNego connects the commercial system from market understanding through customer
                acquisition and growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Simple Visual Pathway (Document Page 3) */}
          <ScrollReveal delay={150} className="mt-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
            <div
              className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#161519] dark:text-white"
              onMouseEnter={() => setIsGapPaused(true)}
              onMouseLeave={() => setIsGapPaused(false)}
            >
              {gapSteps.map((step, idx) => {
                const isActive = gapStep === idx;
                return (
                  <React.Fragment key={step}>
                    <button
                      type="button"
                      onClick={() => setGapStep(idx)}
                      className={`px-3.5 py-1.5 rounded-lg transition-all duration-500 cursor-pointer ${
                        isActive
                          ? 'bg-[#EE2338] text-white shadow-md shadow-[#EE2338]/30 scale-105 border border-[#EE2338]'
                          : 'bg-[#F6F5F2] dark:bg-white/5 text-[#555459] dark:text-zinc-300 border border-[#E5E3DC] dark:border-white/10 hover:border-[#EE2338]/40'
                      }`}
                    >
                      {step}
                    </button>
                    {idx < gapSteps.length - 1 && (
                      <span
                        className={`transition-all duration-300 font-bold ${
                          isActive ? 'text-[#EE2338] scale-110' : 'text-[#EE2338]/60 dark:text-[#EE2338]/80'
                        }`}
                      >
                        →
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SERVICES (Document Pages 3-6)                          */}
      {/* ========================================================= */}
      <section
        id="services-section"
        aria-label="Core Services"
        className="w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              WHAT WE DO
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
              Three Capabilities. One Commercial System.
            </h2>
            <div className="space-y-2 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>
                SalesNego does not treat strategy, revenue operations and sales execution as separate
                projects.
              </p>
              <p className="font-medium text-[#161519] dark:text-white">
                We connect all three under one commercial partnership.
              </p>
            </div>
          </ScrollReveal>

          {/* The 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 01 */}
            <ScrollReveal delay={100} className="h-full">
              <div
                role="link"
                tabIndex={0}
                aria-label="Learn more about Service 01: GTM Strategy & Market Intelligence"
                onClick={() => navigate('/services/gtm-strategy-market-intelligence')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/services/gtm-strategy-market-intelligence');
                  }
                }}
                className="group relative cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col justify-between shadow-xs h-full transition-all duration-300 ease-out will-change-transform hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 hover:border-[#EE2338]/40 dark:hover:border-[#EE2338]/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE2338]"
              >
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EE2338]/10 text-[#EE2338] border border-[#EE2338]/20 inline-block mb-4 transition-all duration-300 group-hover:bg-[#EE2338]/15 group-hover:border-[#EE2338]/40">
                    SERVICE 01
                  </span>
                  <h3 className="font-lexend text-xl font-bold text-[#161519] dark:text-white mb-2 transition-colors duration-200 group-hover:text-[#EE2338] dark:group-hover:text-white">
                    GTM Strategy &amp; Market Intelligence
                  </h3>
                  <p className="text-sm font-semibold text-[#EE2338] mb-3">
                    Know where to compete, who to target and why they should care.
                  </p>
                  <p className="text-sm text-[#555459] dark:text-zinc-300 mb-5 leading-relaxed">
                    We help define markets, ICPs, buyers, positioning, account priorities and commercial
                    hypotheses before execution begins.
                  </p>
                  <div className="pt-4 border-t border-[#E5E3DC] dark:border-white/10 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-2">
                      Key Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#161519] dark:text-zinc-200">
                      <li>• Market Intelligence</li>
                      <li>• ICP &amp; Buyer Definition</li>
                      <li>• Competitive Intelligence</li>
                      <li>• Positioning &amp; Messaging</li>
                      <li>• Account Prioritisation</li>
                      <li>• Market Entry</li>
                    </ul>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#EE2338] group-hover:text-[#c91521] dark:group-hover:text-[#ff4d5e] transition-colors pt-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </ScrollReveal>

            {/* Service 02 */}
            <ScrollReveal delay={220} className="h-full">
              <div
                role="link"
                tabIndex={0}
                aria-label="Learn more about Service 02: RevOps & AI-Accelerated Sales"
                onClick={() => navigate('/services/revops-ai-sales')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/services/revops-ai-sales');
                  }
                }}
                className="group relative cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col justify-between shadow-xs h-full transition-all duration-300 ease-out will-change-transform hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 hover:border-[#EE2338]/40 dark:hover:border-[#EE2338]/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE2338]"
              >
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EE2338]/10 text-[#EE2338] border border-[#EE2338]/20 inline-block mb-4 transition-all duration-300 group-hover:bg-[#EE2338]/15 group-hover:border-[#EE2338]/40">
                    SERVICE 02
                  </span>
                  <h3 className="font-lexend text-xl font-bold text-[#161519] dark:text-white mb-2 transition-colors duration-200 group-hover:text-[#EE2338] dark:group-hover:text-white">
                    RevOps &amp; AI-Accelerated Sales
                  </h3>
                  <p className="text-sm font-semibold text-[#EE2338] mb-3">
                    Build the commercial infrastructure required for disciplined execution.
                  </p>
                  <p className="text-sm text-[#555459] dark:text-zinc-300 mb-5 leading-relaxed">
                    We connect CRM, data, qualification, workflows and AI-supported automation so
                    commercial teams can execute with better intelligence and less manual workload.
                  </p>
                  <div className="pt-4 border-t border-[#E5E3DC] dark:border-white/10 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-2">
                      Key Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#161519] dark:text-zinc-200">
                      <li>• CRM &amp; Pipeline Architecture</li>
                      <li>• Qualification</li>
                      <li>• Data &amp; Enrichment</li>
                      <li>• AI Research Workflows</li>
                      <li>• Trigger Monitoring</li>
                      <li>• Sales Automation</li>
                      <li>• Pipeline Intelligence</li>
                    </ul>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#EE2338] group-hover:text-[#c91521] dark:group-hover:text-[#ff4d5e] transition-colors pt-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </ScrollReveal>

            {/* Service 03 */}
            <ScrollReveal delay={340} className="h-full">
              <div
                role="link"
                tabIndex={0}
                aria-label="Learn more about Service 03: End-to-End Commercial Execution"
                onClick={() => navigate('/services/commercial-execution')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/services/commercial-execution');
                  }
                }}
                className="group relative cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col justify-between shadow-xs h-full transition-all duration-300 ease-out will-change-transform hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 hover:border-[#EE2338]/40 dark:hover:border-[#EE2338]/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE2338]"
              >
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EE2338]/10 text-[#EE2338] border border-[#EE2338]/20 inline-block mb-4 transition-all duration-300 group-hover:bg-[#EE2338]/15 group-hover:border-[#EE2338]/40">
                    SERVICE 03
                  </span>
                  <h3 className="font-lexend text-xl font-bold text-[#161519] dark:text-white mb-2 transition-colors duration-200 group-hover:text-[#EE2338] dark:group-hover:text-white">
                    End-to-End Commercial Execution
                  </h3>
                  <p className="text-sm font-semibold text-[#EE2338] mb-3">
                    Take qualified opportunities beyond the meeting and through the buying process.
                  </p>
                  <p className="text-sm text-[#555459] dark:text-zinc-300 mb-5 leading-relaxed">
                    SalesNego supports the commercial journey from account engagement through
                    discovery, qualification, solution alignment, proposals, negotiation, closure and
                    account growth.
                  </p>
                  <div className="pt-4 border-t border-[#E5E3DC] dark:border-white/10 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-2">
                      Key Areas
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#161519] dark:text-zinc-200">
                      <li>• Account Engagement</li>
                      <li>• Discovery</li>
                      <li>• Qualification</li>
                      <li>• Solution Alignment</li>
                      <li>• Proposals</li>
                      <li>• Negotiation</li>
                      <li>• Closure</li>
                      <li>• Customer Growth</li>
                    </ul>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#EE2338] group-hover:text-[#c91521] dark:group-hover:text-[#ff4d5e] transition-colors pt-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Services Closing Line */}
          <ScrollReveal delay={150} className="mt-12 text-center p-5 rounded-xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10">
            <p className="text-base sm:text-lg font-bold text-[#161519] dark:text-white">
              Strategy gives execution direction.{' '}
              <span className="text-[#EE2338]">Execution gives strategy evidence.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHY SALESNEGO (Document Pages 6-7)                     */}
      {/* ========================================================= */}
      <section
        id="why-salesnego-section"
        aria-label="Why SalesNego"
        className="w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              WHY SALESNEGO
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
              We Do Not Stop at Leads or Meetings.
            </h2>
            <div className="space-y-3 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>
                Traditional lead-generation and appointment-setting models typically focus on
                creating the initial sales conversation.
              </p>
              <p className="font-medium text-[#161519] dark:text-white">
                SalesNego takes broader commercial responsibility.
              </p>
              <p>
                We connect market intelligence, revenue infrastructure and human-led sales execution
                to help move qualified opportunities through the buying process toward customer
                acquisition and account growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Traditional Lead-Gen Model */}
            <ScrollReveal delay={100} className="h-full">
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-3">
                  Traditional Lead-Gen Model
                </span>
                <div className="flex flex-wrap items-center gap-2 text-sm text-[#555459] dark:text-zinc-400 font-medium">
                  <span className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5">Target Lists</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5">Outreach</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5">Leads</span>
                  <span>→</span>
                  <span className="px-3 py-1 rounded-md bg-black/5 dark:bg-white/5">Meetings</span>
                </div>
              </div>
            </ScrollReveal>

            {/* SalesNego Commercial Model */}
            <ScrollReveal delay={220} className="h-full">
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1C1B20] border-2 border-[#EE2338] shadow-xs h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-3">
                  SalesNego Commercial Model
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#161519] dark:text-white font-semibold">
                  <span className="px-2.5 py-1 rounded-md bg-[#EE2338]/10 text-[#EE2338]">
                    Market Intelligence
                  </span>
                  <span>→</span>
                  <span>Account Prioritisation</span>
                  <span>→</span>
                  <span>Engagement</span>
                  <span>→</span>
                  <span>Discovery</span>
                  <span>→</span>
                  <span>Qualification</span>
                  <span>→</span>
                  <span>Solution Alignment</span>
                  <span>→</span>
                  <span>Proposal</span>
                  <span>→</span>
                  <span>Negotiation</span>
                  <span>→</span>
                  <span>Closure</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#EE2338] text-white">Customer Growth</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Highlight */}
          <ScrollReveal delay={150} className="p-5 sm:p-6 rounded-2xl bg-[#EE2338] text-white text-center mb-10 shadow-md">
            <h3 className="font-lexend text-lg sm:text-xl font-bold">
              One Partner. From Market Intelligence to Closed Revenue.
            </h3>
          </ScrollReveal>

          {/* Four Supporting Principles (Concise horizontal items per Document Page 7) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ScrollReveal delay={100} className="h-full">
              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-center gap-3 h-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EE2338] shrink-0" />
                <span className="text-sm font-semibold text-[#161519] dark:text-white">
                  Founder-Led Commercial Ownership
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={180} className="h-full">
              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-center gap-3 h-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EE2338] shrink-0" />
                <span className="text-sm font-semibold text-[#161519] dark:text-white">
                  AI-Accelerated Execution
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={260} className="h-full">
              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-center gap-3 h-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EE2338] shrink-0" />
                <span className="text-sm font-semibold text-[#161519] dark:text-white">
                  Human Commercial Judgment
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={340} className="h-full">
              <div className="p-4 rounded-xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex items-center gap-3 h-full">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EE2338] shrink-0" />
                <span className="text-sm font-semibold text-[#161519] dark:text-white">
                  End-to-End Buying-Process Support
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. HOW SALESNEGO WORKS (Document Pages 7-8)               */}
      {/* ========================================================= */}
      <section
        id="how-it-works-section"
        aria-label="How SalesNego Works"
        className="w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              COMMERCIAL EXECUTION
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight">
              One Connected Commercial Journey.
            </h2>
          </ScrollReveal>

          {/* Visual Pathway Tabs */}
          <ScrollReveal delay={120} className="p-6 sm:p-8 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs mb-8">
            <div
              className="flex flex-wrap items-center gap-2 mb-6"
              onMouseEnter={() => setIsJourneyPaused(true)}
              onMouseLeave={() => setIsJourneyPaused(false)}
            >
              {commercialJourneySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.stage}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'bg-[#EE2338] text-white shadow-md shadow-[#EE2338]/30 scale-105 border border-[#EE2338]'
                        : 'bg-white dark:bg-[#121214] text-[#555459] dark:text-zinc-400 hover:text-[#161519] dark:hover:text-white border border-[#E5E3DC] dark:border-white/10'
                    }`}
                  >
                    {step.stage}
                  </button>
                );
              })}
            </div>

            {/* Active Stage Sentence (Document Page 8: show only one short sentence) */}
            <div className="p-5 rounded-xl bg-white dark:bg-[#121214] border border-[#E5E3DC] dark:border-white/10 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-1">
                {commercialJourneySteps[activeStep].stage}
              </span>
              <p className="text-base sm:text-lg font-medium text-[#161519] dark:text-white transition-opacity duration-300">
                {commercialJourneySteps[activeStep].sentence}
              </p>
            </div>
          </ScrollReveal>

          {/* Small Evidence Callout (Document Page 8) */}
          <ScrollReveal delay={180} className="p-5 sm:p-6 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-1">
                DISCIPLINE
              </span>
              <span className="text-sm sm:text-base font-extrabold text-[#161519] dark:text-white">
                FACT → HYPOTHESIS → DISCOVERY QUESTION
              </span>
            </div>
            <p className="text-sm font-semibold text-[#555459] dark:text-zinc-300">
              Evidence earns priority. Discovery earns qualification.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FOUNDER & COMMERCIAL LEADERSHIP                        */}
      {/* ========================================================= */}
      <div id="about-section" className="-mt-20 pt-20 pointer-events-none" aria-hidden="true" />
      <section
        id="founder-section"
        aria-label="Founder and Commercial Leadership"
        className="w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              FOUNDER &amp; COMMERCIAL LEADERSHIP
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
              Executive Judgment at the Frontline of Every Engagement.
            </h2>
            <p className="text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
              SalesNego is founder-led by Raja Kumar. We bring senior commercial judgment to enterprise pipeline generation, discovery, and high-stakes contract negotiation.
            </p>
          </ScrollReveal>

          {/* Founder Profile Card */}
          <ScrollReveal delay={120} className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-md mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Founder Image & Quick Bio Column */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 shrink-0 bg-slate-100 dark:bg-black/40 mb-5">
                  <img
                    src="https://www.image2url.com/r2/default/images/1785784733130-463697ea-d4b8-40a6-a8e3-46ef59c33d68.jpg"
                    alt="Raja Kumar - Founder & Principal Commercial Operator"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  {/* Subtle Accent Tag */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#EE2338]" />
                    <span>Founder-Led Execution</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-lexend font-bold text-[#161519] dark:text-white leading-tight">
                  Raja Kumar
                </h3>
                <p className="text-sm font-semibold text-[#EE2338] mt-1">
                  Founder &amp; Principal Commercial Operator
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10">
                    <GraduationCap className="w-3.5 h-3.5 text-[#EE2338]" />
                    <span>MBA — University of Chester, UK</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/10">
                    <Award className="w-3.5 h-3.5 text-[#EE2338]" />
                    <span>Commercial Leadership</span>
                  </span>
                </div>
              </div>

              {/* Bio & Commercial Philosophy Column */}
              <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
                {/* Quote Callout */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#F6F5F2] dark:bg-white/5 border border-[#E5E3DC] dark:border-white/10 relative">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-[#EE2338] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-lexend text-base sm:text-lg lg:text-xl font-medium text-[#161519] dark:text-white leading-snug">
                        “We use AI to accelerate execution, but never replace senior commercial judgment.”
                      </p>
                      <span className="block mt-2 text-xs font-semibold uppercase tracking-wider text-[#EE2338]">
                        Commercial Principle
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Copy */}
                <div className="space-y-4 text-base sm:text-lg text-[#555459] dark:text-zinc-300 leading-relaxed font-normal">
                  <p>
                    With over 14 years of hands-on commercial ownership across Enterprise SaaS, Cloud &amp; IT Services, and Global B2B Business Development, Raja Kumar leads every core commercial engagement directly.
                  </p>
                  <p>
                    Rather than handing critical enterprise accounts to inexperienced junior reps or volume outreach bots, SalesNego brings executive judgment to ICP qualification, discovery, and enterprise contract negotiation.
                  </p>
                </div>

                {/* Domain Focus Chips */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block mb-3">
                    Direct Hands-On Expertise
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-800 dark:text-zinc-200">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      Enterprise SaaS
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      Cloud &amp; IT Services
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      Global B2B BD
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      ICP Qualification
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      Executive Discovery
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#EE2338]/10 text-[#EE2338] border border-[#EE2338]/20">
                      Contract Negotiation
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white bg-[#EE2338] hover:bg-[#c91521] active:scale-98 transition-all shadow-xs"
                  >
                    <span>Schedule Conversation with Raja</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/case-studies')}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#161519] dark:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-all border border-slate-200 dark:border-white/10"
                  >
                    <span>View Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. ENGAGEMENT MODEL (Document Pages 9-10)                 */}
      {/* ========================================================= */}
      <section
        id="engagement-model-section"
        aria-label="Engagement Model"
        className="w-full py-16 sm:py-24 bg-white dark:bg-[#161519] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              COMMERCIAL PARTNERSHIP
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
              Commercial Alignment Beyond Activity Metrics.
            </h2>
            <div className="space-y-3 text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
              <p>
                SalesNego engagements can combine a monthly commercial execution retainer with a
                performance component linked to closed revenue where appropriate.
              </p>
              <p>
                The structure is agreed based on the market, product, sales cycle, commercial scope
                and level of execution ownership.
              </p>
            </div>
          </ScrollReveal>

          {/* Highlight (Document Page 9) */}
          <ScrollReveal delay={120} className="p-6 sm:p-8 rounded-2xl bg-[#F6F5F2] dark:bg-[#1C1B20] border-2 border-[#EE2338] max-w-3xl mb-6 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              Partnership Structure
            </span>
            <p className="font-lexend text-lg sm:text-xl font-bold text-[#161519] dark:text-white">
              Monthly Commercial Execution Retainer + Performance Component on Closed Revenue
            </p>
          </ScrollReveal>

          {/* Supporting Line (Document Page 10) */}
          <ScrollReveal delay={180}>
            <p className="text-xs sm:text-sm text-[#555459] dark:text-zinc-400 max-w-2xl leading-relaxed">
              SalesNego does not operate as a pay-per-meeting service and does not guarantee meetings,
              pipeline, revenue or closing dates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. TESTIMONIALS CAROUSEL SLIDING BOX                      */}
      {/* ========================================================= */}
      <section
        id="testimonials-section"
        aria-label="Client and Executive Testimonials"
        className="w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214] border-b border-[#E5E3DC] dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
              CLIENT &amp; EXECUTIVE TESTIMONIALS
            </span>
            <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
              Validated by Founders, C-Suite Leaders &amp; Global Clients.
            </h2>
            <p className="text-base text-[#555459] dark:text-zinc-300 leading-relaxed">
              Direct recommendations highlighting consultative commercial rigor, SaaS pipeline acceleration, and high-impact account management.
            </p>
          </ScrollReveal>

          {/* Sliding Carousel Box */}
          <ScrollReveal delay={120}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FAQ ACCORDION SECTION (B2B Self-Service)              */}
      {/* ========================================================= */}
      <ScrollReveal delay={80}>
        <FAQSection />
      </ScrollReveal>

      {/* ========================================================= */}
      {/* 11. FINAL CTA & CONTACT SECTION (Pages 10-11 & 20-21)     */}
      {/* ========================================================= */}
      <section
        id="contact-section"
        aria-label="Contact and Growth Priorities"
        className="w-full py-16 sm:py-24 bg-[#F6F5F2] dark:bg-[#121214]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Context, Calendly CTA, Direct Contact */}
            <ScrollReveal delay={100} className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
                  CONTACT SALESNEGO
                </span>
                <h2 className="font-lexend text-2xl sm:text-3xl lg:text-4xl font-normal text-[#161519] dark:text-white leading-tight mb-4">
                  Where Is Your Commercial Motion Getting Stuck?
                </h2>
                <p className="text-base text-[#555459] dark:text-zinc-300 leading-relaxed mb-3">
                  Tell us what you are selling, where you want to grow and what is preventing the
                  commercial motion from progressing.
                </p>
                <p className="text-sm font-medium text-[#161519] dark:text-white">
                  We can determine whether SalesNego is the right commercial partner.
                </p>
              </div>

              {/* Calendly Booking Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block">
                  Schedule Direct Conversation
                </span>
                <h3 className="text-base font-bold text-[#161519] dark:text-white">
                  Discuss Your Growth Priorities
                </h3>
                <p className="text-xs text-[#555459] dark:text-zinc-400">
                  Book a 30-minute founder-led consultation with Raja Kumar.
                </p>
                <button
                  type="button"
                  onClick={openCalendly}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white bg-[#EE2338] hover:bg-[#c91521] active:scale-98 transition-all shadow-xs"
                >
                  <span>Discuss Your Growth Priorities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Contact Details (Hidden on mobile view only per request) */}
              <div className="hidden md:block p-6 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#555459] dark:text-zinc-400 block">
                  Direct Contact
                </span>

                <div className="space-y-3 text-sm">
                  {/* Email */}
                  <div>
                    <span className="text-xs text-[#555459] dark:text-zinc-400 block">Email</span>
                    <a
                      href="mailto:sales@salesnego.com"
                      className="font-semibold text-[#161519] dark:text-white hover:text-[#EE2338] transition-colors"
                    >
                      sales@salesnego.com
                    </a>
                  </div>

                  {/* LinkedIn - Icon only, no url text */}
                  <div>
                    <span className="text-xs text-[#555459] dark:text-zinc-400 block mb-1.5">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/company/salesnego/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-1.5 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
                      title="Follow SalesNego on LinkedIn"
                      aria-label="SalesNego on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 fill-current" />
                    </a>
                  </div>

                  {/* WhatsApp (All three country options shown clearly per Document Page 21) */}
                  <div className="pt-2">
                    <span className="text-xs text-[#555459] dark:text-zinc-400 block mb-2">
                      WhatsApp Direct
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#555459] dark:text-zinc-400">USA:</span>
                        <a
                          href="https://wa.me/14156886517"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#161519] dark:text-white hover:text-[#EE2338]"
                        >
                          +1 415 688 6517
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#555459] dark:text-zinc-400">UAE:</span>
                        <a
                          href="https://wa.me/971528770047"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#161519] dark:text-white hover:text-[#EE2338]"
                        >
                          +971 52 877 0047
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#555459] dark:text-zinc-400">India:</span>
                        <a
                          href="https://wa.me/919884450102"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#161519] dark:text-white hover:text-[#EE2338]"
                        >
                          +91 98844 50102
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Contact Form (Document Pages 20-21) */}
            <ScrollReveal delay={200} className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1C1B20] border border-[#E5E3DC] dark:border-white/10 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EE2338] block mb-2">
                  START THE CONVERSATION
                </span>
                <h3 className="font-lexend text-xl sm:text-2xl font-normal text-[#161519] dark:text-white mb-6">
                  Let&rsquo;s Discuss Your Commercial Priorities.
                </h3>

                {formStatus === 'success' ? (
                  <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-[#161519] dark:text-white">
                      Message Received
                    </h4>
                    <p className="text-sm text-[#555459] dark:text-zinc-300">
                      Thank you for sharing your commercial priorities. We will review your
                      submission and get in touch directly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#EE2338] pt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    {formStatus === 'error' && (
                      <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-center gap-2 text-xs text-red-600 dark:text-red-400">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
                          placeholder="Your Name"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.company}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, company: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
                          placeholder="Your Company Name"
                        />
                      </div>

                      {/* Target Market */}
                      <div>
                        <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                          Target Market
                        </label>
                        <input
                          type="text"
                          value={contactForm.targetMarket}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, targetMarket: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
                          placeholder="e.g. North America, UAE, Europe"
                        />
                      </div>
                    </div>

                    {/* What are you selling? */}
                    <div>
                      <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                        What are you selling?
                      </label>
                      <input
                        type="text"
                        value={contactForm.selling}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, selling: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
                        placeholder="e.g. B2B SaaS, AI platform, Enterprise IT"
                      />
                    </div>

                    {/* What are you trying to achieve? */}
                    <div>
                      <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                        What are you trying to achieve?
                      </label>
                      <input
                        type="text"
                        value={contactForm.objective}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, objective: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338]"
                        placeholder="e.g. US market entry, pipeline qualification, full commercial execution"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#161519] dark:text-zinc-300 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EE2338] resize-none"
                        placeholder="Provide any additional commercial context or specific questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-[#EE2338] hover:bg-[#c91521] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>
                        {formStatus === 'submitting'
                          ? 'Sending...'
                          : 'Start the Conversation'}
                      </span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
