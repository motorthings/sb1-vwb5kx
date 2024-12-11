import React from 'react';
import { Brain, ArrowRight, Users, Target } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-32 pb-20 bg-hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Reimagining Professional Development
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your organization with AI-powered learning that adapts to each employee's needs. 
            Build a true learning culture with personalized coaching and real-time feedback.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-primary/20 text-white hover:bg-primary/10 px-8 py-3 rounded-lg transition">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard
            icon={Brain}
            title="AI-Powered"
            description="Adaptive learning paths tailored to each individual"
          />
          <StatsCard
            icon={Users}
            title="Community-Driven"
            description="Foster collaboration and peer learning across teams"
          />
          <StatsCard
            icon={Target}
            title="Goal-Oriented"
            description="Align learning with organizational objectives"
          />
        </div>
      </div>
    </div>
  );
}

function StatsCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-dark/50 border border-primary/10 p-6 rounded-xl backdrop-blur-sm">
      <Icon className="h-12 w-12 text-accent mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}