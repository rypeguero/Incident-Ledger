'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/Admin' },
  { label: 'Incidents', href: '/Incidents' },
  { label: 'Features', href: '/Features' },
  { label: 'Contact', href: '/Contact' },
];

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside the menu.
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close with Escape key.
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="fixed top-6 left-6 z-50" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded transition outline-none focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`relative flex flex-col justify-center ${
            isOpen ? 'gap-0' : 'gap-1.5'
          }`}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[1px] absolute' : ''}`}
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' }}
          />

          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' }}
          />

          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[1px] absolute' : ''}`}
            style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))' }}
          />
        </span>

        <span className="text-sm font-semibold text-slate-200">Menu</span>
      </button>

      {isOpen && (
        <>
          <div className="absolute left-0 mt-4 w-56 bg-slate-900/95 border border-slate-700 rounded-lg shadow-xl backdrop-blur-sm z-50">
            <nav className="flex w-full flex-col items-stretch p-4 space-y-2">
              {links.map((link) => {
                const isActive =
                  link.href !== '#' &&
                  (link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex w-full items-center justify-start rounded-md px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-800 text-white border border-slate-700'
                        : 'text-slate-200 border border-transparent hover:bg-slate-800 hover:text-slate-100 hover:border-slate-600/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Overlay to dim and catch outside clicks */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
}
