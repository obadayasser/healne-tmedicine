"use client";

import Image from "next/image";
import lis from "@/../public/image/group.png";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {
  FaVideo,
  FaCalendarCheck,
} from "react-icons/fa";
import { useEffect } from "react";

export default function Services() {

    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
<section className="flex flex-col items-center pt-20 px-4 overflow-hidden">
  <h1
    className="text-3xl md:text-4xl font-bold text-center mb-4"
    data-aos="fade-up"
  >
    أفضل <span className="text-blue-400">الخدمات</span> التي نقدمها
  </h1>

  <p
    className="text-gray-400 text-center max-w-2xl mb-10 leading-relaxed"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    في عالمنا المتسارع...
  </p>

  <div className="mb-12" data-aos="zoom-in" data-aos-delay="200">
    <Image src={lis} alt="قائمة الخدمات الصحية" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-blue-300"
      data-aos="fade-left"
    >
      <FaVideo className="text-blue-400 text-3xl" />
      <h2 className="text-xl font-semibold text-blue-400">
        الاستشارات عبر الإنترنت
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        استشر نخبة من الأطباء...
      </p>
    </div>

    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-blue-300"
      data-aos="fade-right"
    >
      <FaCalendarCheck className="text-blue-400 text-3xl" />
      <h2 className="text-xl font-semibold text-blue-400">حجز المواعيد</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        اختر الوقت المناسب...
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full pt-10">
    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-blue-300"
      data-aos="zoom-in-up"
    >
      <FaVideo className="text-blue-400 text-3xl" />
      <h2 className="text-xl font-semibold text-blue-400">الوصفات الطبية</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        استقبل وجدد الوصفات...
      </p>
    </div>

    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-blue-300"
      data-aos="zoom-in-up"
      data-aos-delay="100"
    >
      <FaCalendarCheck className="text-blue-400 text-3xl" />
      <h2 className="text-xl font-semibold text-blue-400">ملاحظات طبية</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        احصل على الملاحظات...
      </p>
    </div>

    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 border border-blue-300"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      <FaCalendarCheck className="text-blue-400 text-3xl" />
      <h2 className="text-xl font-semibold text-blue-400">عبوات الأدوية</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        تخطى طوابير الصيدلية...
      </p>
    </div>
  </div>
</section>

  );
}
