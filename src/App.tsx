import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Users, Award, MapPin, Clock, DollarSign, X, CheckCircle2, XCircle, Search, MessageCircle, Facebook, Instagram, ChevronLeft, ChevronRight, Menu, Goal, User } from 'lucide-react';
import { courses, categories, type Course } from './data/courses';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const coursesPerPage = 6;

  useEffect(() => {
    if (!selectedCourse) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCourse(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCourse]);

  // Relevance scoring and sorting (open courses first)
  const scoredCourses = courses.map(c => ({
    course: c,
    score: searchQuery.trim() ? (
      (c.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 4 : 0) +
      (c.description.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 0) +
      (c.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ? 1 : 0)
    ) : 0
  }));

  const filteredCourses = (searchQuery.trim()
    ? scoredCourses
      .filter(s => s.score > 0)
      .sort((a, b) => Number(b.course.isOpen) - Number(a.course.isOpen) || b.score - a.score)
      .map(s => s.course)
    : [...courses].sort((a, b) => Number(b.isOpen) - Number(a.isOpen))
  ).filter(course => selectedCategory === 'الكل' || course.category === selectedCategory);

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
            aria-label="القائمة"
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
            <div className="max-w-4xl mx-auto px-4">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm md:text-base font-bold transition-all transform hover:scale-105 ${selectedCategory === category
                        ? 'bg-[#F8E71C] text-[#2B3A8F] shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative max-w-xl mx-auto">
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
                    aria-label="مسح البحث"
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
                      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#1E90D8] group cursor-pointer relative flex flex-col justify-between"
                    >
                      <div>
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
                        <div className="bg-gradient-to-br from-[#2B3A8F] to-[#1E90D8] w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>

                        {/* Category & Level Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="bg-[#1E90D8]/10 text-[#1E90D8] text-xs font-bold px-2.5 py-1 rounded-md">
                            {course.category}
                          </span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                            <GraduationCap className="w-3.5 h-3.5 text-[#2B3A8F]" />
                            {course.level}
                          </span>
                        </div>

                        <h4 className="text-xl md:text-2xl font-bold text-[#2B3A8F] mb-2 md:mb-3">{course.title}</h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{course.description}</p>
                      </div>

                      <div>
                        {/* Instructor row */}
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-3 font-semibold">
                          <User className="w-4 h-4 text-[#1E90D8] flex-shrink-0" />
                          <span>المدرب: {course.instructor}</span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-1 md:gap-2 text-[#2B3A8F]">
                            <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-bold text-sm md:text-base">{course.price} ل.س</span>
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+963983365693?text=مرحباً، أود الاستفسار عن الدورات المتاحة في مركز السفينة"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all transform hover:scale-110 flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-sm font-bold">
          تواصل معنا
        </span>
      </a>

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
            <div className="sticky top-0 bg-gradient-to-br from-[#2B3A8F] to-[#1E90D8] text-white p-6 md:p-8 rounded-t-3xl z-10">
              <button
                onClick={() => setSelectedCourse(null)}
                aria-label="إغلاق"
                className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="bg-white/20 p-3 md:p-4 rounded-2xl">
                  <selectedCourse.icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {selectedCourse.category}
                    </span>
                    {selectedCourse.isOpen ? (
                      <span className="inline-flex items-center gap-1.5 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-xs md:text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        متاح للتسجيل
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-xs md:text-sm">
                        <XCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        مغلق حالياً
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedCourse.title}</h3>
                  <p className="text-base md:text-lg text-gray-100">{selectedCourse.description}</p>
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

                <div className="border-t pt-4 md:pt-6">
                  {selectedCourse.isOpen ? (
                    <a
                      href={`https://wa.me/+963983365693?text=مرحباً، أرغب بالتسجيل في دورة ${selectedCourse.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#F8E71C] text-[#2B3A8F] py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#E5D419] transition-colors shadow-lg text-center"
                    >
                      سجل الآن في هذه الدورة
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/+963983365693?text=مرحباً، أرغب بالاستفسار وحجز مقعد للدفعة القادمة في دورة ${selectedCourse.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#2B3A8F] text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#1E90D8] transition-colors shadow-lg text-center"
                    >
                      استفسر أو احجز مقعدك للدفعة القادمة عبر واتساب
                    </a>
                  )}
                </div>
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
