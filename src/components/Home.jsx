import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-blue-100'>
      <Navbar/>
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your<br />
              <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Property Management
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
              Elevate your real estate business with our premium CRM solution. 
              Streamline operations, boost team productivity, and deliver 
              exceptional client experiences.
            </p>
            
            <div className="space-y-4">
              <a 
                href="/trial" 
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <p className="text-gray-500 text-sm">14-day free trial. No credit card required.</p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Modern city buildings viewed from below" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
