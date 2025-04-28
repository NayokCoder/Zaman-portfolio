import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";

const AboutMe = () => {
  return (
    <section className="bg-slate-50">
      <div className=" py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-4xl font-ovo mb-4">About me</h2>

        <div className="flex flex-col md:flex-row mt-16  gap-10 ">
          <Image src="/assets/Profile.png" alt="Profile" width={512} height={512} className="w-sm h-[512px] rounded-2xl object-cover" />
          <div className="space-y-10  text-left">
            <p className="text-gray-600">Throughout my career, I’ve successfully managed and delivered high-impact projects like myGov ITSM (used by 33,000+ offices), VAT Online (NBR), and digital solutions under the a2i Program. My leadership has helped transform legacy systems into modern, scalable platforms—aligning technical solutions with national goals and global best practices.</p>
            <div className="flex w gap-4 text-left">
              <div className="border border-gray-300 w-1/3 p-4 rounded-lg shadow-sm space-y-3 py-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <GrAchievement className="text-2xl font-normal" />
                <h4 className="font-semibold">Achievements</h4>
                <p className="text-sm text-gray-600">Member of PMI Bangladesh Chapter</p>
              </div>

              <div className="border border-gray-300 w-1/3 p-4 rounded-lg shadow-sm space-y-3 py-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <FaUserGraduate className="text-2xl font-normal" />
                <h4 className="font-semibold">Academic Qualification</h4>
                <p className="text-sm text-gray-600">Master of Business Administration, Executive Program 2017 </p>
              </div>

              <Link href="/projects" className="border border-gray-300 w-1/3 p-4 rounded-lg shadow-sm space-y-3 py-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <MdWorkOutline className="text-2xl font-normal" />
                <h4 className="font-semibold">Projects</h4>
                <p className="text-sm text-gray-600">Built more than 5 projects</p>
              </Link>
            </div>
            <div className="">
              <p className="mb-2 text-gray-600 font-semibold">Social Media</p>
              <div className="flex j gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border border-gray-300 p-4 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                  <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border border-gray-300 p-4 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                  <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
                </a>

                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="border border-gray-300 p-4 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                  <img src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
