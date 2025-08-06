import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Award, Users2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
              من هي حوراء القرة غولي؟
            </h2>
            <p className="text-xl text-muted-foreground font-arabic max-w-3xl mx-auto">
              مسيرة تربوية حافلة بالعطاء والتأثير، ورؤية سياسية تنطلق من القلب لتصل إلى الوطن
            </p>
          </div>

          {/* Main Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-gold/10 p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-primary font-serif mb-4">
                  رحلة في عالم التعليم
                </h3>
                <p className="text-foreground font-arabic leading-relaxed text-lg">
                  بدأت حوراء مسيرتها كمعلمة متخصصة، حيث اكتشفت شغفها الحقيقي في تشكيل عقول الأجيال القادمة. 
                  خلال أكثر من 15 عامًا في الميدان التربوي، تمكنت من إحداث تغيير جذري في طرق التعليم 
                  والتعلم، وأثبتت أن التعليم هو المفتاح الحقيقي لتطوير المجتمع.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gold/10 to-primary/10 p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-bold text-primary font-serif mb-4">
                  من التعليم إلى القيادة
                </h3>
                <p className="text-foreground font-arabic leading-relaxed text-lg">
                  إيمانًا منها بأن التغيير الحقيقي يبدأ من القمة، قررت حوراء التوجه نحو العمل السياسي لتكون 
                  صوتًا للتعليم والمرأة والشباب. رؤيتها تتمحور حول بناء مجتمع يقدر التعليم ويمكن المرأة 
                  ويستثمر في طاقات الشباب.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary font-serif mb-2">التعليم</h4>
                  <p className="text-sm text-muted-foreground font-arabic">
                    خبرة واسعة في تطوير المناهج والطرق التربوية الحديثة
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gold/20">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-bold text-primary font-serif mb-2">تمكين المرأة</h4>
                  <p className="text-sm text-muted-foreground font-arabic">
                    مناصرة قوية لحقوق المرأة ودورها في التنمية المجتمعية
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary font-serif mb-2">دعم الشباب</h4>
                  <p className="text-sm text-muted-foreground font-arabic">
                    برامج شاملة لتأهيل الشباب وتطوير مهاراتهم القيادية
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gold/20">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-bold text-primary font-serif mb-2">التميز</h4>
                  <p className="text-sm text-muted-foreground font-arabic">
                    سجل حافل بالإنجازات والتقدير في المجال التربوي والاجتماعي
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-gold/5 p-12 rounded-lg border border-primary/10">
            <blockquote className="text-2xl md:text-3xl font-serif text-primary italic mb-6">
              "التعليم ليس مجرد مهنة، بل رسالة نحملها لبناء مستقبل أفضل لأجيالنا القادمة"
            </blockquote>
            <cite className="text-gold font-arabic text-lg">- حوراء القرة غولي</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;