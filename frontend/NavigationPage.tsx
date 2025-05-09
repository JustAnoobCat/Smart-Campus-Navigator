import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import LocationSelector from '../components/LocationSelector';
import DirectionsPanel from '../components/DirectionsPanel';
import { Search, MapPin, Info } from 'lucide-react';

interface LocationState {
  start: string;
  destination: string;
}

const NavigationPage: React.FC = () => {
  const [selectedLocations, setSelectedLocations] = useState<LocationState | null>(null);
  const [showDirections, setShowDirections] = useState(false);

  const handleLocationSelect = (locations: LocationState) => {
    setSelectedLocations(locations);
    setShowDirections(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow mt-16 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar with location search and directions */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Search className="h-6 w-6 mr-2 text-blue-700 dark:text-blue-400" />
                  Campus Navigation
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Select your starting point and destination to get directions around campus.
                </p>
                
                <LocationSelector onLocationSelect={handleLocationSelect} />
              </div>
              
              {showDirections && selectedLocations && (
                <DirectionsPanel
                  startLocation={selectedLocations.start}
                  destinationLocation={selectedLocations.destination}
                />
              )}
            </div>
            
            {/* Main map area */}
            <div className="lg:w-2/3">
              <Map 
                selectedLocations={selectedLocations || undefined}
                showRoute={showDirections}
                className="h-[500px] md:h-[600px] lg:h-[700px]"
              />
              
              {/* Legend */}
              <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <div className="flex items-start space-x-2">
                  <Info className="h-5 w-5 text-blue-700 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Map Legend</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm mr-2"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Academic Buildings</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-600 rounded-sm mr-2"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Administration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-600 rounded-sm mr-2"></div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">Student Services</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-purple-600 rounded-sm mr-2"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Residence Halls</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Popular Destinations */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400" />
              Popular Destinations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Library', 'Student Center', 'Science Building', 'Cafeteria', 'Gym', 'Auditorium'].map((place) => (
                <button
                  key={place}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                  onClick={() => {
                    setSelectedLocations({
                      start: 'Main Entrance',
                      destination: place
                    });
                    setShowDirections(true);
                  }}
                >
                  <span className="block text-gray-900 dark:text-white font-medium">{place}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NavigationPage;