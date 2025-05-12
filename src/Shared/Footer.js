import { LucideMail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12 text-sm setbg2 text-gray-900 text-center">
      <div className=" flex flex-col items-cente ">
        <span className="text-2xl font-bold">
          Zaman | PMP<sup>®</sup>
        </span>
        <a href="mailto:greatstackdev@gmail.com" className="text-sm mt-2 ">
          <LucideMail className="inline-block mr-1" /> zaman@gmail.com
        </a>
      </div>

      <div className="divider  hover:border-pink-600 transition-all duration-200"></div>

      <div className="flex justify-between max-w-7xl mx-auto space-x-4 items-center">
        <p className="">© 2025 William Mark. All rights reserved.</p>
        <div className="flex gap-8  text-gray-900 text-sm">
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>
      </div>
    </footer>
  );
}
