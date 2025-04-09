import React from 'react';
import { MapPin } from 'lucide-react';

function PropertyCard({ 
  image, 
  title, 
  price, 
  location, 
  beds, 
  baths, 
  sqft, 
  agent, 
  agentInitials, 
  agentColor,
  lastUpdate,
  status,
  statusColor
}) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${statusColor}`}>
          {status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-blue-600 text-xl font-bold mb-2">{price}</p>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between mb-4 text-gray-700">
          <div className="text-center">
            <p className="font-medium">{beds}</p>
            <p className="text-sm text-gray-500">Beds</p>
          </div>
          <div className="text-center">
            <p className="font-medium">{baths}</p>
            <p className="text-sm text-gray-500">Baths</p>
          </div>
          <div className="text-center">
            <p className="font-medium">{sqft}</p>
            <p className="text-sm text-gray-500">sqft</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${agentColor} flex items-center justify-center text-white mr-2`}>
              {agentInitials}
            </div>
            <span className="text-sm">{agent}</span>
          </div>
          <span className="text-sm text-gray-500">{lastUpdate}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard; 