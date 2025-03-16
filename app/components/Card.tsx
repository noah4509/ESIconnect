'use client';

import React from 'react';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <div className={`bg-gray-dark/30 rounded-lg border border-gray-light/10 p-6 backdrop-blur-sm ${className}`}>
      {title && <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card; 