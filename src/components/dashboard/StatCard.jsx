import React from 'react';

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className="p-2">
        {icon}
      </div>
    </div>
  );
}

export default StatCard; 