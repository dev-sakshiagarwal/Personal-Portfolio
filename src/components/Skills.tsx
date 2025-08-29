import React from 'react';
import { Code, Users, Cog, Database, Smartphone, Cloud } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Product Management",
      icon: <Users className="w-6 h-6" />,
      skills: [
        "Product Strategy",
        "UI/UX Understanding", 
        "Agile Methodology",
        "Business Development",
        "Team Building & Leading",
        "Project Management",
        "Data-Driven Decision Making"
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Java",
        "Kotlin", 
        "JavaScript",
        "SQL"
      ]
    },
    {
      title: "Architecture & Patterns",
      icon: <Cog className="w-6 h-6" />,
      skills: [
        "MVVM",
        "MVP", 
        "MVC",
        "Technical Architecture",
        "Design Patterns",
        "Restful APIs",
      ]
    },
    {
      title: "Android Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        "JetPack Libraries",
        "Navigation Component",
        "Hilt/Dagger",
        "Room Database",
        "Coroutines",
        "Material Design",
        "CameraX",
        "NFC/Bluetooth"
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "Room",
        "SQLite",
        "Firebase Realtime Database",
        "Retrofit",
        "Moshi",
        "Ktor",
        "WebSocket"
      ]
    },
    {
      title: "Cloud & DevOps", 
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        "Firebase",
        "Cloud Messaging",
        "Crashlytics",
        "CI/CD Jenkins",
        "Git",
        "Google Maps API",
        "Payment Gateways"
      ]
    }
  ];

  const softSkills = [
    "Leadership & Mentoring",
    "Cross-functional Collaboration", 
    "Strategic Thinking",
    "Problem Solving",
    "Communication",
    "Adaptability"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-400 h-1 w-12 mb-4"></div>
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 uppercase tracking-wide">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-gray-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:border-gray-400 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}