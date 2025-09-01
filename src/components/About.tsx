import React from 'react';
import { Users, Target, Code, TrendingUp } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Led cross-functional teams of developers, designers, and QA, while acting as a strategic bridge between execution teams and management."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Product Strategy",
      description: "Driving product roadmap execution and business alignment"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise", 
      description: "10+ years in Android development with modern practices"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Impact",
      description: "Delivering high-impact solutions across multiple domains"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-400 h-1 w-12 mb-4"></div>
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 uppercase tracking-wide">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging the gap between technical excellence and business objectives. 
            I specialize in transforming complex technical concepts into strategic business solutions 
            that drive growth and user engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="flex justify-center text-gray-600 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}