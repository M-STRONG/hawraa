import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, ExternalLink } from 'lucide-react';

const InitiativesSection = () => {
  const initiatives = [
    {
      title: "برنامج معلم المستقبل",
      description: "تدريب المعلمين على أحدث التقنيات التعليمية والطرق الحديثة في التدريس",
      category: "تعليم",
      participants: 150,
      location: "مراكز التدريب التربوي",
      date: "مستمر منذ 2023",
      status: "نشط"
    },
    {
      title: "مبادرة تمكين المرأة الريادية",
      description: "ورش تدريبية لتطوير مهارات المرأة في ريادة الأعمال والقيادة",
      category: "تمكين المرأة",
      participants: 200,
      location: "مختلف المحافظات",
      date: "2023-2024",
      status: "نشط"
    },
    {
      title: "منتدى الشباب للتغيير",
      description: "منصة حوارية للشباب لمناقشة القضايا المجتمعية وطرح الحلول",
      category: "الشباب",
      participants: 300,
      location: "الجامعات والمراكز الثقافية",
      date: "شهرياً",
      status: "نشط"
    },
    {
      title: "حملة القراءة للجميع",
      description: "توزيع الكتب وتنظيم جلسات قراءة في المجتمعات المحلية",
      category: "ثقافة",
      participants: 500,
      location: "المكتبات العامة",
      date: "2022-2024",
      status: "مكتمل"
    },
    {
      title: "برنامج التوعية الصحية",
      description: "حملات توعوية حول الصحة العامة والوقاية من الأمراض",
      category: "صحة",
      participants: 1000,
      location: "المراكز الصحية",
      date: "2023",
      status: "مكتمل"
    },
    {
      title: "مشروع الأسر المنتجة",
      description: "دعم الأسر في إنشاء مشاريع صغيرة لتحسين الوضع الاقتصادي",
      category: "اقتصاد",
      participants: 80,
      location: "المناطق الريفية",
      date: "قيد التطوير",
      status: "قريباً"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'نشط': return 'bg-green-500';
      case 'مكتمل': return 'bg-blue-500';
      case 'قريباً': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'تعليم': return 'bg-primary';
      case 'تمكين المرأة': return 'bg-gold';
      case 'الشباب': return 'bg-green-600';
      case 'ثقافة': return 'bg-purple-600';
      case 'صحة': return 'bg-red-500';
      case 'اقتصاد': return 'bg-blue-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
              المبادرات الميدانية
            </h2>
            <p className="text-xl text-muted-foreground font-arabic max-w-3xl mx-auto">
              برامج متنوعة تهدف إلى إحداث تأثير إيجابي مباشر في المجتمع
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-elegant border border-primary/10">
              <div className="text-3xl font-bold text-primary font-serif">6</div>
              <div className="text-muted-foreground font-arabic">مبادرات فعالة</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-elegant border border-gold/20">
              <div className="text-3xl font-bold text-gold font-serif">2230+</div>
              <div className="text-muted-foreground font-arabic">مستفيد ومستفيدة</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-elegant border border-primary/10">
              <div className="text-3xl font-bold text-primary font-serif">15+</div>
              <div className="text-muted-foreground font-arabic">شريك تنفيذي</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-elegant border border-gold/20">
              <div className="text-3xl font-bold text-gold font-serif">3</div>
              <div className="text-muted-foreground font-arabic">سنوات خبرة</div>
            </div>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/10 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={`${getCategoryColor(initiative.category)} text-white font-arabic`}>
                      {initiative.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(initiative.status)} text-white border-none font-arabic`}
                    >
                      {initiative.status}
                    </Badge>
                  </div>
                  <CardTitle className="font-serif text-primary text-right">
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-arabic text-right leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                      <span className="font-arabic mr-2">{initiative.participants} مشارك</span>
                      <Users className="w-4 h-4" />
                    </div>
                    
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                      <span className="font-arabic mr-2">{initiative.location}</span>
                      <MapPin className="w-4 h-4" />
                    </div>
                    
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                      <span className="font-arabic mr-2">{initiative.date}</span>
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>

                  {initiative.status === 'نشط' && (
                    <div className="pt-4 border-t border-primary/10">
                      <button className="flex items-center text-primary hover:text-primary-dark transition-colors font-arabic text-sm">
                        <ExternalLink className="w-4 h-4 ml-2" />
                        معرفة المزيد
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary/5 to-gold/5 p-12 rounded-lg border border-primary/10">
            <h3 className="text-2xl font-bold text-primary font-serif mb-4">
              هل لديك فكرة لمبادرة جديدة؟
            </h3>
            <p className="text-muted-foreground font-arabic mb-6">
              نرحب بأفكاركم ومقترحاتكم لمبادرات تخدم المجتمع وتحدث تأثيراً إيجابياً
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-arabic transition-colors">
              شارك فكرتك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;