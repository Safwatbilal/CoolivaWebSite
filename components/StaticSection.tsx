"use client";

import React from "react";
import { CheckCircle, Users, Calendar, Grid } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { id: 1, icon: Grid, value: "+100", label: "عدد المشروعات المنفذة" },
    { id: 2, icon: CheckCircle, value: "4.9 / 5", label: "رضا العملاء" },
    { id: 3, icon: Calendar, value: "+5", label: "سنوات الخبرة" },
    { id: 4, icon: Users, value: "+25", label: "قطاعاً نخدمه" },
  ];

  return (
    <section className="py-16  bg-gradient-to-br from-[#9ee2ff] via-slate-200 to-slate-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-md">
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-indigo-600" />
                </div>

                <div>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900">{s.value}</p>
                  <p className="mt-2 text-sm text-gray-500">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
