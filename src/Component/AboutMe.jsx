import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

const AboutMe = () => {
  return (
    <section className="py-16 px-6 text-center max-w-6xl mx-auto">
      <p className="text-gray-900 mb-2 text-lg">Introduction</p>
      <h2 className="text-4xl font-ovo mb-4">About me</h2>

      <div className="flex flex-col md:flex-row mt-16  gap-10 ">
        <img src="/public/asset/Profile.png" alt="Profile" className="w-sm h-[512px] rounded-2xl object-cover" />
        <div className="space-y-12  text-left">
          <p className="text-gray-600">Throughout my career, I’ve successfully managed and delivered high-impact projects like myGov ITSM (used by 33,000+ offices), VAT Online (NBR), and digital solutions under the a2i Program. My leadership has helped transform legacy systems into modern, scalable platforms—aligning technical solutions with national goals and global best practices.</p>
          <div className="flex w gap-4 text-left">
            <div className="border border-gray-300 w-1/3 p-4 rounded-lg shadow-sm space-y-3 py-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
              <LuCodeXml className="text-2xl font-normal" />
              <h4 className="font-semibold">Languages</h4>
              <p className="text-sm text-gray-600">HTML, CSS, JavaScript, React.js, Next.js</p>
            </div>

            <div className="border border-gray-300 w-1/3 p-4 rounded-lg shadow-sm space-y-3 py-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
              <FaUserGraduate className="text-2xl font-normal" />
              <h4 className="font-semibold">Academic Qualification</h4>
              <p className="text-sm text-gray-600">Master of Business Administration, Executive Program 2017 </p>
            </div>

            <div className="border border-gray-300 w-1/3 p-4 rounded-lg shadow-sm space-y-3 py-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
              <MdWorkOutline className="text-2xl font-normal" />
              <h4 className="font-semibold">Projects</h4>
              <p className="text-sm text-gray-600">Built more than 5 projects</p>
            </div>
          </div>
          <div className="">
            <p className="mb-2 text-gray-600">Tools I use</p>
            <div className="flex j gap-4">
              <button className="border border-gray-300  p-4 rounded-lg shadow-sm space-y-3  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="VSCode" />
              </button>
              <button className="border border-gray-300  p-4 rounded-lg shadow-sm space-y-3  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <img src="https://img.icons8.com/color/48/firebase.png" alt="Firebase" />
              </button>
              <button className="border border-gray-300  p-4 rounded-lg shadow-sm space-y-3  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <img src="https://img.icons8.com/color/48/notion.png" alt="Notion" />
              </button>
              <button className="border border-gray-300  p-4 rounded-lg shadow-sm space-y-3  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-400/60">
                <img src="https://img.icons8.com/color/48/figma--v1.png" alt="Figma" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
