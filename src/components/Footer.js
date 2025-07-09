import Image from "next/image";
import logo from "@/../public/image/Group 23.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6 text-right pt-35">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="space-y-4">
          <Image src={logo} alt="HealNet Logo" width={150} height={60} />
          <p className="text-sm text-gray-600">
            استمتع بالرعاية الطبية المخصصة من راحة منزلك.
          </p>
        </div>

        <div>
          <h5 className="font-bold mb-2 text-lg text-blue-600">الدعم</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/">ابدء</Link></li>
            <li><Link href="/">الأسئلة الشائعة</Link></li>
            <li><Link href="/">مقالات المساعدة</Link></li>
            <li><Link href="/">الإبلاغ عن مشكلة</Link></li>
            <li><Link href="/">اتصل بمكتب المساعدة</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2 text-lg text-blue-600">الخدمات</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/">حجز المواعيد</Link></li>
            <li><Link href="/">الاستشارات الإلكترونية</Link></li>
            <li><Link href="/">الوصفات الطبية</Link></li>
            <li><Link href="/">إعادة صرف الأدوية</Link></li>
            <li><Link href="/">الملاحظات الطبية</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2 text-lg text-blue-600">الشؤون القانونية</h5>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/">الشروط والأحكام</Link></li>
            <li><Link href="/">سياسة الخصوصية</Link></li>
            <li><Link href="/">إشعار ملفات تعريف الارتباط</Link></li>
            <li><Link href="/">تفضيلات ملفات تعريف الارتباط</Link></li>
            <li><Link href="/">مركز الثقة</Link></li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-blue-300" />

      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <FaFacebook className="text-blue-500 text-xl cursor-pointer" />
          <FaInstagram className="text-pink-500 text-xl cursor-pointer" />
          <FaLinkedin className="text-blue-700 text-xl cursor-pointer" />
          <FaYoutube className="text-red-500 text-xl cursor-pointer" />
        </div>
        <p>© 2024 HealNet. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
