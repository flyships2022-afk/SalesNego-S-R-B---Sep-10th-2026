import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Calendar } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const CalendlyModal: React.FC = () => {
  const { isCalendlyOpen, closeCalendly } = useNavigation();
  const modalRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = 'https://calendly.com/meeting-with-salesnego/30min';
  const calendlyEmbedUrl = `${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCalendlyOpen) {
        closeCalendly();
      }
    };

    if (isCalendlyOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCalendlyOpen, closeCalendly]);

  if (!isCalendlyOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCalendly();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white dark:bg-[#1C1B20] rounded-2xl border border-[#E5E3DC] dark:border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 border-b border-[#E5E3DC] dark:border-white/10 bg-[#F6F5F2] dark:bg-[#161519]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EE2338]/10 dark:bg-[#EE2338]/15 flex items-center justify-center text-[#EE2338] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 id="calendly-modal-title" className="text-sm sm:text-base font-bold text-[#161519] dark:text-white">
                Discuss Your Growth Priorities
              </h2>
              <p className="text-xs text-[#555459] dark:text-zinc-400">
                Schedule a 30-minute founder-led commercial conversation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#EE2338] hover:bg-[#EE2338]/10 rounded-lg transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={closeCalendly}
              className="p-1.5 text-[#555459] hover:text-[#161519] dark:text-zinc-400 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content iframe */}
        <div
          className="w-full relative bg-white dark:bg-[#161519] h-[580px] max-h-[75vh] overflow-hidden"
          style={{ height: '580px', maxHeight: '75vh', overflow: 'hidden' }}
        >
          <iframe
            src={calendlyEmbedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with SalesNego"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
