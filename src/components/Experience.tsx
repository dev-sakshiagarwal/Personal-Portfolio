import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import evolutionServicesLogo from 'figma:asset/74533c89aed053fd71af0a26528824cef03884c0.png';
import futureGroupLogo from 'figma:asset/d6b415eab353799d5d82f9d6afed7b8df103748a.png';
import cybrillaLogo from 'figma:asset/5b8940d2b8b40e8ed64fe6106326c393304c60d4.png';

export function Experience() {
  const experiences = [
    {
      company: "Evolution Services",
      location: "Dubai, UAE",
      positions: [
        {
          title: "Product Manager & Team Lead",
          period: "Aug 2021 - Present",
          achievements: [
            "Leading product strategy and development for Resource Management Solutions while managing technical execution",
            "Defining and executing product roadmap ensuring alignment with business goals and user needs",
            "Conducting market research and competitive analysis to identify opportunities and drive product innovation",
            "Collaborating with company owner to translate business requirements into technical specifications",
            "Driving go-to-market strategies and product launches, resulting in improved user engagement metrics",
            "Overseeing project timelines, ensuring milestones are met on time and within budget",
            "Mentoring other developers and conducted code reviews to maintain high code quality and performance standards"
          ]
        },
        {
          title: "Lead Android Developer", 
          period: "Jul 2020 - Present",
          achievements: [
            "Architecting and developing robust Android Applications with focus on scalability and user experience",
            "Built scalable app architecture using modern Android development practices (Jetpack, MVVM, Room, Navigation)",
            "Implemented real-time features including chat modules, video streaming, and push notifications",
            "Handled Image Cropping, Video Streaming through ExoPlayer and pdf rendering",
            "Libraries Used: Lifecycle, Hilt, Room, Retrofit, Moshi, Glide, Navigation Component, Coroutines, Firebase for Analytics, Crashlytics & Cloud Messaging, Google maps & places libraries"
          ]
        }
      ],
      logo: evolutionServicesLogo
    },
    {
      company: "Future Group",
      location: "Bangalore, India", 
      positions: [
        {
          title: "Sr. Android Developer",
          period: "Jul 2017 - Dec 2019",
          achievements: [
            "Developed e-commerce applications for Big Bazaar and Easy Day platforms",
            "Took initiative and migrated the whole app from Java to Kotlin",
            "Migrated from SQL to RoomDB for better performance and maintainability",
            "Updated modules from MVP to MVVM architecture pattern",
            "Changed whole app's navigation system to Navigation Component for dynamic links",
            "Actively participated in Sprint planning and delivered modules on time while reviewing peer's code",
            "Libraries Used: Dagger, Room, Retrofit, Moshi, Glide, Navigation Component, Firebase, Google maps, Epoxy"
          ]
        }
      ],
      logo: futureGroupLogo
    },
    {
      company: "Cybrilla Technologies",
      location: "Bangalore, India",
      positions: [
        {
          title: "Android Developer", 
          period: "Jul 2015 - Jun 2017",
          achievements: [
            "Responsible for development and maintenance of Android applications",
            "Integrated various UI libraries and customized them as per requirements to create beautiful charts and graphs",
            "Used Java and MVC as app architecture",
            "Worked on Rich Media Notification, Kotlin, MVP architectural pattern, Rx, Retrofit", 
            "Built fintech wealth management app in record time with team of 2 developers"
          ]
        }
      ],
      logo: cybrillaLogo
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-400 h-1 w-12 mb-4"></div>
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 uppercase tracking-wide">
            Work Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, expIndex) => (
            <div key={expIndex} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                {experience.logo && (
                  <div className="w-16 h-16 rounded-lg bg-white shadow-md flex items-center justify-center mr-6 flex-shrink-0">
                    <img 
                      src={experience.logo} 
                      alt={experience.company}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">
                    {experience.company === "Evolution Services" ? (
                      <a 
                        href="https://www.evolutionservices.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                      >
                        {experience.company}
                      </a>
                    ) : experience.company === "Future Group" ? (
                      <span>
                        <a 
                          href="https://www.ril.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                        >
                          {experience.company}
                        </a>
                        <span className="text-gray-600 text-lg"> (now acquired by Reliance Industries)</span>
                      </span>
                    ) : experience.company === "Cybrilla Technologies" ? (
                      <a 
                        href="https://cybrilla.com/about" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {experience.positions.map((position, posIndex) => (
                <div key={posIndex} className={`${posIndex > 0 ? 'mt-8 pt-8 border-t border-gray-200' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl text-gray-800 mb-2 md:mb-0">
                      {position.title}
                    </h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{position.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {position.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-600">
                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}