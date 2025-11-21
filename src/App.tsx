import { useState } from 'react';
import { BookOpen, Calculator, Building2, Code, GraduationCap, Users, Award, MapPin, Clock, DollarSign, X, CheckCircle2, XCircle, Search, MessageCircle, Facebook, Instagram, ChevronLeft, ChevronRight, Menu, Goal, Brain, Shield, Cpu, Box, PenTool, Palette } from 'lucide-react';

interface Course {
  icon: any;
  title: string;
  description: string;
  price: string;
  hours: number;
  isOpen: boolean;
  level: string;
  topics: string[];
  prerequisites: string;
  instructor: string;
}

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const coursesPerPage = 6;

  const courses: Course[] = [
    {
      icon: Brain,
      title: 'مدخل إلى الذكاء الصنعي ولغة بايثون',
      description: 'تعلّم أساسيات الذكاء الصنعي والبرمجة بلغة بايثون وتحليل البيانات وبناء النماذج الذكية',
      price: '400,000',
      hours: 24,
      isOpen: false,
      level: 'مبتدئ إلى متوسط',
      topics: ['الذكاء الصنعي وتطبيقاته', 'لغة بايثون', 'Pandas', 'Numpy', 'Matplotlib', 'التعلم الآلي', 'التصنيف والانحدار وتقييم النماذج', 'مشروع عملي على بيانات حقيقية'],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'م.ميار الملا'
    },
    {
      icon: Shield,
      title: ' الأمن السيبراني والهكر الأخلاقي  المستوى الأول',
      description: 'دورة تعرّفك على أساسيات الأمن السيبراني، التهديدات الرقمية، أدوات التحليل العملي، وإعداد بيئة اختبار آمنة باستخدام Kali ',
      price: '300,000',
      hours: 15,
      isOpen: true,
      level: 'مبتدئ',
      topics: [
        'أساسيات الأمن السيبراني وأهميته',
        'أنواع التهديدات الرقمية ونموذج Chain Kill Cyber',
        'مصطلحات أساسية: Threat, Vulnerability, Exploit, Risk',
        'القبعات السيبرانية وأخلاقيات العمل',
        'Kali Linux على بيئة افتراضية',
        'أوامر النظام الأساسية وإدارة الصلاحيات',
        'تحليل الشبكات باستخدام Wireshark',
        'فحص المنافذ والأجهزة باستخدام Nmap',
        'تطبيق عملي لدمج الأدوات في سيناريوهات واقعية'
      ],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'م.رياض حامد' // أضف اسم المدرب هنا
    },
    {
      icon: Cpu,
      title: 'دورة Arduino',
      description: 'تعلّم برمجة المتحكم الصغري Arduino وتصميم مشاريع إلكترونية ذكية من الصفر',
      price: '225,000',
      hours: 20,
      isOpen: true,
      level: 'مبتدئ إلى متوسط',
      topics: [
        'التعرف على المتحكم الصغري Arduino وأنواعه',
        'الدخل والخرج الرقمي (Digital I/O)',
        'الدخل والخرج التناظري (Analog I/O)',
        'أساسيات البرمجة: الشروط والحلقات وتعريف المداخل والمخارج',
        'كتابة الأكواد وتنفيذها عمليًا',
        'أدوات الإدخال والإخراج: LCD، 7-Segment، Keypad',
        'مشروع متكامل يطبق جميع المهارات',
        'اختبار لتقييم الفهم والتطبيق'
      ],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'م.فادي الأزرق' // أضف اسم المدرب هنا
    },
    {
      icon: Calculator,
      title: 'دورة المحاسبة العملية على برنامج الرشيد',
      description: 'تعلّم مبادئ المحاسبة وتنفيذ العمليات التجارية على برنامج الرشيد باحتراف مع تطبيقات عملية ودعم فني مستمر',
      price: '325,000',
      hours: 24,
      isOpen: true,
      level: 'مبتدئ إلى متوسط',
      topics: [
        'مبادئ وأسس المحاسبة النظرية',
        'تنفيذ العمليات التجارية على برنامج الرشيد',
        'اكتساب مهارة إدارة الأعمال المحاسبية في الشركات والمتاجر',
        'إعداد التقارير المالية والفواتير والسجلات المحاسبية',
        'تنزيل واستخدام برنامج الرشيد على الحاسب الشخصي',
        'الحصول على دعم فني وتقني مستمر'
      ],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'أ.أسعد بركودة'
    },
    {
      icon: Box,
      title: 'دورة 3ds Max مع V-Ray',
      description: 'تعلّم النمذجة ثلاثية الأبعاد والتصميم الداخلي والخارجي باستخدام 3ds Max وV-Ray لإنتاج صور واقعية عالية الجودة',
      price: '575,000',
      hours: 36,
      isOpen: true,
      level: 'متوسط إلى متقدم',
      topics: [
        'واجهة 3ds Max وأساسيات النمذجة',
        'تصميم الفراغات الداخلية والخارجية',
        'تطبيق المواد والخامات باحتراف',
        'ضبط الإضاءة الواقعية باستخدام V-Ray',
        'إعداد الكاميرا وزوايا التصوير',
        'الرندر النهائي وإخراج الصور الواقعية'
      ],
      prerequisites: 'يفضّل معرفة أساسيات التصميم الداخلي أو المعماري',
      instructor: 'م.داني الزايد'
    },
    {
      icon: Palette,
      title: 'دورة الفوتوشوب للمبتدئين',
      description: 'ابدأ رحلتك في عالم التصميم باستخدام Photoshop من خلال تعلم الأدوات الأساسية وتعديل الصور وبناء تصاميم احترافية من الصفر',
      price: '200,000',
      hours: 16,
      isOpen: true,
      level: 'مبتدئ',
      topics: [
        'واجهة البرنامج وأهم الأدوات',
        'أساسيات تعديل الصور وتحسينها',
        'الكتابة والتعامل مع النصوص',
        'الرسم والتلوين بالأدوات الأساسية',
        'مشروع تطبيقي نهائي لبناء تصميم متكامل',
        'تصميم بوسترات ومحتوى للسوشيال ميديا',
        'فهم الطبقات وتنظيم العمل'
      ],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'أ.سعاد الأزرق' // أضف اسم المدرب هنا
    },

    {
      icon: Building2,
      title: 'دورة Revit الاحترافية',
      description: 'تعلّم استخدام برنامج Revit باحتراف لبناء النماذج المعمارية، إعداد الجداول، والإخراج البصري والطباعي المتكامل للمشاريع',
      price: '500,000',
      hours: 30,
      isOpen: true,
      level: 'متوسط إلى متقدم',
      topics: [
        'التعرف على البرنامج والواجهة وضبط الإعدادات',
        'أوامر النمذجة الأساسية: المستويات، الجدران، الأعمدة، الأبواب، النوافذ، السلالم',
        'أدوات التعديل (Trim، Offset وغيرها)',
        'الأسقف المستعارة ومواد الإكساء',
        'التنظيم والجداول (المساحات، الجداول، المواد)',
        'العرض وإنشاء المشاهد وأوراق الرسم (Sheets)',
        'الريندر والإخراج البصري',
        'الكتل العضوية (Mass Modeling)'
      ],
      prerequisites: 'يفضّل معرفة أساسيات التصميم المعماري أو الهندسي',
      instructor: 'م.مايكل سليك' // أضف اسم المدرب هنا
    },

    {
      icon: PenTool,
      title: 'دورة AutoCAD',
      description: 'ابدأ رحلتك نحو إتقان برنامج أوتوكاد من خلال التعرف على واجهته وأوامره الأساسية وتنفيذ مشروع معماري كامل عمليًا',
      price: '325,000',
      hours: 20,
      isOpen: true,
      level: 'مبتدئ إلى متوسط',
      topics: [
        'واجهة البرنامج وضبط الإعدادات',
        'الأوامر الرئيسية والمساعدة واختصاراتها',
        'إعداد واستخدام الطبقات (Layers)',
        'رسم المخططات المعمارية ووضع الأبعاد',
        'إنشاء وتعديل البلوكات',
        'رسم الواجهات والمقاطع',
        'تطبيق عملي على مشروع كامل',
        'الحصول على مكتبة بلوكات جاهزة للاستخدام'
      ],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'م.ماريا البطل' // أضف اسم المدرب هنا
    },
    {
      icon: Code,
      title: 'دورة المنطق البرمجي ومهارات البرمجة',
      description: 'ابدأ رحلتك في عالم البرمجة من خلال تعلم التفكير المنطقي وتحليل المشكلات وتصميم الحلول بخوارزميات ومخططات منهجية دون التقيد بلغة محددة',
      price: '175,000',
      hours: 10,
      isOpen: true,
      level: 'مبتدئ',
      topics: [
        'مدخل إلى التفكير البرمجي',
        'تحليل المشكلات وتقسيمها إلى أجزاء',
        'منطق الشروط والقرارات (الجمل الشرطية وشجرة القرار)',
        'التكرار والحلقات',
        'المتغيرات وأنواعها',
        'الخوارزميات والتفكير المنهجي (Pseudocode)',
        'الرسم التخطيطي (Flowchart)',
        'مقدمة إلى البرمجة الكائنية والتفكير الهيكلي (OOP)',
        'التفكير الاستراتيجي في حل المشكلات',
        'تحديات من الواقع العملي'
      ],
      prerequisites: 'لا توجد متطلبات مسبقة',
      instructor: 'م.محمد عبده' // أضف اسم المدرب هنا
    },




  ];

  const stats = [
    { number: '500+', label: 'طالب متدرب' },
    { number: '50+', label: 'دورة تدريبية' },
    { number: '15+', label: 'مدرب محترف' },
    { number: '10+', label: 'سنوات خبرة' }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: document.getElementById('courses')?.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#2B3A8F] text-white py-4 px-4 md:px-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/gggg.png" alt="شعار المركز" className="h-10 w-10 md:h-12 md:w-12" />
            <div>
              <h1 className="text-sm md:text-xl font-bold">مركز السفينة للتدريب والتعليم</h1>
            </div>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:flex gap-8 font-semibold">
            <a href="#home" className="hover:text-[#F8E71C] transition-colors">الرئيسية</a>
            <a href="#courses" className="hover:text-[#F8E71C] transition-colors">الدورات</a>
            <a href="#about" className="hover:text-[#F8E71C] transition-colors">من نحن</a>
            <a href="#contact" className="hover:text-[#F8E71C] transition-colors">تواصل معنا</a>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 font-semibold">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F8E71C] transition-colors">الرئيسية</a>
            <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F8E71C] transition-colors">الدورات</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F8E71C] transition-colors">من نحن</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F8E71C] transition-colors">تواصل معنا</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#2B3A8F] via-[#3D4EA8] to-[#1E90D8] text-white py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                رحلتك التعليمية تبدأ هنا
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100">
                نقدم دورات تدريبية احترافية في مختلف المجالات لتطوير مهاراتك وبناء مستقبلك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#courses" className="bg-[#F8E71C] text-[#2B3A8F] px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#E5D419] transition-all transform hover:scale-105 shadow-lg">
                  استكشف الدورات
                </a>
                <a href="#contact" className="bg-[#1E90D8] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#1A7BC2] transition-all transform hover:scale-105 shadow-lg">
                  تواصل معنا
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/gggg.png" alt="شعار مركز السفينة" className="w-48 h-48 md:w-80 md:h-80 drop-shadow-2xl animate-float" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      {/*<section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-[#1E90D8]/10 to-[#F8E71C]/10 hover:shadow-lg transition-shadow">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2B3A8F] mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Courses Section */}
      <section id="courses" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3A8F] mb-3 md:mb-4">
              الدورات التدريبية
            </h3>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              نوفر مجموعة متنوعة من الدورات التدريبية المتخصصة بإشراف مدربين محترفين
            </p>
            <div className="max-w-xl mx-auto px-4">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث عن دورة..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pr-12 pl-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-[#1E90D8] focus:outline-none text-base md:text-lg text-right"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setCurrentPage(1);
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {currentCourses.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentCourses.map((course, index) => {
                  const Icon = course.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedCourse(course)}
                      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#1E90D8] group cursor-pointer relative"
                    >
                      {course.isOpen ? (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="hidden sm:inline">متاح للتسجيل</span>
                          <span className="sm:hidden">متاح</span>
                        </div>
                      ) : (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
                          <XCircle className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="hidden sm:inline">مغلق حالياً</span>
                          <span className="sm:hidden">مغلق</span>
                        </div>
                      )}
                      <div className="bg-gradient-to-br from-[#2B3A8F] to-[#1E90D8] w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#2B3A8F] mb-2 md:mb-3">{course.title}</h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{course.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1 md:gap-2 text-[#2B3A8F]">
                          <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="font-bold text-sm md:text-base">{course.price}ل.س</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2 text-gray-600">
                          <Clock className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="font-semibold text-sm md:text-base">{course.hours} ساعة</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-[#F8E71C] text-[#2B3A8F] py-2 rounded-lg font-bold text-sm md:text-base hover:bg-[#E5D419] transition-colors">
                        عرض التفاصيل
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8 md:mt-12 flex-wrap">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg ${currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#2B3A8F] text-white hover:bg-[#1E90D8]'
                      } transition-colors`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`w-10 h-10 rounded-lg font-bold transition-colors ${currentPage === index + 1
                        ? 'bg-[#F8E71C] text-[#2B3A8F]'
                        : 'bg-white text-[#2B3A8F] hover:bg-[#1E90D8] hover:text-white'
                        }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg ${currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#2B3A8F] text-white hover:bg-[#1E90D8]'
                      } transition-colors`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 md:py-16">
              <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md mx-auto shadow-lg">
                <Search className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-4" />
                <h4 className="text-xl md:text-2xl font-bold text-[#2B3A8F] mb-2">لا توجد نتائج</h4>
                <p className="text-sm md:text-base text-gray-600">لم نجد أي دورات تطابق بحثك. جرب كلمات مختلفة.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3A8F] mb-4 md:mb-6">
                من نحن
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                مركز السفينة للتدريب والتعليم هو مؤسسة تعليمية رائدة تقدم دورات تدريبية متخصصة في مختلف المجالات. نهدف إلى تمكين الأفراد وتطوير مهاراتهم لمواكبة متطلبات سوق العمل الحديث.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                نفخر بفريقنا من المدربين المحترفين ذوي الخبرة الواسعة، والذين يلتزمون بتقديم تجربة تعليمية متميزة .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F8E71C] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-[#2B3A8F]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-[#2B3A8F]">شهادات معتمدة</div>
                    <div className="text-xs md:text-sm text-gray-600">بعد إتمام الدورة</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#1E90D8] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm md:text-base text-[#2B3A8F]">مجموعات صغيرة</div>
                    <div className="text-xs md:text-sm text-gray-600">تعليم تفاعلي</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2B3A8F] to-[#1E90D8] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-[#F8E71C] w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Goal className="w-5 h-5 md:w-6 md:h-6 text-[#2B3A8F]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg md:text-xl mb-1 md:mb-2">تطبيق عملي</h5>
                      <p className="text-sm md:text-base text-gray-100">تركيز على الجانب العملي والمشاريع التطبيقية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-[#F8E71C] w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-[#2B3A8F]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg md:text-xl mb-1 md:mb-2">مدربون محترفون</h5>
                      <p className="text-sm md:text-base text-gray-100">خبراء في مجالاتهم مع سنوات من الخبرة العملية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-[#F8E71C] w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-[#2B3A8F]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg md:text-xl mb-1 md:mb-2">شهادات معتمدة</h5>
                      <p className="text-sm md:text-base text-gray-100">شهادات موثقة تعزز سيرتك الذاتية وفرصك المهنية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-[#2B3A8F] to-[#1E90D8] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">تواصل معنا</h3>
            <p className="text-base md:text-xl text-gray-100 px-4">نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار الدورة المناسبة</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <a
              href="https://wa.me/+963983365693"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center hover:bg-white/20 transition-all cursor-pointer group"
            >
              <div className="bg-[#25D366] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h5 className="font-bold text-lg md:text-xl mb-2">واتساب</h5>
              <p className="text-sm md:text-base text-gray-100" dir="ltr">+963 983 365 693</p>
            </a>
            <a
              href="https://www.facebook.com/share/17C7hWp372"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center hover:bg-white/20 transition-all cursor-pointer group"
            >
              <div className="bg-[#1877F2] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Facebook className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h5 className="font-bold text-lg md:text-xl mb-2">فيسبوك</h5>
              <p className="text-sm md:text-base text-gray-100">مركز السفينة للتدريب والتعليم</p>
            </a>
            <a
              href="https://www.instagram.com/mrkzlsfyna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center hover:bg-white/20 transition-all cursor-pointer group sm:col-span-2 lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h5 className="font-bold text-lg md:text-xl mb-2">إنستغرام</h5>
              <p className="text-sm md:text-base text-gray-100">مركز السفينة للتدريب والتعليم</p>
            </a>
          </div>
          <div className="text-center mt-8 md:mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl inline-flex items-center gap-2 md:gap-3">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-base md:text-lg font-semibold"> ديرعطية - السوق الشمالي بناء روضة بيت الطفل</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B3A8F] text-white py-6 md:py-8 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <img src="/gggg.png" alt="شعار المركز" className="h-8 w-8 md:h-10 md:w-10" />
            <h6 className="text-base md:text-xl font-bold">مركز السفينة للتدريب والتعليم</h6>
          </div>
          <p className="text-sm md:text-base text-gray-300">© 2025 جميع الحقوق محفوظة</p>
        </div>
      </footer>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-br from-[#2B3A8F] to-[#1E90D8] text-white p-6 md:p-8 rounded-t-3xl">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="bg-white/20 p-3 md:p-4 rounded-2xl">
                  <selectedCourse.icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedCourse.title}</h3>
                  <p className="text-base md:text-lg text-gray-100">{selectedCourse.description}</p>
                  <div className="mt-3 md:mt-4">
                    {selectedCourse.isOpen ? (
                      <span className="inline-flex items-center gap-2 bg-green-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-sm md:text-base">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                        متاح للتسجيل
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-red-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-sm md:text-base">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5" />
                        مغلق حالياً
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-gradient-to-br from-[#1E90D8]/10 to-[#F8E71C]/10 p-4 md:p-6 rounded-xl text-center">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-[#2B3A8F] mx-auto mb-2" />
                  <div className="text-xs md:text-sm text-gray-600 mb-1">السعر</div>
                  <div className="text-xl md:text-2xl font-bold text-[#2B3A8F]">{selectedCourse.price} ل.س</div>
                </div>
                <div className="bg-gradient-to-br from-[#1E90D8]/10 to-[#F8E71C]/10 p-4 md:p-6 rounded-xl text-center">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#2B3A8F] mx-auto mb-2" />
                  <div className="text-xs md:text-sm text-gray-600 mb-1">مدة الدورة</div>
                  <div className="text-xl md:text-2xl font-bold text-[#2B3A8F]">{selectedCourse.hours} ساعة</div>
                </div>
                <div className="bg-gradient-to-br from-[#1E90D8]/10 to-[#F8E71C]/10 p-4 md:p-6 rounded-xl text-center">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-[#2B3A8F] mx-auto mb-2" />
                  <div className="text-xs md:text-sm text-gray-600 mb-1">المستوى</div>
                  <div className="text-base md:text-lg font-bold text-[#2B3A8F]">{selectedCourse.level}</div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2B3A8F] mb-3 md:mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                    محتوى الدورة
                  </h4>
                  <ul className="space-y-2">
                    {selectedCourse.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <div className="bg-[#F8E71C] w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base md:text-lg">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4 md:pt-6">
                  <h4 className="text-lg md:text-xl font-bold text-[#2B3A8F] mb-2">المتطلبات المسبقة</h4>
                  <p className="text-base md:text-lg text-gray-700">{selectedCourse.prerequisites}</p>
                </div>

                <div className="border-t pt-4 md:pt-6">
                  <h4 className="text-lg md:text-xl font-bold text-[#2B3A8F] mb-2">المدرب</h4>
                  <p className="text-base md:text-lg text-gray-700">{selectedCourse.instructor}</p>
                </div>

                {selectedCourse.isOpen && (
                  <div className="border-t pt-4 md:pt-6">
                    <a
                      href={`https://wa.me/+963983365693?text=مرحباً، أرغب بالتسجيل في دورة ${selectedCourse.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#F8E71C] text-[#2B3A8F] py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#E5D419] transition-colors shadow-lg text-center"
                    >
                      سجل الآن في هذه الدورة
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
