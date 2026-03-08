'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Don't show on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <>
      {/* Background for header */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-slate-950 z-20 pointer-events-none"></div>
      
      <div className="fixed -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <Image
          src="/Images/headerlogo.png"
          alt="Incident Ledger header logo"
          width={200}
          height={50}
          className="w-auto"
          style={{
            height: '200px',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))',
          }}
        />
      </div>
      
      {/* Divider line */}
      <div className="fixed top-24 left-0 right-0 z-20 pointer-events-none">
        <div className="h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" 
             style={{
               boxShadow: '0 0 8px rgba(148, 163, 184, 0.3)',
             }}
        />
      </div>

      {/* Spacer to push content down */}
      <div className="h-24"></div>
    </>
  );
}