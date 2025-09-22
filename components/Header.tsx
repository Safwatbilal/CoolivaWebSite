"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "@/public/logo.png";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger / close icons
const navList = [
  ["الرئيسية", "heroSection"],
  ["من نحن", "aboutUs"],
  ["الخدمات", "ourServices"],
  ["ما بعد البيع", "afterSale"],
  ["آراء الزبائن", "reviews"],
  ["اتصل بنا", "contactUs"],
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-2 transition-colors duration-300 ${
        !isScrolled ? "bg-[#1a2b3c]" : "bg-[#1a2b3c]/90 "
      }`}
      dir="rtl"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-white">كوليفا</h2>
          <Image src={logo} alt="cooliva logo" width={35} height={35} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 text-white text-sm">
          {navList.map(
            (item,index) => (
              <Link
                key={index}
                href={`#${item[1]}`}
                className="px-3 hover:text-[#5433FF] duration-200"
              >
                {item[0]}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 text-white">
                 {navList.map(
            (item,index) => (
              <Link
                key={index}
                href={`#${item[1]}`}
                className="px-3 py-2 hover:bg-[#5433FF] hover:text-white rounded-md transition"
                onClick={() => setIsOpen(false)} // close on click
              >
                {item[0]}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
