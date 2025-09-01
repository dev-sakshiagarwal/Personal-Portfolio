import React from 'react';
import { ArrowLeft, TrendingUp, Users, Clock, Repeat, Network } from 'lucide-react';
import svgPaths from "../imports/svg-s41soacgrx";
import Frame42017 from "../imports/Frame42017-10-177";
import imgImage1 from "figma:asset/e8a5933363c71ff873b81184f3ba0257e20656df.png";
import imgImage2 from "figma:asset/1d12ce3e43bd6138ccc8363cc3356a7232b8c106.png";
import imgImage3 from "figma:asset/51c0066a104bfc8fa8a14275ff86b1dda53f23c6.png";
import imgImage4 from "figma:asset/cdb0b494a731fee342d59e3c047649ffe52affe2.png";
import imgImg from "figma:asset/c16837a798024d9f3745eaf30b0699ebf89ce750.png";
import imgScreenshot20250704At110305Pm1 from "figma:asset/8898452d534719abe94b443919f3c98cd38749a5.png";
import img1ResponsiveDeviceMockup4 from "figma:asset/b0ee33f9b873e8dc28872b1f4d8703fbe6446af4.png";
import imgJobsnew1 from "figma:asset/bbda5f59a1d4179f58d5d1a9d0d151434e30fff0.png";
import imgScreenshot20250704At110900Pm1 from "figma:asset/4df9be7ff505a2883a76d5579d088f63d5b01af8.png";
import imgImg1 from "figma:asset/2e956d737e5c41c7e71782b65a2263b6c43a5e8a.png";
import imgImg2 from "figma:asset/6edca4676d5118253a3d1f8abd6a841803a84dba.png";
import imgImg3 from "figma:asset/4804dd4fced22b8d1ceca8c3d3a46961405e2f97.png";
import imgImg4 from "figma:asset/ee9c68bb00125367839241d04bcb316c37a7aaae.png";
import imgRoadmap from "figma:asset/f485deae82f9e6b90bc043ab6c0b684b4acc6457.png";

interface CaseStudyProps {
  onBack?: () => void;
}

export function CaseStudy({ onBack }: CaseStudyProps) {
  const metrics = [
    {
      icon: Users,
      number: "500+",
      label: "Early Users",
      description: "Onboarded in first 3 months",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: TrendingUp,
      number: "500+",
      label: "Job Applications",
      description: "Processed through platform",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Clock,
      number: "7+",
      label: "Minutes",
      description: "Average session time per day",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Repeat,
      number: "30%",
      label: "User Retention",
      description: "Week-on-week active users",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Network,
      number: "100%",
      label: "Network Success",
      description: "Active creator-agency collaborations",
      color: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Back button */}
      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <button 
            onClick={onBack}
            className="group flex items-center text-gray-600 hover:text-gray-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:text-gray-700 transition-colors duration-300" />
            <span className="group-hover:underline">Back to Portfolio</span>
          </button>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-1 w-16 mb-6 rounded-full animate-pulse"></div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
              Creative Marketplace Platform
            </h1>
          </div>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Gaawk is a multi-purpose creative marketplace empowering freelancers,
              agencies, brands, and artists to showcase, sell, and collaborate
              seamlessly.
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <p className="text-gray-800 mb-4">
                <span className="text-gray-700">Role:</span> Product Manager, Team Lead & Android Developer (Day 1 to Launch)
              </p>
              <a
                href="https://www.gaawk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-300 group"
              >
                <span className="underline">www.gaawk.com</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="text-6xl text-gray-500 mb-4">01</div>
            </div>
            <div className="lg:col-span-4">
              <h2 className="text-4xl text-gray-900 mb-6">The Challenge</h2>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                In today's fragmented digital ecosystem, creatives, freelancers, and small agencies face significant hurdles:
              </p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lack of a unified platform to manage personal brand, freelance gigs, agency collaborations, and services.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Difficulty showcasing multiple talents or personas (e.g., someone might be a developer and also a dancer).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Siloed ecosystems for selling services, applying to jobs, or offering products—requiring users to manage multiple platforms.
                </li>
              </ul>
              
              <p className="text-gray-600 leading-relaxed">
                Our challenge was to create an all-in-one platform that bridges the gap between individuals and agencies, offering tools for:
              </p>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Profile-based visibility (multi-persona or talent profiles)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Job posting and application
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Service/product marketplace
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Freelancer resource management and agency-client collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What We Built Section */}
      <div className="relative z-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-2">
              <div className="text-6xl text-gray-500 mb-4">02</div>
            </div>
            <div className="lg:col-span-4">
              <h2 className="text-4xl text-gray-900 mb-6">What we built</h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-gray-600 leading-relaxed">
                We designed and shipped Gaawk, a next-gen hybrid platform that combines features from social networks, service marketplaces, and freelance job boards, tailored to the creative and independent workforce.
              </p>
            </div>
          </div>

          {/* Key Features - Full Width */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-6 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="text-gray-900 mb-2">Multi-profile Architecture</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Users can create and switch between different profiles (e.g., a singer, a writer, a developer), each with separate bios, portfolios, and visibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="text-gray-900 mb-2">Agency Collaboration Layer</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Agencies can list themselves, discover talent, post jobs, and manage resource availability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="text-gray-900 mb-2">Service & Product Marketplace</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Users can sell services (e.g., photo shoots, makeup sessions), tag relevant products, and manage bookings.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="text-gray-900 mb-2">Freelance Job Platform</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Talent can apply for jobs or gigs (e.g., casting calls, freelance projects).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="text-gray-900 mb-2">Availability Calendar</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">Freelancers can mark availability, enabling agencies to plan resources and assignments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="text-gray-900 mb-2">Social Media Core</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">A feed-driven interface for posting updates, sharing project milestones, and engaging with others.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[467/295.363] mb-6 rounded-lg overflow-hidden">
                <img 
                  src={imgImage1} 
                  alt="Mobile-First MVP Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Mobile-First MVP Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivered Android MVP with an onboarding flow 70% faster than the initial prototype, after prioritizing key features and streamlining user journeys.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[467/295.363] mb-6 rounded-lg overflow-hidden">
                <img 
                  src={imgImage2} 
                  alt="Product Marketing & Web Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Product Marketing & Web Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Defined go-to-market strategy and positioning. Collaborated with design
                to create conversion-focused website that increased app downloads by 45%
                and improved brand perception.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[467/295.363] mb-6 rounded-lg overflow-hidden">
                <img 
                  src={imgImage3} 
                  alt="Product Design System & Standards"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Product Design System & Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                Established product design guidelines and component library. Reduced
                development time by 40% through standardized patterns and improved
                cross-platform consistency.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[467/295.363] mb-6 rounded-lg overflow-hidden">
                <img 
                  src={imgImage4} 
                  alt="Product Operations & Analytics Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Product Operations & Analytics Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                Built comprehensive admin dashboard with key metrics, user management,
                and content moderation. Enabled data-driven product decisions and
                reduced operational overhead by 60%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-2">
              <div className="text-6xl text-gray-500 mb-4">03</div>
            </div>
            <div className="lg:col-span-4">
              <h2 className="text-4xl text-gray-900 mb-6">Product Strategy & Market Analysis</h2>
            </div>
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h3 className="text-xl text-gray-900 mb-4">User Research</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">Conducted qualitative interviews with over 25 freelancers, artists, and small agency owners to identify pain points in existing platforms like LinkedIn, UrbanClap, and Upwork.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">Used surveys to validate demand for multi-profile support and seamless service listing.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 mb-4">Persona Development</h3>
                <p className="text-gray-600 leading-relaxed mb-3">Created personas for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">The Multi-talented Freelancer juggling different careers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">The Agency Resource Manager looking to hire and manage talent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">The Solo Entrepreneur selling services and products</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 mb-4">MVP Prioritization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">Used MoSCoW technique to define MVP scope: Multi-profile creation, job posting, and service listing were marked as Must-Haves.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 leading-relaxed">Post-MVP features included availability calendars and feed-based engagement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Strategy Details - Full Width */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl text-gray-900 mb-4">Product Roadmap</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-2">0–3 months:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Build and release MVP with user onboarding, profiles, services, and jobs.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">3–6 months:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Add social feed, profile switching, agency dashboards.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2">6–12 months:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Iterate on monetization, analytics, and advanced collaboration features.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl text-gray-900 mb-4">Tech Stack & Tools</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Design:</span>
                    <span className="text-gray-600 ml-1">Figma (end-to-end UI/UX design)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Collaboration:</span>
                    <span className="text-gray-600 ml-1">Notion, Slack, Jira</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Development:</span>
                    <span className="text-gray-600 ml-1">Kotlin-based Android app, Firebase backend</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Analytics:</span>
                    <span className="text-gray-600 ml-1">Mixpanel for event tracking, Google Analytics for web modules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 mb-8">
            <h3 className="text-xl text-gray-900 mb-4">Go-to-Market Strategy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">Partnered with local art schools and freelancer networks for beta testing.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">Ran invite-only launch in India and UAE targeting creative freelancers.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">Used Instagram reels and creator testimonials to drive early traction.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl mb-6">Timelines</h3>
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <Frame42017 />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={imgRoadmap} 
                  alt="Platform development roadmap showing Android, Web, and iOS phases with feature modules"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="relative z-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-2">
              <div className="text-6xl text-gray-500 mb-4">04</div>
            </div>
            <div className="lg:col-span-10">
              <h2 className="text-4xl text-gray-900 mb-8">Results & Learning</h2>
              
              {/* Metrics Cards */}
              <div className="mb-12">
                <h3 className="text-2xl text-gray-900 mb-8 text-center">Key Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {metrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4`}>
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl text-gray-900 mb-2">{metric.number}</div>
                      <div className="text-gray-900 mb-1">{metric.label}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 mb-12">
                <h3 className="text-2xl text-gray-900 mb-6 text-center">Key Learnings</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-lg">💡</span>
                    </div>
                    <h4 className="text-lg text-gray-900 mb-3">Onboarding Simplicity</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      User onboarding is critical when the product offers high flexibility (multi-profile, marketplace, jobs)—we simplified flows over iterations.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-lg">🌐</span>
                    </div>
                    <h4 className="text-lg text-gray-900 mb-3">Community Traction</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Niche platforms need strong community traction—engaging early adopters and creators helped sustain network effects.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white text-lg">🔄</span>
                    </div>
                    <h4 className="text-lg text-gray-900 mb-3">Iterative PMF</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Product-market fit is more iterative than planned—frequent feedback loops helped pivot features like profile discovery and agency dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Summary */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4 text-center">Impact Summary</h3>
                <p className="text-gray-700 text-center leading-relaxed mb-4">
                  Leading Gaawk from Day 1 taught me to balance ambitious product visions with technical constraints and real user needs through data-driven decisions.
                </p>
                <p className="text-gray-700 text-center leading-relaxed">
                  Product management isn't just features — it's strategic thinking, stakeholder alignment, and delivering measurable value that creates lasting impact.
                </p>
              </div>
            </div>
          </div>

          {/* My Role as Product Manager - Full Width */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-8 border border-slate-300">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">My Role as Product Manager</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Product Vision & Strategy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Defined the product vision and roadmap based on user feedback and business goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Cross-functional Leadership</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Led cross-functional collaboration between designers, developers, and QA teams.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Agile Process Management</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Conducted weekly product standups, sprint planning, and retrospectives.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">📈</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Data & Analytics</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Set up and interpreted analytics dashboards, ran A/B experiments on onboarding flows.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Technical Collaboration</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Worked hands-on with Android devs (leveraging my past experience) to rapidly prototype and validate features.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 sm:mb-0">
              © 2025 Sakshi Agarwal
            </div>
            <div className="text-sm text-gray-400">
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}