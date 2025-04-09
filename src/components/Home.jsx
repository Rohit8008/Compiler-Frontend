import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      <GlobalStyles />
    </div>
  )
}

export default Home
