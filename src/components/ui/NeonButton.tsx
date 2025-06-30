// components/ui/NeonButton.tsx
'use client';

import { ButtonHTMLAttributes } from 'react';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const NeonButton = ({ label, ...props }: NeonButtonProps) => {
  return (
    <button
      {...props}
      className="px-6 py-2 text-gray-400 font-semibold bg-white/5 rounded-full hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.5)] transition-all duration-300"
    >
      {label}
    </button>
  );
};
