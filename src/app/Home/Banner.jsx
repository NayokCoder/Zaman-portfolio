import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/header-bg-color.png')` }}>
      <Image src="/assets/Profile.png" width={160} height={160} alt="logo" className="h-40 w-40  rounded-full  " />
      <h2 className="text-lg text-gray-700 mb-2 mt-4">
        Hi! I’m <span className="font-semibold">MD.MONIRUZZAMAN</span>
      </h2>
      <h1 className="text-4xl md:text-6xl font-serif font-normal text-gray-900 leading-tight mb-4">
        Project Manager | Certified PMP<sup>®</sup>
      </h1>
      <p className="text-gray-600 max-w-xl mb-8">
        I’m a strategic and results-driven Project Manager with over 15 years of experience in the ICT sector. I specialize in leading large-scale software development, IT service delivery, and digital transformation initiatives across government, UNDP, and international platforms—including projects with <span className="font-semibold">a2i (UNDP) ,NBR (VAT Online Project)</span>, and global clients.
      </p>
      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">connect with me →</button>
        <button className="flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
          my resume <Download size={16} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
