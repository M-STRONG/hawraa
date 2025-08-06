import { Button } from '@/components/ui/button';
import { ArrowDown, Heart, Users, GraduationCap } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="حوراء القرة غولي" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-fade-in delay-1000">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center backdrop-blur-sm">
          <GraduationCap className="w-8 h-8 text-gold" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-10 animate-fade-in delay-1500">
        <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center backdrop-blur-sm">
          <Users className="w-6 h-6 text-primary-light" />
        </div>
      </div>

      <div className="absolute top-40 left-20 animate-fade-in delay-500">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <Heart className="w-10 h-10 text-gold" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 animate-slide-up">
            <span className="block text-gold mb-2">قيادة من قلب التعليم</span>
            <span className="block text-white/90 text-3xl md:text-5xl">
              تأثير يبدأ من الفكرة، ويصل إلى الوطن
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-arabic animate-fade-in delay-300">
            حوراء القرة غولي - مسيرة تربوية ورؤية سياسية شاملة لمستقبل أفضل
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => scrollToSection('vision')}
              className="font-arabic text-lg px-8 py-4 shadow-gold animate-leadership-glow"
            >
              اكتشف الرؤية السياسية
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="font-arabic text-lg px-8 py-4"
            >
              تعرف على حوراء
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold font-serif">15+</div>
              <div className="text-white/70 font-arabic">سنة في التعليم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold font-serif">500+</div>
              <div className="text-white/70 font-arabic">طالب تأثروا برؤيتها</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold font-serif">10+</div>
              <div className="text-white/70 font-arabic">مبادرة تطوعية</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-1000">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;