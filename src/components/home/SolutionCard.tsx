import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function SolutionCard({ icon: Icon, title, description, features }: SolutionCardProps) {
  return (
    <div className="bg-dark border border-primary/10 rounded-xl p-8 hover:border-primary/30 transition-colors duration-300">
      <Icon className="h-12 w-12 text-accent mb-4" />
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}