import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Users, FileText, Calendar } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك قريباً. شكراً لتواصلك معنا.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactReason: ''
    });
  };

  const contactReasons = [
    { value: 'media', label: 'استفسارات إعلامية', icon: FileText },
    { value: 'collaboration', label: 'عروض التعاون', icon: Users },
    { value: 'speaking', label: 'دعوات للحديث', icon: Calendar },
    { value: 'general', label: 'استفسار عام', icon: Mail }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-6">
              تواصل مباشر
            </h2>
            <p className="text-xl text-muted-foreground font-arabic max-w-3xl mx-auto">
              نرحب بتواصلكم معنا لأي استفسارات أو مقترحات أو فرص تعاون
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary text-center">
                  نموذج التواصل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Reason */}
                  <div>
                    <label className="block text-sm font-medium text-foreground font-arabic mb-3 text-right">
                      سبب التواصل
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactReasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                          <label
                            key={reason.value}
                            className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                              formData.contactReason === reason.value
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-primary/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="contactReason"
                              value={reason.value}
                              checked={formData.contactReason === reason.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <Icon className="w-4 h-4 text-primary ml-2" />
                            <span className="text-sm font-arabic">{reason.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground font-arabic mb-2 text-right">
                      الاسم الكامل *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="text-right font-arabic"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  {/* Email */}
               

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground font-arabic mb-2 text-right">
                      رقم الهاتف
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="text-right font-arabic"
                      placeholder="+964 XXX XXX XXXX"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground font-arabic mb-2 text-right">
                      الموضوع *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="text-right font-arabic"
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground font-arabic mb-2 text-right">
                      الرسالة *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="text-right font-arabic resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="leadership" className="w-full font-arabic text-lg">
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid gap-6">
                <Card className="bg-white/90 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end mb-4">
                      <div className="text-right mr-4">
                        <h4 className="font-bold text-primary font-serif">البريد الإلكتروني</h4>
                        <p className="text-muted-foreground font-arabic">للاستفسارات العامة</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground font-arabic text-right">
                      info@hawraa-qaraghouli.com
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end mb-4">
                      <div className="text-right mr-4">
                        <h4 className="font-bold text-primary font-serif">الهاتف</h4>
                        <p className="text-muted-foreground font-arabic">للتواصل المباشر</p>
                      </div>
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gold" />
                      </div>
                    </div>
                    <p className="text-foreground font-arabic text-right">
                    +9647705908773
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end mb-4">
                      <div className="text-right mr-4">
                        <h4 className="font-bold text-primary font-serif">المكتب</h4>
                        <p className="text-muted-foreground font-arabic">للمقابلات الرسمية</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground font-arabic text-right">
                      بغداد، العراق<br />
                      (بموعد مسبق)
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Response Time */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center">
                <h4 className="font-bold text-primary font-serif mb-2">
                  وقت الاستجابة
                </h4>
                <p className="text-muted-foreground font-arabic">
                  نتعهد بالرد على جميع الرسائل خلال 48 ساعة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;