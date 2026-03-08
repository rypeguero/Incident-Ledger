import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconClipboard(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5.25h6m-6 0a2.25 2.25 0 00-2.25 2.25v12A2.25 2.25 0 009 22.5h6A2.25 2.25 0 0017.25 19.5v-12A2.25 2.25 0 0015 5.25m-6 0A2.25 2.25 0 0111.25 3h1.5A2.25 2.25 0 0115 5.25"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 11.25h4.5M9.75 14.25h4.5M9.75 17.25h3" />
    </BaseIcon>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.2 16.2L21 21" />
    </BaseIcon>
  );
}

export function IconChartBars(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 20v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-11" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 20v-4" />
    </BaseIcon>
  );
}

export function IconDocumentText(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.5h7l3 3V20.5a2 2 0 01-2 2H7a2 2 0 01-2-2V5.5a2 2 0 012-2z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3.5V7h3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 11h7M8.5 14h7M8.5 17h5" />
    </BaseIcon>
  );
}

export function IconTag(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 12.5l9 9a2 2 0 002.8 0l6.2-6.2a2 2 0 000-2.8l-9-9H7.5a4 4 0 00-4 4v5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.75 7.75h.01" />
    </BaseIcon>
  );
}

export function IconLock(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 11V8.5a4.5 4.5 0 019 0V11" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 11h11a2 2 0 012 2v6a2 2 0 01-2 2h-11a2 2 0 01-2-2v-6a2 2 0 012-2z"
      />
    </BaseIcon>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17a5 5 0 100-10 5 5 0 000 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
    </BaseIcon>
  );
}

export function IconCode(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-6-6 6-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l6 6-6 6" />
    </BaseIcon>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 21v-4a2 2 0 012-2 2 2 0 012 2v4" />
    </BaseIcon>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 6.5a4.5 4.5 0 01-6.2 4.2L4 15v5h5l4.3-4.3a4.5 4.5 0 006.2-6.2l-3 3-2-2 3-3z"
      />
    </BaseIcon>
  );
}

export function IconHeartPulse(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-4.35-9.2-9.1C1.5 8.7 3.3 6 6.2 6c1.7 0 3.2.9 3.8 2.3C10.6 6.9 12.1 6 13.8 6c2.9 0 4.7 2.7 3.4 5.9C19 16.65 12 21 12 21z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h2l1-2.5 2 6 1.2-3H13l.8-1.5 1.2 3h2.5" />
    </BaseIcon>
  );
}

export function IconBook(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5A2.5 2.5 0 017 3h12.5v17.5H7A2.5 2.5 0 004.5 23V5.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v17.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 7h6M10 10h6" />
    </BaseIcon>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </BaseIcon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5h16v11H4v-11z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
    </BaseIcon>
  );
}

export function IconLink(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 13a5 5 0 017.07 0l1.41 1.41a5 5 0 010 7.07 5 5 0 01-7.07 0L10 20"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 11a5 5 0 00-7.07 0L5.52 12.41a5 5 0 000 7.07 5 5 0 007.07 0L14 18"
      />
    </BaseIcon>
  );
}

export function IconBrandApple(props: IconProps) {
  return (
    <BaseIcon {...props}>
      {/*
        A simple, non-trademarked “apple-like” outline icon.
        We use stroke-only paths to match the rest of this icon set.
      */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7c-2.8-2-6.2-.3-6.6 2.7-.5 3.3 1.6 8.3 6.6 8.3s7.1-5 6.6-8.3C18.2 6.7 14.8 5 12 7z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.3 4.2c.7-1.1 2-1.8 3.2-2-.1 1.3-.8 2.6-2 3.4"
      />
    </BaseIcon>
  );
}

export function IconBrandGoogle(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.5 12.2c0-.6-.05-1.05-.16-1.52H12v3.01h4.87a4.2 4.2 0 01-1.82 2.76 5.76 5.76 0 01-3.05.8 5.9 5.9 0 01-5.58-4.06A6.2 6.2 0 016.1 12c0-.42.06-.82.17-1.19A5.9 5.9 0 0112 6.75c1.57 0 2.97.56 4.08 1.65l2.25-2.2A8.68 8.68 0 0012 3.5C8.43 3.5 5.37 5.58 3.9 8.6A9.25 9.25 0 003 12c0 1.23.28 2.4.9 3.4 1.47 3.02 4.53 5.1 8.1 5.1 2.45 0 4.5-.82 6-2.24 1.76-1.64 2.5-4.07 2.5-5.96z"
      />
    </BaseIcon>
  );
}
