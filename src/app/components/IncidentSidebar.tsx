'use client';

import { IconBook, IconBuilding, IconCode, IconHeartPulse, IconWrench } from './Icons';

const categories = [
  { id: 'software', name: 'Software Development', Icon: IconCode },
  { id: 'building', name: 'Building Management', Icon: IconBuilding },
  { id: 'custodial', name: 'Custodial', Icon: IconWrench },
  { id: 'healthcare', name: 'Healthcare', Icon: IconHeartPulse },
];

export default function IncidentSidebar({ onSelectCategory, selectedCategory }: { 
  onSelectCategory: (id: string) => void;
  selectedCategory: string;
}) {
  return (
    <aside className="fixed left-0 top-24 w-64 bg-slate-900/50 border-r border-slate-700 p-5 sm:p-6 h-[calc(100vh-6rem)] overflow-y-auto">
      <h3 className="text-xs font-semibold text-slate-400 mb-5">WORK TYPES</h3>
      <div className="space-y-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`w-full text-left px-3 py-2.5 rounded-lg transition text-sm whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-indigo-600/20 border border-indigo-500/50 text-indigo-300'
                : 'hover:bg-slate-800 text-slate-300 border border-transparent'
            }`}
          >
            <cat.Icon className="mr-2 inline-block h-4 w-4 text-indigo-200/90" />
            {cat.name}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 my-6"></div>

      {/* Concepts Section */}
      <h3 className="text-xs font-semibold text-slate-400 mb-3">REFERENCE</h3>
      <button
        onClick={() => onSelectCategory('concepts')}
        className={`w-full text-left px-3 py-2.5 rounded-lg transition text-sm whitespace-nowrap ${
          selectedCategory === 'concepts'
            ? 'bg-indigo-600/20 border border-indigo-500/50 text-indigo-300'
            : 'hover:bg-slate-800 text-slate-300 border border-transparent'
        }`}
      >
        <IconBook className="mr-2 inline-block h-4 w-4 text-indigo-200/90" />
        Concepts & Examples
      </button>
    </aside>
  );
}