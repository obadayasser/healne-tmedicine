import Image from "next/image";
import stro from "../../public/image/sssssss.webp";

export default function Story() {
  return (
    <section className="flex items-center flex-col py-20 px-4 overflow-hidden" >
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        <span className="text-blue-400">قصة HealNet:</span> تعرف علينا
      </h1>

      <div
        className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* صورة القصة */}
        <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
          <Image
            src={stro}
            alt="قصة HealNet"
            className="w-120 h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* نص القصة */}
        <div
          className="w-full md:w-1/2 text-gray-700 text-lg leading-relaxed text-justify"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <p>
            HealNet ليست مجرد خدمة طبية عبر الإنترنت؛ إنها مبادرة نحو رعاية صحية
            متاحة وفعالة ورحيمة للجميع. أسسنا فريقًا من الأطباء المتميزين،
            وأخصائيي الرعاية الصحية، وخبراء التكنولوجيا، ونسعى جاهدين لتقديم
            رعاية طبية استثنائية لكم مباشرةً أينما كنتم.
            <br />
            <br />
            منصتنا مبنية على ركائز الثقة، والابتكار، والتركيز على المريض، مما
            يضمن تخصيص كل تفاعل معكم، وتصميم كل خطة علاجية بما يتناسب مع
            احتياجاتكم الفريدة.
            <br />
            <br />
            بفضل شبكتنا من الممارسين المرخصين من مختلف التخصصات الطبية، نضمن لكم
            رعاية شاملة بنقرة زر واحدة.
          </p>
          <button
            className="bg-gradient-to-r from-blue-400 mt-10 to-blue-500 text-white px-10 py-3 rounded-lg text-2xl shadow hover:from-blue-400 transition"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            تعرف على المزيد عنا
          </button>
        </div>
      </div>
    </section>
  );
}
