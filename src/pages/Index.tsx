import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import VisionSection from '../components/VisionSection';
import InitiativesSection from '../components/InitiativesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ResourcesSection from '../components/ResourcesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <InitiativesSection />
      <TestimonialsSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
