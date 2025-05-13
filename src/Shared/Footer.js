import { LucideMail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12 text-sm setbg text-white text-center">
      <div className=" flex flex-col items-cente ">
        <span className="text-3xl font-bold">
          Zaman | PMP<sup>®</sup>
        </span>
        <a href="mailto:greatstackdev@gmail.com" className="text-lg mt-2 ">
          <LucideMail className="inline-block  " /> zaman@gmail.com
        </a>
      </div>

      <div className="flex justify-between max-w-7xl mx-auto space-x-4 items-center border-t border-gray-300 pt-8 mt-8">
        <p className="">© 2025 William Mark. All rights reserved.</p>
        <div className="flex gap-8   text-sm">
          <a href="#">Terms of Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>
      </div>
    </footer>
  );
}
