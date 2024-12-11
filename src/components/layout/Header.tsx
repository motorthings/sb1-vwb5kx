import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/90 backdrop-blur-sm border-b border-primary/10 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-white">Waifinder</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#solutions">Solutions</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white transition">Sign in</button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}