"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Snowflake, Truck, Settings, Wrench, TowerControl, WaypointsIcon, Shield, Check } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "تركيب الألواح لغرفة التبريد",
      description: "توريد وتركيب جميع الأنواع بمقاسات مختلفة. استخدام أفضل العوازل والمعدات.",
      icon: Snowflake,
      iconBg: "bg-green-500",
      iconColor: "text-white"
    },
    {
      id: 2,
      title: "تصميم وتنفيذ غرف التبريد الصناعية و التجارية",
      description: "تجهيز وعزل سيارات النقل المبرد. تركيب وحدات تبريد عالية الكفاءة.",
      icon: Truck,
      iconBg: "bg-purple-500",
      iconColor: "text-white"
    },
    {
      id: 3,
      title: "انظمة التبريد المتنقلة",
      description: "تركيب وحدات تبريد متنوعة للمصانع، المخازن، المطاعم.",
      icon: Settings,
      iconBg: "bg-orange-500",
      iconColor: "text-white"
    },
    {
      id: 4,
      title: "لوحات التحكم",
      description: "صيانة دورية وسريعة. عقود سنوية أو حسب الطلب.",
      icon: TowerControl,
      iconBg: "bg-blue-500",
      iconColor: "text-white"
    },
    {
      id: 5,
      title: " نظام مراقبة درجة الحرارة",
      description: "صيانة دورية وسريعة. عقود سنوية أو حسب الطلب.",
      icon: WaypointsIcon,
      iconBg: "bg-pink-500",
      iconColor: "text-white"
    },
    {
      id: 6,
      title: "صيانة شاملة",
      description: "صيانة دورية وسريعة. عقود سنوية أو حسب الطلب.",
      icon: Wrench,
      iconBg: "bg-yellow-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="ourServices" className="py-16 px-6 bg-gradient-to-br from-[#9ee2ff] via-slate-200 to-slate-200 text-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-gray-900 mb-8">كل ما تحتاجه لإدارة حياتك المالية والشخصية في مكان واحد</h3>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
          className="relative"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <SwiperSlide key={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left card: mimic large rounded panel */}
                  <div className="relative">
                    <div className="rounded-2xl bg-[#5433FF] border border-slate-700/30 p-8 shadow-2xl shadow-black/60">
                      {/* small tag */}
                      <div className="flex justify-start mb-4">
                        <div className="inline-flex items-center gap-2 bg-[#06202a] px-3 py-1 rounded-full border border-slate-700/20">
                          <span className="w-3 h-3 rounded-full bg-emerald-400" />
                          <span className="text-sm text-emerald-300">{service.title.split(' ')[0]}</span>
                        </div>
                      </div>

                      {/* Icon + title + description in a prominent block */}
                      <div className="rounded-lg overflow-hidden mb-6">
                        <div className={`h-28 flex items-center px-6 ${service.iconBg.replace('bg-', 'bg-')} bg-gradient-to-r`}>
                          <div className="flex items-center gap-4">
                            <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`w-8 h-8 ${service.iconColor}`} />
                            </div>

                            <div>
                              <p className="text-sm text-gray-900">الخدمة</p>
                              <p className="text-2xl font-extrabold text-gray-900">{service.title}</p>
                              <p className="text-sm text-gray-900 mt-1 max-w-xl">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* three feature rows to match look */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between bg-[#091821] border border-slate-700/20 rounded-xl px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-[#0e2a2a] flex items-center justify-center text-sm text-gray-200">🔒</div>
                            <span className="text-sm text-gray-300">الفريق الميداني</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-400 text-sm">نشط</span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between bg-[#091821] border border-slate-700/20 rounded-xl px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-[#0e2a2a] flex items-center justify-center text-sm text-gray-200">🛡️</div>
                            <span className="text-sm text-gray-300">الفريق الفني </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-emerald-400 text-sm">نشط</span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between bg-[#091821] border border-slate-700/20 rounded-xl px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-[#0e2a2a] flex items-center justify-center text-sm text-gray-200">💾</div>
                            <span className="text-sm text-gray-300">الفريق الهندسي</span>
                          </div>
                          <div className="flex items-center gap-3">
                            
                            <span className="text-emerald-400 text-sm">نشط</span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* floating badges */}
                    <div className="absolute -right-6 top-8 flex flex-col items-center gap-3">


                    </div>
                  </div>

                  {/* Right column: title + description + checklist + controls */}
                  <div className="pl-6">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg">
                        <Shield className="w-10 h-10 text-gray-900" />
                      </div>

                      <div>
                        <h2 className="text-3xl font-extrabold">{service.title}</h2>
                        <p className="mt-3 text-gray-800 max-w-xl">{service.description}</p>

                        <ul className="mt-6 space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#06202a] flex items-center justify-center border border-slate-700/20">
                              <Check className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-gray-800">فريق الصيانة </span>
                          </li>

                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#06202a] flex items-center justify-center border border-slate-700/20">
                              <Check className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-gray-800">فريق التركيب</span>
                          </li>

                          <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#06202a] flex items-center justify-center border border-slate-700/20">
                              <Check className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-gray-800">الفريق الفني</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* empty left area for alignment with image */}
                      </div>

                      <div className="flex items-center gap-4">
                        <button className="swiper-prev bg-[#071827] px-4 py-2 rounded-xl border border-slate-700/20 text-white">السابق</button>
                        <button className="swiper-next bg-[#5433FF] px-4 py-2 rounded-xl text-black font-semibold">التالي</button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="mt-8 flex justify-center">
            <div className="swiper-pagination" />
          </div>
        </Swiper>
      </div>

      <style jsx>{`
        :global(.swiper-pagination) { margin-top: 1rem; }
        :global(.swiper-pagination-bullet) { width: 10px !important; height: 10px !important; opacity: 0.4; background: #334155 !important; }
        :global(.swiper-pagination-bullet-active) { opacity: 1; background: #10b981 !important; }
        :global(.swiper-button-prev), :global(.swiper-button-next) { display: none; }
      `}</style>
    </section>
  );
};

export default OurServicesSection;
