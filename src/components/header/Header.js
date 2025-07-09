"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bg from "@/../public/image/bg.png";
import top from "@/../public/image/e.png";
import {
  FaApple,
  FaAmazon,
  FaGoogle,
  FaSpotify,
  FaWifi,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCheck,
} from "react-icons/fa";
import sok from "@/../public/image/Ellipse-6.webp";
import sok2 from "@/../public/image/Ellipse-7.webp";
import sok3 from "@/../public/image/Ellipse-8.webp";
import sok4 from "@/../public/image/Ellipse-9.webp";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div data-aos="fade-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-gray-800 mb-6">
              شريكك <span className="text-blue-400">الموثوق في مجال</span>
              <br />
              الرعاية الصحية الرقمية.
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-6">
              <span className="text-blue-400 font-semibold">نعزز صحتك في كل خطوة.</span>{" "}
              استمتع برعاية طبية مخصصة من راحة منزلك. تواصل مع{" "}
              <span className="text-blue-400 font-semibold">أطباء معتمدين،</span>{" "}
              أو أدر وصفاتك الطبية، وحجز مواعيدك بسهولة. هل أنت مستعد{" "}
              <span className="text-blue-400 font-semibold">للعناية بصحتك؟</span>{" "}
              ابدأ الآن أو احجز موعدًا اليوم.
            </p>

            <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-white px-20 py-3 rounded-lg text-3xl shadow hover:from-blue-500 hover:to-blue-700 transition">
              حجز موعد
            </button>
          </div>

          <div
            className="relative w-full max-w-md mx-auto"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 scale-90 translate-y-13">
              <Image
                src={bg}
                alt="bg"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative z-10">
              <div className="absolute top-4 right-4 bg-white px-4 py-3 rounded-lg shadow-md flex flex-col items-center gap-2">
                <div className="flex -space-x-4">
                  <Image src={sok} alt="user1" className="w-10 h-10" width={10} height={10} priority />
                  <Image src={sok2} alt="user2" className="w-10 h-10" width={10} height={10} priority />
                  <Image src={sok3} alt="user3" className="w-10 h-10" width={10} height={10} priority />
                  <Image src={sok4} alt="user4" className="w-10 h-10" width={10} height={10} priority />
                </div>
                <h2 className="text-blue-500 text-sm font-semibold mt-1">عملاء سعداء +2400</h2>
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-500 text-xs ml-1">(4.7)</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <h2 className="text-blue-500 text-sm font-semibold">حجز موعدك بسهولة</h2>
              </div>

              <Image
                src={top}
                alt="main"
                width={380}
                height={380}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-400 text-lg mb-4">موثوق به من قبل الملايين في جميع أنحاء العالم:</p>
          <div className="flex justify-center gap-8 text-3xl text-gray-500">
            <FaApple />
            <FaAmazon />
            <FaGoogle />
            <FaSpotify />
            <FaWifi />
          </div>
        </div>
      </section>

      <section className="flex flex-col py-12 px-4 md:px-20" data-aos="fade-up">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6 text-start">
          احجز موعدك بسهولة في ثلاث خطوات بسيطة.
        </h2>

        <div className="w-full max-w-5xl rounded-xl px-6 py-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center bg-gray-50 rounded-md px-4 py-3 w-full md:flex-1">
            <FaEnvelope className="text-blue-400 ml-3" />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 outline-none bg-transparent text-sm text-right placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center bg-gray-50 rounded-md px-4 py-3 w-full md:flex-1">
            <FaPhone className="text-blue-400 ml-3" />
            <input
              type="tel"
              placeholder="رقم الهاتف"
              className="flex-1 outline-none bg-transparent text-sm text-right placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center bg-gray-50 rounded-md px-4 py-3 w-full md:flex-1">
            <FaCalendarAlt className="text-blue-400 ml-3" />
            <input
              type="date"
              className="flex-1 outline-none bg-transparent text-sm text-right text-gray-400"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-blue-400 text-white font-semibold px-10 py-3 rounded-md flex items-center gap-2 transition text-lg shadow-md">
            احجز الآن <FaCheck />
          </button>
        </div>
      </section>
    </>
  );
}
