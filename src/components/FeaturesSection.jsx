import { CheckCircle, BarChart2, Users, ClipboardList } from 'lucide-react';

const FeatureCard = ({ icon, title, description, features }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl inline-block mb-6 relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 relative z-10">{title}</h3>
      <p className="text-gray-600 mb-6 relative z-10">
        {description}
      </p>
      <ul className="space-y-3 relative z-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <CheckCircle size={20} className="text-blue-600 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <ClipboardList size={24} />,
      title: "Property Portfolio",
      description: "Manage your entire property portfolio with detailed insights, documentation, and analytics.",
      features: [
        "Digital property documentation",
        "Automated listing management",
        "Real-time market analysis"
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Team Collaboration",
      description: "Empower your team with powerful collaboration and communication tools.",
      features: [
        "Task assignment & tracking",
        "Team performance metrics",
        "Commission management"
      ]
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting.",
      features: [
        "Custom report generation",
        "Market trend analysis",
        "ROI calculations"
      ]
    }
  ];

  return (
    <div id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wider">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Everything you need to excel
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive tools designed for modern real estate management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 