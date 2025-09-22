'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CustomersReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "محمد علي",
      title: "مستشار مالي",
      rating: 5,
      review: "التحليلات المالية والتقارير على مستوى احترافي، مثالي للاستخدام الشخصي والتجاري.",
      avatar: "🏆"
    },
    {
      id: 2,
      name: "فاطمة أحمد",
      title: "مديرة مشاريع",
      rating: 5,
      review: "خدمة ممتازة وسرعة في التنفيذ، أنصح بها بشدة لجميع رجال الأعمال والمستثمرين.",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "عبدالله سالم",
      title: "رائد أعمال",
      rating: 5,
      review: "أفضل منصة استخدمتها للتحليل المالي، واجهة سهلة ونتائج دقيقة ومفصلة.",
      avatar: "🚀"
    },
    {
      id: 4,
      name: "نورا حسن",
      title: "محاسبة قانونية",
      rating: 5,
      review: "تطبيق رائع يوفر الوقت والجهد، التقارير شاملة ومفيدة جداً لاتخاذ القرارات المالية.",
      avatar: "📊"
    },
    {
      id: 5,
      name: "خالد محمود",
      title: "مستثمر",
      rating: 5,
      review: "منصة احترافية بكل معنى الكلمة، ساعدتني كثيراً في تحليل استثماراتي وتحقيق أرباح أفضل.",
      avatar: "💼"
    }
  ];

  const renderStars = (rating:number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id='reviews' className="relative min-h-screen bg-gradient-to-br from-slate-200 via-slate-200 to-slate-300 py-16 px-4 overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Blue Circle */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        {/* Purple Circle */}
        <div className="absolute top-20 right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        {/* Green Circle */}
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        {/* Pink Circle */}
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        {/* Orange Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ماذا يقول عملاؤنا؟
          </h2>
          
          <p className="text-gray-900 text-lg max-w-3xl mx-auto leading-relaxed">
            آراء حقيقية من مستخدمين حقيقيين استطاعوا تحسين حياتهم باستخدام كوليفا
          </p>
        </div>

        {/* Reviews Swiper */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-400 !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500 !opacity-100',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="text-center px-8 bg-gray-700 h-70 rounded-2xl py-5">
                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 max-w-3xl mx-auto" dir="rtl">
                    &quot;{review.review}&quot;
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex flex-col items-center mb-10">

                    <h4 className="text-lg font-bold text-white mb-1">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {review.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
      `}</style>
    </section>
  );
};
export default CustomersReviews
