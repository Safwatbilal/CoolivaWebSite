
import { 
  Clock, 
  MessageCircle, 
  Shield 
} from 'lucide-react';

const AfterSalesSection = () => {
  const services = [
    {
      id: "01",
      title: "سرعة الاستجابة",
      description: "شرح بسيط عن سرعة الاستجابة لتلبية احتياجاتكم في أسرع وقت ممكن مع ضمان الجودة العالية.",
      icon: Clock,
      iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
      iconColor: "text-white",
      numberColor: "text-blue-500"
    },
    {
      id: "02", 
      title: "قنوات تواصل مباشرة",
      description: "قنوات تواصل مباشرة مع الدعم الفني للحصول على المساعدة الفورية والإجابة على جميع استفساراتكم.",
      icon: MessageCircle,
      iconBg: "bg-gradient-to-br from-purple-400 to-pink-600",
      iconColor: "text-white",
      numberColor: "text-purple-500"
    },
    {
      id: "03",
      title: "سياسة الضمان",
      description: "سياسة الضمان الشاملة التي تضمن حقوقكم وتوفر لكم الحماية الكاملة لجميع خدماتنا ومنتجاتنا.",
      icon: Shield,
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-600",
      iconColor: "text-white",
      numberColor: "text-green-500"
    }
  ];

  return (
    <section id='afterSale' className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 mb-8">
            <span className="text-blue-600 text-sm font-medium">🔹 خدمة ما بعد البيع</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            كيف يعمل كوليفا
          </h2>
          
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            ثلاث خطوات بسيطة لبناء رحلتك نحو حياة أكثر تنظيماً وذكاءً
          </p>
        </div>

        {/* Services Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative text-center"
              >
                {/* Step Number and Arrow */}
                <div className="flex items-center justify-center mb-8">
                  {/* Large Step Number */}
                  <div className="relative">
                    <span className={`text-8xl md:text-9xl font-bold ${service.numberColor} opacity-20 select-none`}>
                      {service.id}
                    </span>
                  </div>
                  
                  {/* Arrow (only for first two items) */}
                  {index < services.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 translate-x-8">
                      <svg 
                        className="w-8 h-8 text-slate-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${service.iconBg} rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-10 h-10 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base max-w-sm mx-auto">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute inset-0 bg-white/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 transform scale-105" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AfterSalesSection;

