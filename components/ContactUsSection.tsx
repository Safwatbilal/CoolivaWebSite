import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section id="contactUs" dir="rtl" className="bg-gradient-to-br from-[#9ee2ff] via-slate-200 to-slate-200 py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">اتصل بنا</h2>
          <p className="text-gray-400">نموذج طلب عرض سعر ومعلومات التواصل</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-[#232c3f] p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">نموذج طلب عرض سعر</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full p-3 rounded-lg bg-[#1f2738] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-3 rounded-lg bg-[#1f2738] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full p-3 rounded-lg bg-[#1f2738] text-white placeholder-gray-400 focus:outline-none"
              />
              <textarea
                placeholder="تفاصيل الطلب"
                rows={4}
                className="w-full p-3 rounded-lg bg-[#1f2738] text-white placeholder-gray-400 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#20BDFF] rounded-lg hover:bg-blue-700 transition"
              >
                إرسال الطلب
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#232c3f] p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="text-blue-500 text-2xl">📞</span>
              <p>الهاتف: +966 123 456 789</p>
            </div>
            <div className="bg-[#232c3f] p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="text-blue-500 text-2xl">📧</span>
              <p>البريد الإلكتروني: info@example.com</p>
            </div>
            <div className="bg-[#232c3f] p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="text-blue-500 text-2xl">📍</span>
              <p>الموقع الجغرافي: الرياض - المملكة العربية السعودية</p>
            </div>
            <div className="bg-[#232c3f] p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="text-green-500 text-2xl">💬</span>
              <a
                href="https://wa.me/966123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                واتساب مباشر
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.902973508558!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0382a4c7b5c7%3A0x4d8a2e5b5bb0!2sRiyadh!5e0!3m2!1sen!2ssa!4v1616501234567"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
