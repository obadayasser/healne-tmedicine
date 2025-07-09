import Image from "next/image";
import sss from "../../public/image/Doctor-PNG-Images 1.png";
import sa from "../../public/image/Group 27.png";

export default function Platform() {
  return (
    <section className="py-20 px-4">
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        كيف <span className="text-blue-400">تعمل</span> منصتنا
      </h1>

      <p
        className="text-gray-500 text-center max-w-2xl mx-auto mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        خطوات بسيطة للوصول إلى أفضل رعاية صحية.
      </p>

      <div
        className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-full md:w-1/2 relative" data-aos="zoom-in">
          <Image
            src={sss}
            alt="كيف تعمل المنصة"
            className="w-105 h-auto rounded-xl"
          />
          <Image
            src={sa}
            alt="+"
            className="absolute top-40 w-25 animate-pulse"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800 text-lg flex flex-col gap-8">
          <div className="flex gap-4 pt-5 items-start" data-aos="fade-left">
            <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow">
              1
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                أنشئ ملفك الشخصي
              </h2>
              <p className="text-gray-500">
                سجّل وأدخل تاريخك الطبي بأمان. إنشاء ملفك الشخصي بهذه الطريقة يضمن لك البقاء على اطلاع دائم بآخر المستجدات.
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-5 items-start" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow">
              2
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">اختر خدمتك</h2>
              <p className="text-gray-500">
                اختر من بين خدماتنا واحجز استشارة بسهولة تامة.
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-5 items-start" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow">
              3
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">تعرف على طبيبك</h2>
              <p className="text-gray-500">
                استشارة افتراضية أو حضور شخصي مع أطباء معتمدين.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
