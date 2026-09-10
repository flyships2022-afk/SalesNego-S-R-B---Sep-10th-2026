import React from 'react';

interface Logo {
  name: string;
  src: string;
  darkSrc?: string;
  fallback?: string;
}

const clientLogos: Logo[] = [
  {
    name: 'TC+ LIMS',
    src: '/tclims-transparent.png',
    darkSrc: '/tclims-dark.png',
    fallback: '/tclims-logo.jpg',
  },
  {
    name: 'KidOye',
    src: '/kidoye-transparent.png',
    darkSrc: '/kidoye-transparent.png',
    fallback: '/kidoye-logo.jpg',
  },
  {
    name: 'Infocodec',
    src: '/infocodec-transparent.png',
    darkSrc: '/infocodec-dark.png',
    fallback: '/infocodec-logo.jpg',
  },
  {
    name: 'Maple Tax',
    src: '/mapletax-logo.png',
    darkSrc: '/mapletax-logo.png',
    fallback: '/mapletax-logo.png',
  },
  {
    name: 'Metafic',
    src: '/metafic-logo-light.svg',
    darkSrc: '/metafic-logo-dark.svg',
    fallback: 'https://metafic.co/images/metafic-full-line-logo.svg',
  },
  {
    name: 'Leadnics',
    src: '/leadnics-logo.svg',
    darkSrc: '/leadnics-dark.png',
    fallback: '/leadnics-logo.svg',
  },
  {
    name: 'Aarav Nexus',
    src: '/aarav-nexus-logo.svg',
    darkSrc: '/aarav-nexus-dark.png',
    fallback: '/aarav-nexus-logo.svg',
  },
];

export const ClientMarquee: React.FC = () => {
  // Duplicate list to guarantee a seamless infinite loop
  const doubleLogos = [...clientLogos, ...clientLogos];

  return (
    <div
      id="client-logos-section"
      className="w-full py-6 sm:py-8 lg:py-10 bg-slate-50/50 dark:bg-[#0B0C10]/50 border-y border-slate-200/60 dark:border-slate-800/80 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6 text-center">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Trusted Across SaaS, Technology Products &amp; Services
        </p>
      </div>

      {/* Marquee Container with Responsive Edge Fading (left & right) */}
      <div
        className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0%,_black_8%,_black_92%,_transparent_100%)]"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex w-max items-center space-x-6 sm:space-x-10 lg:space-x-14 animate-[marquee_20s_linear_infinite] sm:animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {doubleLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center min-w-[100px] sm:min-w-[130px] lg:min-w-[150px] h-8 sm:h-10 lg:h-12 shrink-0 transition-transform duration-200 hover:scale-105"
            >
              {logo.darkSrc && logo.darkSrc !== logo.src ? (
                <>
                  {/* Light Mode: Original Vibrant Brand Colors */}
                  <img
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    className="max-h-6 sm:max-h-8 lg:max-h-9 w-auto object-contain dark:hidden pointer-events-none"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      if (logo.fallback && target.src !== logo.fallback) {
                        target.src = logo.fallback;
                      }
                    }}
                  />
                  {/* Dark Mode: Original Brand Colors + Crisp High-Contrast Contrast */}
                  <img
                    src={logo.darkSrc}
                    alt={`${logo.name} Logo`}
                    className="max-h-6 sm:max-h-8 lg:max-h-9 w-auto object-contain hidden dark:block pointer-events-none"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      if (logo.fallback && target.src !== logo.fallback) {
                        target.src = logo.fallback;
                      }
                    }}
                  />
                </>
              ) : (
                /* Universal: Original Colors that look vibrant on both light & dark */
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  className="max-h-6 sm:max-h-8 lg:max-h-9 w-auto object-contain pointer-events-none"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    if (logo.fallback && target.src !== logo.fallback) {
                      target.src = logo.fallback;
                    }
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
