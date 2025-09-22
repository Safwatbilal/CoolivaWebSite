import React from 'react';
import { 
  Snowflake, 
  Truck, 
  Settings, 
  Wrench ,
  TowerControl,
  WaypointsIcon
} from 'lucide-react';

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
    }  ,  {
      id: 5,
      title: " نظام مراقبة درجة الحرارة",
      description: "صيانة دورية وسريعة. عقود سنوية أو حسب الطلب.",
      icon: WaypointsIcon,
      iconBg: "bg-pink-500",
      iconColor: "text-white"
    }
     ,  {
      id: 6,
      title: "صيانة شاملة",
      description: "صيانة دورية وسريعة. عقود سنوية أو حسب الطلب.",
      icon: Wrench,
      iconBg: "bg-yellow-500",
      iconColor: "text-white"
    }
  ];

  return (
    <section id='ourServices' className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-200 to-slate-300 py-16 px-4 " dir='rtl'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#5433FF] backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-300 text-sm font-medium">✨ الخدمات</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            قوة لا محدودة لإدارة حياتك
          </h2>
          
          <p className="text-gray-900 text-lg max-w-3xl mx-auto leading-relaxed">
            اكتشف الإمكانيات الكاملة مع اشتراك <span className='text-[#20BDFF]'> Pro </span>واستمتع بحرية كاملة بدون حدود
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#20BDFF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-900 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
