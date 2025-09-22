import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className="bg-[#0e1525] text-gray-300 pt-16 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        {/* Column 1 - Company Info */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-blue-400 mb-4">كوليفا</h3>
          <p className="mb-4 leading-relaxed">
            نحول الأفكار إلى حقيقة من خلال أحدث تقنيات التبريد والتجميد، 
            والمحتوى الإبداعي، والتعليم التحويلي.
          </p>
          <p className="flex items-center gap-2">
            <span>📧</span> info@cooliva.com.sa
          </p>
          <p className="flex items-center gap-2">
            <span>📍</span> الرياض، المملكة العربية السعودية
          </p>
        </div>

        {/* Column 2 - Solutions */}
        <div>
          <h4 className="font-bold mb-4">الحلول</h4>
          <ul className="space-y-2">
            <li>غرف التبريد والتجميد</li>
            <li>سيارات النقل المبرد</li>
            <li>وحدات التبريد الصناعية</li>
            <li>الصيانة والعقود</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h4 className="font-bold mb-4">الشركة</h4>
          <ul className="space-y-2">
            <li>من نحن</li>
            <li>عملياتنا</li>
            <li>قصص النجاح</li>
            <li>الوظائف</li>
          </ul>
        </div>

        {/* Column 4 - Resources */}
        <div>
          <h4 className="font-bold mb-4">الموارد</h4>
          <ul className="space-y-2">
            <li>المدونة</li>
            <li>دراسات الحالة</li>
            <li>الوثائق</li>
            <li>الدعم</li>
          </ul>
        </div>

        {/* Column 5 - Legal */}
        <div>
          <h4 className="font-bold mb-4">قانوني</h4>
          <ul className="space-y-2">
            <li>سياسة الخصوصية</li>
            <li>الشروط والأحكام</li>
            <li>سياسة ملفات تعريف الارتباط</li>
            <li>اللائحة العامة لحماية البيانات</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 border-b border-gray-700">
        <div>
          <h4 className="text-lg font-bold mb-3">ابق على اطلاع مع كوليفا</h4>
          <p className="text-gray-400">
            احصل على أحدث الرؤى حول التكنولوجيا والإبداع والتطوير الشخصي مباشرة في صندوق الوارد.
            <br />
            لا توجد رسائل مزعجة، يمكن إلغاء الاشتراك في أي وقت.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-gradient-to-r from-blue-500 to-green-400 px-6 py-3 rounded-lg text-white font-bold">
            ← اشترك
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-400">تابعنا</p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
