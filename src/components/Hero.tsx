import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Code, Lightbulb, Zap, Star } from 'lucide-react';
import profileImage from 'figma:asset/3e9adf2da7b31a102fd1f11b9d9f9513bdbe6bf2.png';

interface HeroProps {
  onViewCaseStudy?: () => void;
}

export function Hero({ onViewCaseStudy }: HeroProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    "Product Manager",
    "Technical Product Lead", 
    "Android Developer",
    "Innovation Catalyst"
  ];

  const floatingElements = [
    { icon: Code, delay: 0, position: "top-20 left-10" },
    { icon: Lightbulb, delay: 2, position: "top-40 right-20" },
    { icon: Zap, delay: 4, position: "bottom-40 left-20" },
    { icon: Star, delay: 6, position: "bottom-20 right-10" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-white px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Icons */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} opacity-20 animate-float`}
            style={{
              animationDelay: `${element.delay}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          >
            <element.icon className="w-8 h-8 text-gray-400" />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl relative group">
            <img 
              src={profileImage} 
              alt="Sakshi Agarwal"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl mb-6 text-gray-900 font-bold bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent animate-pulse hero-title">
              Sakshi Agarwal
            </h1>
            
            <div className="h-12 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-gray-600 transition-all duration-500 transform">
                <span className="inline-block animate-fadeInUp">
                  {roles[currentRole]}
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-500 mb-4 animate-slideInUp">
              Bridging Technology and Business Strategy
            </p>
            
            <div className="flex items-center justify-center text-gray-500 mb-8 animate-slideInUp">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" />
              <span>Dubai, UAE</span>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-1 w-16 mb-4 rounded-full animate-pulse"></div>
          </div>
          <h3 className="text-3xl mb-6 text-gray-800 uppercase tracking-wide animate-slideInUp">
            Crafting Unforgettable Stories
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed animate-slideInUp">
              Results-driven Product Manager with <span className="text-gray-700 font-semibold">10+ years</span> of experience in Android App Development and <span className="text-gray-700 font-semibold">4+ years</span> in Product Leadership roles. 
              Proven track record of delivering high-impact solutions across <span className="text-gray-700 font-semibold">social media</span>, <span className="text-gray-700 font-semibold">e-commerce</span>, and <span className="text-gray-700 font-semibold">fintech</span> domains.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
          <button 
            onClick={onViewCaseStudy}
            className="group px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-slideInUp"
          >
            <span className="flex items-center">
              View Case Study
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          <button 
            onClick={scrollToAbout}
            className="group px-10 py-4 border-2 border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 animate-slideInUp"
          >
            <span className="flex items-center">
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>

        <button 
          onClick={scrollToAbout}
          className="group animate-bounce bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
        >
          <ChevronDown className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      </div>
    </section>
  );
}