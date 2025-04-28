import React from "react";
import Image from "next/image";

const achievements = [
  {
    title: "Project Management Professional (PMP)®",
    issuer: "PMI, USA",
    year: "2021 (Renewed 2024)",
    image: "/assets/Cirtificate/1.png",
  },
  {
    title: "Advanced Certificate for Management Professional (ACMP)",
    issuer: "IBA, University of Dhaka",
    year: "2018",
    image: "/assets/Cirtificate/2.png",
  },
  {
    title: "Talking to AI: Prompt Engineering for PMs",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/3.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/4.png",
  },
  {
    title: "Project Management Professional (PMP)®",
    issuer: "PMI, USA",
    year: "2021 (Renewed 2024)",
    image: "/assets/Cirtificate/5.png",
  },
  {
    title: "Advanced Certificate for Management Professional (ACMP)",
    issuer: "IBA, University of Dhaka",
    year: "2018",
    image: "/assets/Cirtificate/6.png",
  },
  {
    title: "Talking to AI: Prompt Engineering for PMs",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/7.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/8.png",
  },
  {
    title: "Project Management Professional (PMP)®",
    issuer: "PMI, USA",
    year: "2021 (Renewed 2024)",
    image: "/assets/Cirtificate/9.png",
  },
  {
    title: "Advanced Certificate for Management Professional (ACMP)",
    issuer: "IBA, University of Dhaka",
    year: "2018",
    image: "/assets/Cirtificate/10.png",
  },
  {
    title: "Talking to AI: Prompt Engineering for PMs",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/11.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/12.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/13.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/14.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/15.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/16.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/17.png",
  },
  {
    title: "Generative AI Overview for Project Managers",
    issuer: "PMI, USA",
    year: "2024",
    image: "/assets/Cirtificate/18.png",
  },
];

const AchievementsPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Achievements & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {achievements.map((cert, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-xl transition duration-300">
              <Image src={cert.image} alt={cert.title} width={400} height={300} className="rounded-md object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsPage;
