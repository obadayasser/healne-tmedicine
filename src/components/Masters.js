"use client";

import { useEffect } from "react";
import Image from "next/image";
import saq from "../../public/image/w.webp";
import ssaq from "../../public/image/r.webp";
import { FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Masters() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col items-center pt-20 px-4 text-center overflow-hidden">
      <h1 className="text-black text-3xl">
        <span className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
          ماجستير الطب:
        </span>
        <br />
        تعرف على فريقنا من المتخصصين
      </h1>

      <p className="md:w-[600px] pt-10">
        فريقنا من المتخصصين في طليعة الابتكار الطبي. يتمتع كل متخصص بمزيج فريد
        من الخبرة والتعاطف والخبرة لضمان صحتكم في أيدٍ أمينة.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 items-center mt-16 bg-gradient-to-tr from-blue-400 to-blue-500 p-6 pt-0 min-h-[300px] py-10 rounded-2xl shadow-lg w-full max-w-3xl text-right gap-4">
        <div
          className="md:col-span-4 md:mt-0"
          data-aos="fade-right"
        >
          <Image
            src={ssaq}
            alt="Doctor Image"
            className="object-cover relative left-5 bottom-4"
          />
        </div>
        <div className="md:col-span-8 space-y-4" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-white">
            الدكتورة سارة جونسون (طبيبة قلب)
          </h2>
          <p className="text-sm leading-relaxed text-white">
            الدكتورة جونسون متخصصة في أمراض القلب، تجمع بين الرعاية الرحيمة والمعرفة
            العميقة. تهدف دائمًا إلى الوقاية وتحسين نمط حياة المريض من خلال أحدث
            التقنيات والاستشارات الشخصية.
          </p>
          <button className="flex cursor-pointer items-center gap-2 px-9 py-2 rounded-xl text-2xl bg-white text-blue-500 font-semibold shadow-md hover:opacity-90 transition">
            حجز موعد
            <FaPhone />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 items-center mt-16 bg-gradient-to-tr from-blue-400 to-blue-500 p-6 pt-0 min-h-[300px] py-10 rounded-2xl shadow-lg w-full max-w-3xl text-right gap-4">
        <div
          className="md:col-span-4 md:mt-0"
          data-aos="fade-right"
        >
          <Image
            src={saq}
            alt="Doctor Image"
            className="object-cover relative left-5 bottom-4"
          />
        </div>
        <div className="md:col-span-8 space-y-4" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-white">
            الدكتور مارك لي (طبيب أمراض جلدية)
          </h2>
          <p className="text-sm leading-relaxed text-white">
            الدكتور لي رائد في مجال طب الأمراض الجلدية، يقدم حلولاً مبتكرة للمشاكل
            الجلدية مع اهتمام خاص براحة المريض ودقته في التشخيص والعلاج.
          </p>
          <button className="flex cursor-pointer items-center gap-2 px-9 py-2 rounded-xl text-2xl bg-white text-blue-500 font-semibold shadow-md hover:opacity-90 transition">
            حجز موعد
            <FaPhone />
          </button>
        </div>
      </div>
    </section>
  );
}
