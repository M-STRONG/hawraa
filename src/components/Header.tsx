import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-elegant z-50 border-b border-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary font-serif">
              حوراء القرة غولي
            </div>
            <div className="text-sm text-gold font-arabic hidden md:block">
              قيادة تربوية • رؤية سياسية
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-arabic"
            >
              من هي حوراء؟
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-foreground hover:text-primary transition-colors font-arabic"
            >
              الرؤية السياسية
            </button>
            <button 
              onClick={() => scrollToSection('initiatives')}
              className="text-foreground hover:text-primary transition-colors font-arabic"
            >
              المبادرات
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors font-arabic"
            >
              أصوات الدعم
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-foreground hover:text-primary transition-colors font-arabic"
            >
              المقالات
            </button>
            <Button 
              variant="leadership" 
              onClick={() => scrollToSection('contact')}
              className="font-arabic"
            >
              تواصل معنا
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-right text-foreground hover:text-primary transition-colors font-arabic"
              >
                من هي حوراء؟
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-right text-foreground hover:text-primary transition-colors font-arabic"
              >
                الرؤية السياسية
              </button>
              <button 
                onClick={() => scrollToSection('initiatives')}
                className="text-right text-foreground hover:text-primary transition-colors font-arabic"
              >
                المبادرات
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-right text-foreground hover:text-primary transition-colors font-arabic"
              >
                أصوات الدعم
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-right text-foreground hover:text-primary transition-colors font-arabic"
              >
                المقالات
              </button>
              <Button 
                variant="leadership" 
                onClick={() => scrollToSection('contact')}
                className="font-arabic w-full"
              >
                تواصل معنا
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;