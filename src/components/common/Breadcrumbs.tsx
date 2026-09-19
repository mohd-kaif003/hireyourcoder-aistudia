import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  onNavigate,
  className = '' 
}) => {
  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={`flex items-center flex-wrap gap-1.5 text-xs text-slate-500 py-2.5 ${className}`}
    >
      <button
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-600 font-medium transition-colors cursor-pointer"
        aria-label="Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden xs:inline">Home</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(item.path!)}
                className="hover:text-blue-600 font-medium transition-colors truncate max-w-[150px] sm:max-w-none cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
