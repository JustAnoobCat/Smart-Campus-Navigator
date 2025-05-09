import React from 'react';
import { Map as MapIcon, Navigation, Clock, Heart, Search, Shield, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';
import { Link } from '../router/Link';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-green-500/5 dark:from-blue-900/20 dark:to-green-800/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Navigate Your Campus With Confidence
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Smart Campus Navigator helps you find the fastest routes between buildings, discover amenities, and never be late to class again.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/navigate">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={<Navigation className="h-5 w-5" />}
                >
                  Start Navigating
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  icon={<Info className="h-5 w-5" />}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 relative max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Campus Navigation App" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow-lg p-4 md:p-6 transform rotate-3">
              <p className="text-sm md:text-base font-medium">
                3x faster than asking for directions!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Smart Campus Navigator?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Designed specifically for campus navigation with features that make getting around easier than ever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock className="h-6 w-6" />}
              title="Save Time"
              description="Find the fastest routes between buildings and never be late to class again."
            />
            <FeatureCard 
              icon={<MapIcon className="h-6 w-6" />}
              title="Interactive Map"
              description="Detailed campus map with building information and points of interest."
            />
            <FeatureCard 
              icon={<Search className="h-6 w-6" />}
              title="Easy Search"
              description="Quickly search for buildings, departments, or facilities by name."
            />
            <FeatureCard 
              icon={<Navigation className="h-6 w-6" />}
              title="Turn-by-Turn Directions"
              description="Get clear, step-by-step directions to your destination."
            />
            <FeatureCard 
              icon={<Heart className="h-6 w-6" />}
              title="Save Favorites"
              description="Save frequently visited locations for quick access."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6" />}
              title="Accessibility Options"
              description="Routes that accommodate various accessibility needs."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Getting around campus has never been easier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Select Your Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Choose your current location or use GPS to automatically detect where you are.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Choose Destination
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Search for your destination or select from nearby buildings and favorites.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Follow Directions
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Get turn-by-turn directions to your destination with estimated arrival time.
              </p>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <Link to="/navigate">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<MapPin className="h-5 w-5" />}
              >
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Students Are Saying
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join thousands of students who are already finding their way around campus with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Testimonial 
              quote="As a freshman, this app saved me from being late to classes multiple times. The campus map is so detailed!"
              name="Emma Johnson"
              role="Freshman, Biology"
            />
            <Testimonial 
              quote="I love the accessibility options. As someone with mobility issues, finding wheelchair-friendly routes is essential."
              name="David Chen"
              role="Junior, Computer Science"
            />
            <Testimonial 
              quote="The indoor navigation for large buildings like the library is a game changer. I can find study rooms so easily now!"
              name="Sarah Miller"
              role="Graduate Student, Education"
            />
          </div>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-blue-700 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Navigate Your Campus with Confidence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are finding their way around campus effortlessly.
            </p>
            <Link to="/navigate">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 focus:ring-white"
                icon={<Navigation className="h-5 w-5" />}
              >
                Start Navigating
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const Info = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default HomePage;