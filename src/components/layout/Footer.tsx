import React from 'react';
import { GraduationCap, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">LearnPro</span>
            </div>
            <p className="text-sm">
              Empowering professionals with expert-led learning and career advancement opportunities.
            </p>
          </div>
          
          {[
            {
              title: "Platform",
              links: ["Courses", "Assessments", "Certifications", "Enterprise"]
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press"]
            },
            {
              title: "Resources",
              links: ["Help Center", "Terms of Service", "Privacy Policy", "Contact"]
            }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 LearnPro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
            <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
            <Github className="h-5 w-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}