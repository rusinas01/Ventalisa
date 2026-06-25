import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const SnowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17" />
    <path d="M12 6l-2.2-2.2M12 6l2.2-2.2M12 18l-2.2 2.2M12 18l2.2 2.2" />
    <path d="M6.5 9.4 3.7 8.6M6.5 9.4 5.7 6.6M17.5 14.6l2.8.8M17.5 14.6l.8 2.8" />
    <path d="M17.5 9.4l.8-2.8M17.5 9.4l2.8-.8M6.5 14.6l-2.8.8M6.5 14.6l-.8 2.8" />
  </svg>
)

export const FlameIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3c.7 2.6-1.2 4-2.6 5.6C7.7 10.4 7 12 7 13.8 7 17.2 9.7 20 13 20s5.4-2.6 5.4-6c0-2.4-1.3-4.2-2.6-5.8-.5 1-1.4 1.6-2.3 1.2C14.6 8.2 14 6 12 3Z" />
  </svg>
)

export const WindIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 8h9a2.5 2.5 0 1 0-2.5-2.5M3 16h13a2.5 2.5 0 1 1-2.5 2.5M3 12h16a2.5 2.5 0 1 0-2.5-2.5" />
  </svg>
)

export const GaugeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 18a8 8 0 1 1 16 0" />
    <path d="M12 18l4-5" />
    <circle cx="12" cy="18" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const BoltIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
)

export const WrenchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.4-.2-.2-2.4 2.6-2.6Z" />
  </svg>
)

export const DropletIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3c3 4 6 6.7 6 10a6 6 0 1 1-12 0c0-3.3 3-6 6-10Z" />
  </svg>
)

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ChevronRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
)

export const StarIcon = (p: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...p })}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21c5-5 7-8 7-11a7 7 0 1 0-14 0c0 3 2 6 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p}>
    <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.8c0-.5.4-.8.8-.8Z" />
  </svg>
)

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const SettingsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" />
  </svg>
)

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
  </svg>
)

export const HandshakeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
    <path d="m13.5 16.5 2 2a1.4 1.4 0 0 0 2-2l-3.3-3.3" />
    <path d="M3 9l3-3 5 5a1.4 1.4 0 0 1-2 2L7 11" />
    <path d="M21 9l-3-3-4.5 4.5" />
    <path d="M3 9v5l2 2M21 9v5l-2 2" />
  </svg>
)

export const HeadsetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.4" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.4" />
    <path d="M20 19v.5a3 3 0 0 1-3 3h-3" />
  </svg>
)

export const RefreshIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4" />
    <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
  </svg>
)

export const SirenIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 18a5 5 0 0 1 10 0v1H7v-1Z" />
    <path d="M5 22h14M12 5V3M18.5 7.5 20 6M5.5 7.5 4 6" />
    <path d="M12 5a4 4 0 0 0-4 4" />
  </svg>
)

export const DollarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7.5 9.5c0-1.4 1.6-2.5 4.5-2.5s4.5 1 4.5 2.3c0 1.5-1.6 2.2-4.5 2.7s-4.5 1.2-4.5 2.7c0 1.3 1.6 2.3 4.5 2.3s4.5-1.1 4.5-2.5" />
    <path d="M12 5v2M12 17v2" />
  </svg>
)

export const AwardIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9" r="5" />
    <path d="m8.5 13-1.5 7 5-3 5 3-1.5-7" />
    <path d="m12 7 .9 1.7 1.9.3-1.4 1.3.3 1.9L12 11.6l-1.7.9.3-1.9L9.2 9.3l1.9-.3L12 7Z" />
  </svg>
)

export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
  </svg>
)

export const GoogleG = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={18} height={18} {...p}>
    <path
      fill="#4285F4"
      d="M22.5 12.2c0-.7-.06-1.4-.18-2.06H12v3.9h5.9a5.05 5.05 0 0 1-2.19 3.31v2.74h3.54c2.07-1.91 3.25-4.72 3.25-7.89Z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.95 0 5.43-.98 7.24-2.65l-3.54-2.74c-.98.66-2.24 1.05-3.7 1.05-2.85 0-5.26-1.92-6.12-4.5H2.23v2.82A11 11 0 0 0 12 23Z"
    />
    <path
      fill="#FBBC05"
      d="M5.88 14.16a6.6 6.6 0 0 1 0-4.32V7.02H2.23a11 11 0 0 0 0 9.96l3.65-2.82Z"
    />
    <path
      fill="#EA4335"
      d="M12 5.34c1.6 0 3.04.55 4.18 1.63l3.13-3.13A11 11 0 0 0 12 1 11 11 0 0 0 2.23 7.02l3.65 2.82C6.74 7.26 9.15 5.34 12 5.34Z"
    />
  </svg>
)

export const LeafIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20C3 13 7 5 20 4c1 11-5 16-12 15.5" />
    <path d="M4 20c4-6 8-8 12-9" />
  </svg>
)
