'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default Loader; 