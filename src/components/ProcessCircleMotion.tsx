import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, BarChart2, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';

export const ProcessCircleMotion: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const stages = [
    {
      name: 'Follow up',
      lines: ['Follow up'],
      desc: 'Persistent nurturing and multi-channel engagement.',
    },
    {
      name: 'Discovery',
      lines: ['Discovery'],
      desc: 'Uncovering pain points, target outcomes, and budget fit.',
    },
    {
      name: 'Lead Qualification',
      lines: ['Lead', 'Qualification'],
      desc: 'Strict criteria validation to ensure deal fit.',
    },
    {
      name: 'Lead Generation',
      lines: ['Lead', 'Generation'],
      desc: 'Targeted outbound and inbound signal capture.',
    },
    {
      name: 'Meetings',
      lines: ['Meetings'],
      desc: 'Initial commercial alignment and stakeholder intro.',
    },
    {
      name: 'Negotiations',
      lines: ['Negotiations'],
      desc: 'Deal structuring, terms alignment, and objection handling.',
    },
    {
      name: 'Close-Won',
      lines: ['Close-Won'],
      desc: 'Final contract execution and commercial handoff.',
    },
    {
      name: 'Account Management',
      lines: ['Account', 'Management'],
      desc: 'Ongoing expansion, upselling, and retention.',
    },
  ];

  // Sequentially cycle through stages one-by-one with red highlight
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isHovered, stages.length]);

  // Precompute 8 arrows around orbital radius (r = 215)
  const arrows = Array.from({ length: 8 }).map((_, i) => {
    const angle = i * 45; // 0, 45, 90, 135, 180, 225, 270, 315
    const rad = (angle * Math.PI) / 180;
    const x = 250 + 215 * Math.cos(rad);
    const y = 250 + 215 * Math.sin(rad);
    const tangent = angle + 90; // tangent pointing clockwise
    return { x, y, tangent };
  });

  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="w-full h-full overflow-visible" viewBox="0 0 500 500">
        <defs>
          {/* Active Red Highlight Fill for Block */}
          <linearGradient id="activeRedBlock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E1219" />
            <stop offset="100%" stopColor="#1C0E14" />
          </linearGradient>

          {/* Active Red Block Glow Filter */}
          <filter id="activeBlockGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#EE2338" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* 8 Small Arrows in Clockwise Circular Motion (Works in Dark & Light Modes) */}
        <g
          className="animate-[spin_18s_linear_infinite]"
          style={{ transformOrigin: '250px 250px' }}
        >
          {/* Subtle guide orbit track */}
          <circle
            cx="250"
            cy="250"
            r="215"
            fill="none"
            stroke="#EE2338"
            strokeOpacity="0.22"
            strokeWidth="1.2"
          />

          {/* 8 Equidistant Arrows Gliding Clockwise */}
          {arrows.map((arr, idx) => (
            <g
              key={idx}
              transform={`translate(${arr.x.toFixed(2)}, ${arr.y.toFixed(2)}) rotate(${arr.tangent.toFixed(2)})`}
            >
              <path
                d="M -8 0 L 2 0 M -3 -4 L 3 0 L -3 4"
                fill="none"
                stroke="#EE2338"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="filter drop-shadow-[0_0_4px_rgba(238,35,56,0.9)]"
              />
            </g>
          ))}
        </g>

        {/* 8 Interlocking Wheel Segments */}
        {stages.map((stage, i) => {
          const angleStep = 360 / 8;
          const startAngle = i * angleStep - 90;
          const endAngle = (i + 1) * angleStep - 90;
          const midAngle = (startAngle + endAngle) / 2;

          // Radial Coordinates
          const rIn = 105;
          const rOut = 185;
          const rText = 145; // Centered text arc radius

          const rad = (a: number) => (a * Math.PI) / 180;

          const x1 = 250 + rIn * Math.cos(rad(startAngle));
          const y1 = 250 + rIn * Math.sin(rad(startAngle));
          const x2 = 250 + rOut * Math.cos(rad(startAngle));
          const y2 = 250 + rOut * Math.sin(rad(startAngle));
          const x3 = 250 + rOut * Math.cos(rad(endAngle));
          const y3 = 250 + rOut * Math.sin(rad(endAngle));
          const x4 = 250 + rIn * Math.cos(rad(endAngle));
          const y4 = 250 + rIn * Math.sin(rad(endAngle));

          const pathData = `M ${x1} ${y1} L ${x2} ${y2} A ${rOut} ${rOut} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${rIn} ${rIn} 0 0 0 ${x1} ${y1} Z`;

          const textX = 250 + rText * Math.cos(rad(midAngle));
          const textY = 250 + rText * Math.sin(rad(midAngle));

          const isFollowUp = i === 0;
          const isActive = activeStage === i;

          // Background Fill: Follow up is warm, others are dark obsidian or ruby-tinted when highlighted
          const segmentFill = isFollowUp
            ? isActive
              ? '#FEF08A'
              : '#FEF3C7'
            : isActive
            ? 'url(#activeRedBlock)'
            : '#12141A';

          return (
            <g
              key={i}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setActiveStage(i)}
              onMouseEnter={() => {
                setActiveStage(i);
                setIsHovered(true);
              }}
            >
              {/* Segment Block with Red Highlight on Active */}
              <path
                d={pathData}
                fill={segmentFill}
                stroke={isActive ? '#EE2338' : isFollowUp ? '#F59E0B' : '#2A2E39'}
                strokeWidth={isActive ? '3.5' : '1.5'}
                filter={isActive ? 'url(#activeBlockGlow)' : 'none'}
                className="transition-all duration-300 hover:brightness-110"
              />

              {/* Centered Typography: Multi-line support to prevent any text overflow */}
              {stage.lines.length === 2 ? (
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  fill={isFollowUp ? '#B45309' : '#FFFFFF'}
                  className="text-[10.5px] font-semibold tracking-wide pointer-events-none select-none"
                >
                  <tspan x={textX} dy="-0.65em">
                    {stage.lines[0]}
                  </tspan>
                  <tspan x={textX} dy="1.3em">
                    {stage.lines[1]}
                  </tspan>
                </text>
              ) : (
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isFollowUp ? '#B45309' : '#FFFFFF'}
                  className="text-[11px] font-semibold tracking-wide pointer-events-none select-none"
                >
                  {stage.lines[0]}
                </text>
              )}
            </g>
          );
        })}

        {/* Center Process Hub */}
        <foreignObject x="160" y="160" width="180" height="180">
          <div className="w-full h-full rounded-full bg-white dark:bg-[#12141A] border-2 border-[#EE2338] shadow-xl flex flex-col items-center justify-center p-4 text-center transition-colors duration-200">
            <span className="text-[10px] font-bold tracking-wider text-[#EE2338] uppercase">
              Stage {activeStage + 1} of 8
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 leading-tight">
              {stages[activeStage].name}
            </h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-tight">
              {stages[activeStage].desc}
            </p>
            <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/50 text-[#EE2338] text-[9px] font-medium border border-red-200 dark:border-red-900">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE2338] animate-pulse" />
              Pipeline Execution
            </div>
          </div>
        </foreignObject>
      </svg>

      {/* Qualified / Unqualified Floating Dock */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/95 dark:bg-[#12141A]/95 backdrop-blur-md p-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col gap-1.5 text-[11px] font-medium z-10">
        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Qualified</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
          <XCircle className="w-3.5 h-3.5" />
          <span>Unqualified</span>
        </div>
      </div>

      {/* Floating Glassmorphic Badges */}
      <div className="absolute top-4 left-6 p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md text-[#EE2338]">
        <Search className="w-4 h-4" />
      </div>
      <div className="absolute top-10 right-6 p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md text-[#EE2338]">
        <TrendingUp className="w-4 h-4" />
      </div>
      <div className="absolute bottom-6 right-10 p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md text-[#EE2338]">
        <BarChart2 className="w-4 h-4" />
      </div>
      <div className="absolute bottom-6 left-10 p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md text-[#EE2338]">
        <ShieldCheck className="w-4 h-4" />
      </div>
    </div>
  );
};
