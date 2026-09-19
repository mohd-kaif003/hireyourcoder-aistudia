import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  className = '',
  showSubtitle = true,
  size = 'md'
}) => {
  // Height configurations
  const dimensions = {
    sm: { height: 32, width: 140 },
    md: { height: 42, width: 180 },
    lg: { height: 54, width: 230 }
  }[size];

  const isDark = variant === 'dark';

  const textColorMain = isDark ? '#FFFFFF' : '#0B132B';
  const subtitleColor = isDark ? '#94A3B8' : '#475569';
  const iconBaseColor = isDark ? '#FFFFFF' : '#0B132B';
  const pillBg = isDark ? 'rgba(0, 163, 255, 0.18)' : '#E0F7FE';
  const pillBorder = isDark ? 'rgba(0, 163, 255, 0.35)' : '#BAE6FD';
  const pillText = isDark ? '#38BDF8' : '#0284C7';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 320 84" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: dimensions.height, width: 'auto' }}
        className="overflow-visible"
        aria-label="HireYourCoder - Build • Automate • Grow"
      >
        <defs>
          {/* Vibrant Tech Cyan Gradient */}
          <linearGradient id="hyc-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FE" />
            <stop offset="100%" stopColor="#0077FF" />
          </linearGradient>

          <linearGradient id="hyc-accent-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0080FF" />
            <stop offset="100%" stopColor="#00D0FE" />
          </linearGradient>
        </defs>

        {/* --- STYLIZED BRAND ICON (Y-Chevron Tech Monogram) --- */}
        <g id="brand-icon">
          {/* Top cyan accent diagonal slash */}
          <path 
            d="M26 12 L44 12 L33 33 L15 33 Z" 
            fill="url(#hyc-accent-grad)" 
            rx="1"
          />

          {/* Deep Navy/White Left Angle Segment */}
          <path 
            d="M3 12 L19 12 L36 43 L36 72 L23 72 L23 48 L8 22 Z" 
            fill={iconBaseColor} 
          />

          {/* Right diagonal branch */}
          <path 
            d="M34 40 L49 68 L36 68 L25 46 Z" 
            fill={iconBaseColor} 
            opacity="0.9"
          />
        </g>

        {/* --- WORDMARK AREA --- */}
        <g transform="translate(68, 0)">
          
          {/* HIRE Tag Pill */}
          <g transform="translate(4, 3)">
            <rect 
              x="0" 
              y="0" 
              width="66" 
              height="20" 
              rx="10" 
              fill={pillBg} 
              stroke={pillBorder} 
              strokeWidth="1" 
            />
            <text 
              x="13" 
              y="14" 
              fill={pillText} 
              fontSize="9.5" 
              fontWeight="900" 
              fontFamily="system-ui, -apple-system, sans-serif" 
              letterSpacing="0.15em"
            >
              HIRE
            </text>
            <circle cx="53" cy="10" r="3.5" fill="#00A3FF" />
          </g>

          {/* Main "YourCoder" Wordmark */}
          <g transform="translate(0, 52)">
            {/* "Your" */}
            <text 
              x="0" 
              y="0" 
              fill={textColorMain} 
              fontSize="38" 
              fontWeight="900" 
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              letterSpacing="-0.035em"
            >
              Your
            </text>

            {/* "Coder" in Electric Blue */}
            <text 
              x="96" 
              y="0" 
              fill="url(#hyc-cyan-grad)" 
              fontSize="38" 
              fontWeight="900" 
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              letterSpacing="-0.035em"
            >
              Coder
            </text>
          </g>

          {/* Subtitle: "Build • Automate • Grow" */}
          {showSubtitle && (
            <g transform="translate(3, 72)">
              <text 
                x="0" 
                y="0" 
                fill={subtitleColor} 
                fontSize="11" 
                fontWeight="600" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                letterSpacing="0.28em"
              >
                Build
              </text>
              <circle cx="58" cy="-3.5" r="2.5" fill="#00A3FF" />
              <text 
                x="72" 
                y="0" 
                fill={subtitleColor} 
                fontSize="11" 
                fontWeight="600" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                letterSpacing="0.28em"
              >
                Automate
              </text>
              <circle cx="168" cy="-3.5" r="2.5" fill="#00A3FF" />
              <text 
                x="182" 
                y="0" 
                fill={subtitleColor} 
                fontSize="11" 
                fontWeight="600" 
                fontFamily="system-ui, -apple-system, sans-serif" 
                letterSpacing="0.28em"
              >
                Grow
              </text>
            </g>
          )}

        </g>
      </svg>
    </div>
  );
};
