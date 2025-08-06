import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "د. أحمد محمود",
      title: "مدير مدرسة الأمل الثانوية",
      content: "حوراء أستاذة متميزة استطاعت تطوير طرق التدريس في مدرستنا بشكل ملحوظ. رؤيتها التعليمية مبتكرة وتركز على الطالب كمحور العملية التعليمية.",
      rating: 5,
      category: "تعليم"
    },
    {
      name: "فاطمة عبد الله",
      title: "والدة طالبة، من المستفيدات من البرامج",
      content: "ابنتي استفادت كثيراً من برامج حوراء التعليمية. لاحظت تحسناً واضحاً في أدائها الأكاديمي وثقتها بنفسها. شكراً لك يا أستاذة حوراء.",
      rating: 5,
      category: "أولياء الأمور"
    },
    {
      name: "سارة جعفر",
      title: "خريجة برنامج تمكين المرأة الريادية",
      content: "برنامج تمكين المرأة الريادية غير حياتي. تعلمت مهارات قيادية وإدارية ساعدتني في إطلاق مشروعي الخاص. حوراء مصدر إلهام حقيقي.",
      rating: 5,
      category: "ريادة الأعمال"
    },
    {
      name: "محمد علي",
      title: "طالب جامعي، عضو منتدى الشباب للتغيير",
      content: "منتدى الشباب للتغيير منحني فرصة للتعبير عن آرائي ومناقشة القضايا المهمة. حوراء تستمع للشباب وتأخذ آراءهم بعين الاعتبار.",
      rating: 5,
      category: "الشباب"
    },
    {
      name: "د. زينب حسن",
      title: "رئيسة قسم التمريض، المستشفى العام",
      content: "حملات التوعية الصحية التي نظمتها حوراء كان لها أثر إيجابي كبير في المجتمع. نشكرها على دعم القطاع الصحي والتوعية المجتمعية.",
      rating: 5,
      category: "صحة"
    },
    {
      name: "عبد الرحمن خالد",
      title: "معلم، مشارك في برنامج معلم المستقبل",
      content: "برنامج معلم المستقبل زودني بأدوات وطرق تدريس حديثة. أصبحت أكثر فعالية في الفصل وطلابي يستمتعون أكثر بالتعلم.",
      rating: 5,
      category: "تعليم"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'تعليم': return 'text-primary';
      case 'أولياء الأمور': return 'text-green-600';
      case 'ريادة الأعمال': return 'text-gold';
      case 'الشباب': return 'text-blue-600';
      case 'صحة': return 'text-red-500';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
              أصوات الدعم والتقدير
            </h2>
            <p className="text-xl text-muted-foreground font-arabic max-w-3xl mx-auto">
              شهادات من الذين تأثروا إيجابياً ببرامج ومبادرات حوراء القرة غولي
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/10 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground font-arabic text-center leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center border-t border-primary/10 pt-4">
                    <div className="font-bold text-primary font-serif mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-arabic mb-2">
                      {testimonial.title}
                    </div>
                    <div className={`text-xs font-bold ${getCategoryColor(testimonial.category)} font-arabic`}>
                      {testimonial.category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-primary/10 to-gold/10 p-12 rounded-lg border border-primary/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-serif mb-2">98%</div>
              <div className="text-muted-foreground font-arabic">معدل الرضا من المستفيدين</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold font-serif mb-2">500+</div>
              <div className="text-muted-foreground font-arabic">شهادة تقدير وثناء</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary font-serif mb-2">15+</div>
              <div className="text-muted-foreground font-arabic">مؤسسة شريكة</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-primary font-serif mb-4">
              شارك تجربتك معنا
            </h3>
            <p className="text-muted-foreground font-arabic mb-6">
              إذا كنت من المستفيدين من برامجنا، نود سماع رأيك وتجربتك
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-arabic transition-colors">
              شارك شهادتك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;