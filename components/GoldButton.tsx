import React from 'react';
import { LINKS } from '../constants';
import { ChevronRight } from 'lucide-react';

interface GoldButtonProps {
  text: string;
  className?: string;
  fullWidth?: boolean;
}

const GoldButton: React.FC<GoldButtonProps> = ({ text, className = "", fullWidth = false }) => {
  return (
    <a 
      href={LINKS.GUMROAD}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden inline-flex items-center justify-center
        px-8 py-4 font-bold text-black uppercase tracking-widest transition-all duration-300
        gold-gradient hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] rounded-sm
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
      {/* Shine effect overlay */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 w-full h-full" />
    </a>
  );
};

export default GoldButton;