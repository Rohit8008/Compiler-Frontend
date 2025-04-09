import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
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
                href="/demo" 
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Request a Demo
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
                  src="./landing.jpg" 
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
  );
};

export default HeroSection; 