import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import QRCode from 'qrcode';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* WhatsApp Speech Bubble in Green #25D366 */}
    <path
      fill="#25D366"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.966-1.405A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
    />
    {/* White Handset Inside */}
    <path
      fill="#FFFFFF"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
    />
  </svg>
);

interface RegionalDesk {
  id: string;
  region: string;
  shortLabel: string;
  flag: string;
  phoneDisplay: string;
  phoneRaw: string;
}

const REGIONAL_DESKS: RegionalDesk[] = [
  {
    id: 'usa',
    region: 'Americas / USA',
    shortLabel: 'USA / Americas',
    flag: '🇺🇸',
    phoneDisplay: '+1 415 688 6517',
    phoneRaw: '14156886517',
  },
  {
    id: 'uae',
    region: 'Middle East / UAE',
    shortLabel: 'UAE / Middle East',
    flag: '🇦🇪',
    phoneDisplay: '+971 52 877 0047',
    phoneRaw: '971528770047',
  },
  {
    id: 'india',
    region: 'India / APAC',
    shortLabel: 'India / APAC',
    flag: '🇮🇳',
    phoneDisplay: '+91 98844 50102',
    phoneRaw: '919884450102',
  },
];

const DEFAULT_MESSAGE = "Hi SalesNego team, I'd like to discuss B2B commercial execution.";

export const WhatsAppChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState<RegionalDesk>(REGIONAL_DESKS[0]);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const widgetRef = useRef<HTMLDivElement>(null);

  const directWhatsAppUrl = `https://wa.me/${selectedDesk.phoneRaw}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  // Generate crisp QR code when popup is open using reliable SVG encoding
  useEffect(() => {
    if (!isOpen) return;

    try {
      QRCode.toString(
        directWhatsAppUrl,
        {
          type: 'svg',
          margin: 1,
          width: 220,
          color: {
            dark: '#18181B',
            light: '#FFFFFF',
          },
          errorCorrectionLevel: 'M',
        },
        (err, svg) => {
          if (err || !svg) {
            QRCode.toDataURL(directWhatsAppUrl, {
              width: 220,
              margin: 1,
              color: {
                dark: '#18181B',
                light: '#FFFFFF',
              },
              errorCorrectionLevel: 'M',
            })
              .then((url) => setQrCodeDataUrl(url))
              .catch((e) => console.warn('QR code generation error:', e));
          } else {
            setQrCodeDataUrl(`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`);
          }
        }
      );
    } catch (err) {
      console.warn('QR code generation error:', err);
    }
  }, [directWhatsAppUrl, isOpen]);

  // Handle outside click & Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOpenWhatsApp = () => {
    window.open(directWhatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={widgetRef} className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end pointer-events-none">
      {/* Scan & Connect Popover Window - Styled in Red & Black Theme */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Connect with SalesNego on WhatsApp"
          className="pointer-events-auto mb-4 w-[92vw] sm:w-[340px] flex flex-col rounded-2xl bg-white dark:bg-[#161519] border border-[#E5E3DC] dark:border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header with WhatsApp Logo */}
          <div className="bg-[#F6F5F2] dark:bg-[#121214] text-[#161519] dark:text-white px-4 py-3.5 flex items-center justify-between border-b border-[#E5E3DC] dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-transparent flex items-center justify-center shrink-0">
                <WhatsAppIcon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm tracking-tight text-[#161519] dark:text-white leading-none">
                  SalesNego WhatsApp Desk
                </h3>
                <span className="text-[11px] text-[#E11D2A] dark:text-[#EE2338] font-medium inline-flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2A] animate-pulse" />
                  Live &amp; Responsive
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E11D2A]"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Minimal Content Body */}
          <div className="p-4 flex flex-col items-center bg-white dark:bg-[#161519] space-y-3.5">
            {/* Regional Desk Quick Tabs */}
            <div className="w-full flex rounded-xl bg-[#F6F5F2] dark:bg-[#121214] p-1 border border-[#E5E3DC] dark:border-white/10">
              {REGIONAL_DESKS.map((desk) => {
                const isSelected = selectedDesk.id === desk.id;
                return (
                  <button
                    key={desk.id}
                    type="button"
                    onClick={() => setSelectedDesk(desk)}
                    className={`flex-1 py-1.5 px-1 rounded-lg text-[11px] font-semibold transition-all flex items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-[#E11D2A] text-white shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-[#161519] dark:hover:text-white'
                    }`}
                  >
                    <span>{desk.flag}</span>
                    <span className="truncate">{desk.shortLabel.split('/')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Scannable High-Contrast QR Code */}
            <div className="relative p-3 rounded-xl bg-white border border-[#E5E3DC] dark:border-white/10 shadow-sm flex flex-col items-center">
              {qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt={`Scan QR code to chat with SalesNego on WhatsApp (${selectedDesk.region})`}
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-lg"
                />
              ) : (
                <div className="w-40 h-40 flex items-center justify-center bg-zinc-50 text-xs text-zinc-500">
                  Loading QR Code...
                </div>
              )}
              {/* WhatsApp logo in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
            </div>

            {/* Quick Helper Text */}
            <div className="text-center">
              <p className="text-xs font-semibold text-[#161519] dark:text-white">
                Scan to chat on mobile
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                {selectedDesk.phoneDisplay}
              </p>
            </div>

            {/* One-Click Direct Launch Button */}
            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-[#E11D2A] hover:bg-[#c91521] active:scale-98 text-white font-semibold px-4 py-2.5 rounded-full transition-all flex items-center justify-center gap-2 text-xs sm:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E11D2A]"
            >
              <span>Open in WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger: WhatsApp Green Button */}
      <button
        id="whatsapp-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer ${
          isOpen
            ? 'bg-[#161519] dark:bg-white text-white dark:text-[#161519] border border-white/20'
            : 'bg-[#25D366] hover:bg-[#20ba59] text-white border-2 border-white dark:border-[#161519] shadow-lg shadow-[#25D366]/30 animate-slight-blink'
        }`}
        aria-label={isOpen ? 'Close WhatsApp Chat' : 'Chat on WhatsApp'}
        title={isOpen ? 'Close' : 'Chat on WhatsApp'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 drop-shadow-xs" />
        )}
      </button>
    </div>
  );
};
