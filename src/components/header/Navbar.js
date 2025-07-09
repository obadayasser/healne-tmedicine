"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/../public/image/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white shadow p-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* الشعار */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="الشعار"
            width={100}
            
            priority
            placeholder="blur"
          />
        </a>

        {/* الروابط */}
        <div className="hidden md:flex flex-1 justify-center gap-9 text-xl">
          <a href="/" className="text-black hover:text-blue-400">
            الرئيسية
          </a>
          <a href="#serv" className="text-black hover:text-blue-400">
            خدماتنا
          </a>
          <a href="#about" className="text-black hover:text-blue-400">
            معلومات عنا
          </a>
          <a href="#contact" className="text-black hover:text-blue-400">
            تواصل معنا
          </a>
        </div>

        <div className="hidden md:block">
          <button className="bg-gradient-to-l cursor-pointer from-blue-300 to-blue-400 text-white px-7 text-xl py-2 rounded-full shadow hover:opacity-90 transition">
            انضم إلينا
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-400 focus:outline-none text-3xl cursor-pointer "
        >
          ☰
        </button>
      </nav>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-xl px-4">
          <a href="/about" className="text-black hover:text-blue-400">
            الرئيسية
          </a>
          <a href="/services" className="text-black hover:text-blue-400">
            خدماتنا
          </a>
          <a href="/about" className="text-black hover:text-blue-400">
            معلومات عنا
          </a>
          <a href="/contact" className="text-black hover:text-blue-400">
            تواصل معنا
          </a>
          <button className="bg-gradient-to-l from-blue-300 to-blue-400 text-white cursor-pointer px-5 py-2 rounded-full shadow hover:opacity-90 transition">
            انضم إلينا
          </button>
        </div>
      )}
    </header>
  );
}
