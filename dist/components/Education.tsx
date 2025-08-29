import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const education = {
    degree: "Computer Science & Information Technology",
    institution: "M. J. P. Rohilkhand University",
    period: "Aug 2011 - Jun 2015",
    type: "Bachelor's Degree"
  };

  const certifications = [
    {
      title: "Flutter with Firebase for Android & iOS",
      provider: "Udemy",
      date: "May 2020",
      description: "Comprehensive course covering cross-platform mobile development"
    },
    {
      title: "Data Structures and Algorithms: Deep Dive",
      provider: "Udemy", 
      date: "May 2023",
      description: "Advanced algorithmic problem solving and optimization techniques"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-400 h-1 w-12 mb-4"></div>
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 uppercase tracking-wide">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <GraduationCap className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-1">Education</h3>
                <p className="text-gray-500">Academic Background</p>
              </div>
            </div>
            
            <div className="border-l-4 border-gray-400 pl-6 ml-6">
              <div className="mb-4">
                <h4 className="text-xl text-gray-800 mb-2">
                  {education.degree}
                </h4>
                <p className="text-lg text-gray-600 mb-2">
                  {education.institution}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-1">Certifications</h3>
                <p className="text-gray-500">Professional Development</p>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-gray-400 pl-6 ml-6">
                  <h4 className="text-lg text-gray-800 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    {cert.provider}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-xl text-gray-800 mb-2">Hindi</h4>
              <p className="text-gray-600">Native or Bilingual Proficiency</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl text-gray-800 mb-2">English</h4>
              <p className="text-gray-600">Full Professional Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}