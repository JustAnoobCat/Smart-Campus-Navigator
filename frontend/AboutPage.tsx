import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Map, Users, Code, Lightbulb, BookOpen, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow mt-16 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Smart Campus Navigator</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Revolutionizing the way students, faculty, and visitors navigate university campuses.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Smart Campus Navigator was born from a simple observation: navigating large university campuses can be challenging, especially for new students and visitors.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Founded in 2023 by a team of university students and faculty, our mission is to make campus navigation intuitive, accessible, and stress-free for everyone.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We combine detailed mapping technology with user-friendly design to help you find the fastest routes between buildings, discover amenities, and never be late to class again.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="University campus" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="bg-blue-700 dark:bg-blue-800 text-white rounded-lg shadow-md p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl mb-0">
                To create the most intuitive and accessible campus navigation experience, empowering every student and visitor to explore campus with confidence.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Users className="h-8 w-8 text-blue-700 dark:text-blue-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe navigation should be accessible to everyone, regardless of physical ability or technical expertise.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Lightbulb className="h-8 w-8 text-blue-700 dark:text-blue-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We constantly push the boundaries of what's possible in campus navigation technology.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <CheckCircle className="h-8 w-8 text-blue-700 dark:text-blue-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Reliability</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're committed to providing accurate, up-to-date navigation information you can trust.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Team */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Alex Johnson', role: 'Founder & CEO', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                { name: 'Maya Rodriguez', role: 'Lead Developer', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                { name: 'David Chen', role: 'UX Designer', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                { name: 'Sarah Williams', role: 'Data Scientist', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
              ].map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technology */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code className="h-6 w-6 mr-2 text-blue-700 dark:text-blue-400" />
                  Our Technology
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Smart Campus Navigator uses cutting-edge mapping technology combined with custom algorithms designed specifically for campus environments.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our platform features:
                </p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Real-time location tracking</li>
                  <li>Indoor navigation for large buildings</li>
                  <li>Accessibility-focused routing options</li>
                  <li>Integration with campus events and schedules</li>
                  <li>Energy-efficient pathfinding algorithms</li>
                </ul>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Map className="h-48 w-48 text-blue-700 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Partner With Us */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <BookOpen className="h-6 w-6 mr-2 text-blue-700 dark:text-blue-400" />
                Partner With Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We're always looking to partner with universities and educational institutions to bring Smart Campus Navigator to more campuses.
              </p>
              <div className="inline-block bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                Contact Us About Partnerships
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;