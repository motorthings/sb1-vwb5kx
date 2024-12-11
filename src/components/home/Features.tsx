import React from 'react';
import { Brain, Target, Users, BarChart3, Sparkles, Workflow } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Learning Paths",
      description: "Adaptive training that evolves with each employee's role and skill needs"
    },
    {
      icon: Target,
      title: "Real-Time Coaching",
      description: "Instant feedback and mentorship to build a culture of growth"
    },
    {
      icon: Workflow,
      title: "Embedded Learning",
      description: "Seamlessly integrate learning into daily tasks and workflows"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track outcomes and engagement tied to business objectives"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect peers with shared interests to enhance collaboration"
    },
    {
      icon: Sparkles,
      title: "Agentic AI-Driven Mentorship",
      description: "Scale personal coaching with intelligent matching and feedback"
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your organization with powerful tools designed to enhance learning and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}