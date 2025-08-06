import { Heart, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold font-serif text-gold mb-4">
                حوراء قره غولي
              </h3>
              <p className="text-white/80 font-arabic leading-relaxed mb-6">
                مسيرة تربوية حافلة ورؤية سياسية شاملة لمستقبل أفضل. قيادة من قلب التعليم، 
                تأثير يبدأ من الفكرة ويصل إلى الوطن.
              </p>
              <div className="flex items-center text-gold">
                <Heart className="w-5 h-5 ml-2" />
                <span className="font-arabic">صُنع بحب لخدمة المجتمع</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold font-serif text-gold mb-4">
                روابط سريعة
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-white/80 hover:text-gold transition-colors font-arabic"
                  >
                    من هي حوراء؟
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vision')}
                    className="text-white/80 hover:text-gold transition-colors font-arabic"
                  >
                    الرؤية السياسية
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('initiatives')}
                    className="text-white/80 hover:text-gold transition-colors font-arabic"
                  >
                    المبادرات
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-white/80 hover:text-gold transition-colors font-arabic"
                  >
                    أصوات الدعم
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('resources')}
                    className="text-white/80 hover:text-gold transition-colors font-arabic"
                  >
                    المقالات
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold font-serif text-gold mb-4">
                معلومات التواصل
              </h4>
              <ul className="space-y-3">
         
                <li className="flex items-center text-white/80">
                  <Phone className="w-4 h-4 ml-2 text-gold" />
                  <span className="font-arabic">+9647705908773</span>
                </li>
                <li className="flex items-center text-white/80">
                  <MapPin className="w-4 h-4 ml-2 text-gold" />
                  <span className="font-arabic">بغداد، العراق</span>
                </li>
              </ul>
              
              {/* Social Media Links */}
              <div className="mt-6">
                <h5 className="text-md font-bold font-serif text-gold mb-3">
                  تابعونا على
                </h5>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a 
                    href="https://wa.me/9647705908773" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-gold transition-colors p-2 hover:bg-white/10 rounded-full"
                    aria-label="واتساب"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/people/%D8%AD%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D9%82%D9%8E%D8%B1%D9%8E%D8%BA%D9%88%D9%84%D9%8A/61579173142988/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-gold transition-colors p-2 hover:bg-white/10 rounded-full"
                    aria-label="فيسبوك"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/hwrl.qrh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-gold transition-colors p-2 hover:bg-white/10 rounded-full"
                    aria-label="انستجرام"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                 
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 font-arabic mb-4 md:mb-0">
                © {currentYear} حوراء  قره غولي  . جميع الحقوق محفوظة.
              </div>
              <div className="flex space-x-6 rtl:space-x-reverse">
                
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;