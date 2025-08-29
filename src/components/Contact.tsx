import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "devsakshiagarwal@gmail.com",
      href: "mailto:devsakshiagarwal@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone", 
      value: "+971 50 485 2172",
      href: "tel:+971504852172"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dubai, UAE",
      href: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/devsakshiagarwal",
      href: "https://linkedin.com/in/devsakshiagarwal"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="text-white">
                  {contact.icon}
                </div>
              </div>
              <h3 className="text-lg mb-2">
                {contact.label}
              </h3>
              {contact.href ? (
                <a 
                  href={contact.href}
                  className="text-gray-300 hover:text-gray-100 transition-colors duration-200 text-sm"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-300 text-sm">
                  {contact.value}
                </p>
              )}
            </div>
          ))}
        </div>



        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sakshi Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}