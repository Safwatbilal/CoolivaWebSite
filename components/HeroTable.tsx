import React from "react";

const Dashboard = () => {
  return (
    <div className="pb-2 sm:pb-4">
      {/* Top section */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white text-sm sm:text-lg">Φ</span>
          <span className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs">
            ✓
          </span>
        </div>
      </div>

      {/* Balance card */}
      <div className="bg-gradient-to-br from-[#5433FF] to-[#20BDFF] rounded-lg sm:rounded-xl p-3 sm:p-6 mb-3 sm:mb-4 text-white flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm">عدد المشتركين بخدماتنا</p>
          <p className="text-lg sm:text-3xl font-bold"> 25,430</p>
        </div>
        <svg
          className="w-5 h-5 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </div>

      {/* Income + Expenses */}
      <div className="grid grid-cols-2 gap-2 mb-3 sm:gap-4 sm:mb-4">
        <div className="bg-[#1e293b] rounded-lg sm:rounded-xl p-2 sm:p-4 text-white">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <p className="text-xs sm:text-sm">البرادات المتنقلة</p>
          </div>
          <p className="text-base sm:text-xl font-bold"> 37,880</p>
        </div>

        <div className="bg-[#1e293b] rounded-lg sm:rounded-xl p-2 sm:p-4 text-white">
          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <p className="text-xs sm:text-sm">غرف التبريد</p>

          </div>
          <p className="text-base sm:text-xl font-bold"> 12,450</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="space-y-2 sm:space-y-3">
        {/* Item 1 */}
        <div className="bg-[#1e293b] rounded-lg sm:rounded-xl p-2 sm:p-4 text-white flex items-center justify-between">
          <p className="text-sm sm:text-lg ">450</p>
          <div className="flex items-center gap-2">
            <div>
              <p className="text-xs sm:text-sm">فروعنا</p>
            </div>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-[#1e293b] rounded-lg sm:rounded-xl p-2 sm:p-4 text-white flex items-center justify-between">
          <p className="text-sm sm:text-lg">120</p>
          <div className="flex items-center gap-2">
            <div>
              <p className="text-xs sm:text-sm">موظفينا</p>

            </div>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-[#1e293b] rounded-lg sm:rounded-xl p-2 sm:p-4 text-white flex items-center justify-between">
          <p className="text-sm sm:text-lg ">10.0</p>
          <div className="flex items-center gap-2">
            <div>
              <p className="text-xs sm:text-sm">تقييمنا</p>
            </div>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
