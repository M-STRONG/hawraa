import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Lightbulb, Target, ArrowRight } from 'lucide-react';

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-primary-dark to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              رؤية سياسية واضحة
            </h2>
            <p className="text-xl text-white/80 font-arabic max-w-3xl mx-auto">
              أجندة شاملة تهدف إلى إحداث تغيير حقيقي في التعليم والمجتمع
            </p>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="font-serif text-gold">التعليم النوعي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-arabic text-center">
                  تطوير نظام تعليمي عصري يواكب متطلبات العصر ويركز على الابتكار والإبداع
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="font-serif text-gold">تمكين المرأة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-arabic text-center">
                  دعم مشاركة المرأة الفعالة في جميع مجالات الحياة وضمان حقوقها وفرصها
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="font-serif text-gold">استثمار الشباب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-arabic text-center">
                  برامج شاملة لتأهيل الشباب وتطوير قدراتهم ودعم مبادراتهم الريادية
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="font-serif text-gold">التنمية المستدامة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 font-arabic text-center">
                  خطط طويلة المدى للتنمية الاقتصادية والاجتماعية المستدامة
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-gold font-serif mb-8 text-center">
              محاور الرؤية السياسية
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <ArrowRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif mb-2">
                      إصلاح النظام التعليمي
                    </h4>
                    <p className="text-white/80 font-arabic">
                      تحديث المناهج، تدريب المعلمين، وتطوير البنية التحتية التعليمية لمواكبة التطورات العالمية
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <ArrowRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif mb-2">
                      السياسات الاجتماعية
                    </h4>
                    <p className="text-white/80 font-arabic">
                      وضع برامج شاملة للدعم الاجتماعي وتحسين جودة الحياة للمواطنين
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <ArrowRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif mb-2">
                      الصحة والرعاية
                    </h4>
                    <p className="text-white/80 font-arabic">
                      تطوير نظام صحي متقدم يضمن الرعاية الصحية الجيدة لجميع أفراد المجتمع
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <ArrowRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif mb-2">
                      التنمية الاقتصادية
                    </h4>
                    <p className="text-white/80 font-arabic">
                      خطط لتنويع الاقتصاد ودعم المشاريع الصغيرة والمتوسطة لخلق فرص عمل جديدة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <ArrowRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif mb-2">
                      الحكم الرشيد
                    </h4>
                    <p className="text-white/80 font-arabic">
                      تعزيز الشفافية والمساءلة في المؤسسات الحكومية وتطوير آليات المشاركة المجتمعية
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <ArrowRight className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif mb-2">
                      البيئة والاستدامة
                    </h4>
                    <p className="text-white/80 font-arabic">
                      سياسات بيئية متقدمة لحماية البيئة وضمان التنمية المستدامة للأجيال القادمة
                    </p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;