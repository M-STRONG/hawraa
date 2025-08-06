import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, FileText, Video, Headphones } from 'lucide-react';

const ResourcesSection = () => {
  const articles = [
    {
      title: "مستقبل التعليم في العراق: رؤية شاملة للتطوير",
      excerpt: "نظرة معمقة على التحديات والفرص في النظام التعليمي العراقي وكيفية تطويره ليواكب التطورات العالمية",
      date: "15 يناير 2024",
      readTime: "8 دقائق",
      category: "تعليم",
      type: "مقال",
      featured: true
    },
    {
      title: "دور المرأة في التنمية السياسية والاقتصادية",
      excerpt: "تحليل شامل لأهمية مشاركة المرأة في صنع القرار ودورها في تحقيق التنمية المستدامة",
      date: "2 فبراير 2024",
      readTime: "12 دقيقة",
      category: "تمكين المرأة",
      type: "مقال",
      featured: true
    },
    {
      title: "استثمار طاقات الشباب: الطريق نحو مستقبل أفضل",
      excerpt: "كيف يمكن للمجتمع الاستفادة من طاقات الشباب وتوجيهها نحو التنمية والإبداع",
      date: "20 فبراير 2024",
      readTime: "6 دقائق",
      category: "الشباب",
      type: "مقال",
      featured: false
    },
    {
      title: "التحديات والحلول في النظام الصحي العراقي",
      excerpt: "مراجعة شاملة للوضع الصحي الحالي والحلول المقترحة لتطوير الخدمات الصحية",
      date: "5 مارس 2024",
      readTime: "10 دقائق",
      category: "صحة",
      type: "مقال",
      featured: false
    },
    {
      title: "حوار مع حوراء: رؤيتي للعمل السياسي",
      excerpt: "مقابلة صوتية تتناول رؤية حوراء للعمل السياسي وأهدافها المستقبلية",
      date: "18 مارس 2024",
      readTime: "25 دقيقة",
      category: "سياسة",
      type: "صوتي",
      featured: false
    },
 
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'تعليم': return 'bg-primary';
      case 'تمكين المرأة': return 'bg-gold';
      case 'الشباب': return 'bg-green-600';
      case 'صحة': return 'bg-red-500';
      case 'سياسة': return 'bg-purple-600';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'مقال': return FileText;
      case 'فيديو': return Video;
      case 'صوتي': return Headphones;
      default: return FileText;
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-primary/5 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
              الموارد والمقالات
            </h2>
            <p className="text-xl text-muted-foreground font-arabic max-w-3xl mx-auto">
              مكتبة شاملة من المقالات والموارد التي تعكس رؤية حوراء وخبرتها في مختلف المجالات
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary font-serif mb-6 text-center">
              المقالات المميزة
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.filter(article => article.featured).map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-gold/10 p-1">
                    <div className="bg-white rounded-t-lg">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`${getCategoryColor(article.category)} text-white font-arabic`}>
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-gold">
                            {(() => {
                              const Icon = getTypeIcon(article.type);
                              return <Icon className="w-4 h-4" />;
                            })()}
                            <span className="text-sm font-arabic mr-2">{article.type}</span>
                          </div>
                        </div>
                        <CardTitle className="font-serif text-primary text-right leading-relaxed">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-arabic text-right leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 ml-2" />
                            <span className="font-arabic">{article.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 ml-2" />
                            <span className="font-arabic">{article.date}</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full font-arabic group">
                          اقرأ المزيد
                          <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h3 className="text-2xl font-bold text-primary font-serif mb-6 text-center">
              جميع المقالات والموارد
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter(article => !article.featured).map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/10 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${getCategoryColor(article.category)} text-white font-arabic`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-gold">
                        {(() => {
                          const Icon = getTypeIcon(article.type);
                          return <Icon className="w-4 h-4" />;
                        })()}
                        <span className="text-sm font-arabic mr-2">{article.type}</span>
                      </div>
                    </div>
                    <CardTitle className="font-serif text-primary text-right leading-relaxed text-lg">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-muted-foreground font-arabic text-right leading-relaxed mb-4 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 ml-2" />
                          <span className="font-arabic">{article.readTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 ml-2" />
                          <span className="font-arabic">{article.date}</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full font-arabic group">
                        اقرأ المزيد
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-gold/10 p-12 rounded-lg border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-primary font-serif mb-4">
              ابق على اطلاع بآخر المقالات
            </h3>
            <p className="text-muted-foreground font-arabic mb-6">
              اشترك في النشرة الإخبارية لتصلك أحدث المقالات والموارد
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني"
                className="flex-1 px-4 py-2 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 font-arabic text-right"
              />
              <Button variant="leadership" className="font-arabic">
                اشتراك
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;