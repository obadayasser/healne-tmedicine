import { FaUser, FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex items-center flex-col justify-center pt-24 px-4 text-center space-y-6 " id="contact">
      <h1 className="text-3xl font-semibold">
        تواصل مع{" "}
        <span className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
          مكتب المساعدة
        </span>{" "}
        الخاص بنا للحصول على الدعم
      </h1>

      <p className="text-gray-500 max-w-xl">
        هل لديك أسئلة؟ هل تحتاج إلى مساعدة؟ فريق الدعم لدينا هنا لمساعدتك في كل
        خطوة:
      </p>

      <form className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl">
        <div className="relative w-full md:w-1/3">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          <input
            type="text"
            placeholder="أدخل اسمك الأول"
            className="border border-blue-400 rounded-lg px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="relative w-full md:w-1/3">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="border border-blue-400 rounded-lg px-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-400 text-white rounded-lg px-6 py-2 text-lg font-medium w-full md:w-auto cursor-pointer "
        >
          تواصل معنا
          <FaArrowLeft />
        </button>
      </form>
    </section>
  );
}
