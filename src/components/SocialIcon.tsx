export default function SocialIcon({ kind, className = "h-5 w-5" }: { kind: 'facebook' | 'twitter' | 'linkedin' | 'instagram', className?: string }) {
  const commonProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
  };

  switch (kind) {
    case 'facebook':
      return (
        <svg {...commonProps}>
          <path d="M13.5 22v-8.5h2.8l.4-3.3h-3.2V3.9c0-.95.27-1.6 1.64-1.6H17V.1C16.4.1 15.2 0 13.8 0 11.2 0 9.4 1.8 9.4 5.2v2.9H6.6v3.3h2.8V22h4.1Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...commonProps}>
          <path d="M22 5.1c-.8.4-1.7.6-2.6.8a4.3 4.3 0 0 0 1.9-2.4 8.6 8.6 0 0 1-2.7 1.1 4.2 4.2 0 0 0-7.2 3.8A12.1 12.1 0 0 1 3.3 4.2a4.3 4.3 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.9a12 12 0 0 0 6.5 1.9c7.8 0 12.1-6.5 12.1-12.1v-.6A8.7 8.7 0 0 0 22 5.1Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...commonProps}>
          <path d="M6.45 8.75a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm-1.25 1.4h2.5V19h-2.5V10.15Zm4.05 0h2.4v1.22h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.66 3 3.82V19h-2.5v-8.48c0-2.02-.04-4.61-2.8-4.61-2.82 0-3.25 2.2-3.25 4.47V19h-2.5V10.15Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.2-3.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
        </svg>
      );
    default:
      return null;
  }
}
