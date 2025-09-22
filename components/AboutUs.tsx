'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const AboutUs = () => {
  const content = [
    {
      title: 'تعريف الشركة وتاريخها',
      description: 'نحن شركة رائدة في مجال الحلول المالية الرقمية، تأسست عام 2020 بهدف تبسيط إدارة الأموال للأفراد والشركات الصغيرة. منذ بدايتنا، التزمنا بتقديم أدوات مبتكرة وسهلة الاستخدام لمساعدة عملائنا على تحقيق أهدافهم المالية.'
    },
    {
      title: 'الرؤية والرسالة',
      description: 'رؤيتنا هي أن نكون الشريك المالي الموثوق به للجميع، من خلال تمكينهم من اتخاذ قرارات مالية ذكية ومستنيرة. رسالتنا هي توفير منصة شاملة لإدارة الأموال تجمع بين التكنولوجيا المتطورة والخبرة المالية لتقديم أفضل تجربة للمستخدمين.'
    },
    {
      title: 'نقاط القوة',
      items: [
        'خبرة واسعة في تطوير الحلول المالية الرقمية.',
        'جودة عالية في الخدمات المقدمة ودعم العملاء.',
        'سرعة وفعالية في معالجة البيانات وتوفير التحليلات.'
      ]
    },
    {
      title: 'صور حقيقية لفريق العمل أو المشاريع المنجزة',
      description: 'نؤمن بالشفافية والعمل الجماعي. إليك لمحة عن فريقنا المتفاني وبعض من مشاريعنا الناجحة التي نفخر بها.'
    }
  ];

  return (
    <section id='aboutUs' className="py-16 px-4  bg-gradient-to-br from-[#9ee2ff] via-slate-200 to-slate-500 text-white text-right" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-900 font-bold mb-12 text-center">من نحن</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-8 mb-10 h-60 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#20BDFF]">{item.title}</h3>
                  {item.description && <p className="text-gray-900 text-lg">{item.description}</p>}
                  {item.items && (
                    <ul className="list-disc list-inside text-gray-900 text-lg mt-4">
                      {item.items.map((listItem, idx) => (
                        <li key={idx}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Placeholder for images if needed */}
                {item.title === 'صور حقيقية لفريق العمل أو المشاريع المنجزة' && (
                  <div className="mt-6 text-center text-gray-400">
                    {/* Add actual image components here */}
                    <p>سيتم إضافة صور هنا لاحقًا</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;