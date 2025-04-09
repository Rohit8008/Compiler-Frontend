import Navbar from './Navbar'
import { CheckCircle, BarChart2, Users, ClipboardList, Phone, Mail, Building2, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2 space-y-8 relative">
              <div className="absolute -left-32 -top-32 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight relative">
                Transform Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
                  Property Management
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                Elevate your real estate business with our premium CRM solution. 
                Streamline operations, boost team productivity, and deliver 
                exceptional client experiences.
              </p>
              
              <div className="space-y-4 relative z-10">
                <a 
                  href="/trial" 
                  className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="text-gray-500 text-sm">14-day free trial. No credit card required.</p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 bg-white p-2">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Modern city buildings viewed from below" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
            {/* Feature Cards */}
            {[
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
            ].map((card, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl inline-block mb-6 relative z-10">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{card.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">
                  {card.description}
                </p>
                <ul className="space-y-3 relative z-10">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-blue-50/30 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Let's discuss how we can help optimize your property management business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Phone",
                primary: "+1 (555) 123-4567",
                secondary: "Mon-Fri, 9am-6pm EST"
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email",
                primary: "contact@propmanage.com",
                secondary: "24/7 Support Available"
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Office",
                primary: "123 Business Ave, Suite 100",
                secondary: "New York, NY 10001"
              }
            ].map((card, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 text-center transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-gradient-to-r from-blue-600 to-purple-600">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{card.primary}</p>
                <p className="text-gray-500 text-sm">{card.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <img src="/logo.png" alt="PropManage" className="h-10 w-auto mr-3" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                PropManage
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms</a>
              <span className="text-gray-400">© 2025 PropManage. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Add these styles to your global CSS or create a new style tag */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 15s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  )
}

export default Home
