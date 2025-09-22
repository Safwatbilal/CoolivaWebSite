'use client'
import { IoSparkles } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar } from "react-icons/fa";
import HeroTable from "./HeroTable"; // Corrected import
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="heroSection" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Green Circle */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"></div>
        {/* Purple Circle */}
        <div className="absolute top-20 right-32 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"></div>
        {/* Orange Circle */}
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-[#5433FF]/30 rounded-full blur-3xl"></div>
        {/* Pink Circle */}
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl"></div>
        {/* Blue Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        {/* Additional ambient circles */}
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/3 w-56 h-56 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-20 md:pt-18 pl-0 md:pl-20 overflow-hidden">
        <AnimatePresence>
          <div className="flex pt-50 md:pt-0">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 15, repeatDur: Infinity }}
              exit={{ y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="-mr-3 mt-118 hidden md:flex"
            >
              <FaRegStar className="text-gray-500 bg-[#ffeb3b] text-4xl font-bold p-2 rounded-4xl shadow-lg shadow-[#ffeb3b]/30" />
            </motion.div>
            <div className="flex items-center justify-center w-50 h-50 md:w-110 md:h-130 rounded-lg bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
              <HeroTable />
            </div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 15, repeatDur: Infinity }}
              exit={{ y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="-ml-3 hidden md:flex"
            >
              <FaRegSnowflake className="text-white bg-[#5433FF] text-4xl p-2 rounded-4xl shadow-lg shadow-[#5433FF]/30" />
            </motion.div>
          </div>
        </AnimatePresence>

        <div className="px-5 py-2 ml-0 md:ml-30" dir="rtl">
          <h1 className="text-4xl font-bold px-2 py-3 text-white">عش شتاؤك بالصيف</h1>
          <p className="text-gray-300 px-2 py-3">
            نضمن لك جودة التبريد في كل مشروع !
          </p>
          <a
            href={"#ourServices"}
            className="flex items-center md:justify-start justify-center"
          >
            <button
              className="px-8 py-2 mt-5 text-lg rounded-md bg-[#20BDFF] cursor-pointer flex gap-2 shadow-lg shadow-[#20BDFF]/30"
              type="button"
            >
              اكتشف الآن
              <IoSparkles className="text-[#ffeb3b] text-2xl" />
            </button>
          </a>
        </div>
      </div>
      <motion.div
        className="relative z-10 my-3 py-4"
        initial={{ y: 0 }}
        animate={{ y: 15, repeatDur: Infinity }}
        exit={{ y: 0 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeIn",
        }}
      >
        <a href={"#aboutUs"}>
          <FaArrowDown className="text-gray-200 text-sm" />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;


