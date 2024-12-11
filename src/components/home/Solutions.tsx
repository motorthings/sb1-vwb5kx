import React from 'react';
import { Users, BookOpen, UserCheck } from 'lucide-react';
import { SolutionCard } from './SolutionCard';

export function Solutions() {
  const solutions = [
    {
      icon: Users,
      title: "For Employees",
      description: "Personalized learning and coaching directly in your workflow, aligned with your career goals.",
      features: [
        "Adaptive skill development",
        "Real-time feedback",
        "Personalized learning paths",
        "Progress tracking"
      ]
    },
    {
      icon: BookOpen,
      title: "For HR & L&D Teams",
      description: "Scalable, personalized training that aligns with business objectives and delivers measurable results.",
      features: [
        "Comprehensive analytics",
        "Content management",
        "Learning automation",
        "ROI tracking"
      ]
    },
    {
      icon: UserCheck,
      title: "For Mentors/Coaches",
      description: "AI-driven tools to scale your impact and support peer learning across the organization.",
      features: [
        "Mentorship matching",
        "Session management",
        "Progress monitoring",
        "Resource sharing"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Solutions for Every User
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tailored experiences to meet the needs of everyone in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}