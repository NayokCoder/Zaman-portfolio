import Image from "next/image";
import React from "react";

const Certificate = () => {
  const achievements = [
    {
      title: "Project Management Professional (PMP)®",
      issuer: "PMI, USA",
      year: "2021 (Renewed 2024)",
      image: "/assets/Cirtificate/5.png",
    },
  ];
  return (
    <div className="py-6 max-w-6xl mx-auto">
      {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 settext">Certificates</h1> */}
      <div className=" mt-10  flex justify-center ">
        {achievements.map((achievement, index) => (
          <div key={index} className=" rounded-xl  transition-all duration-300 hover: hover:scale-[1.02] cursor-pointer">
            <Image src={achievement.image} alt={achievement.title} width={700} height={300} className="  object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
