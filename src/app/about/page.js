"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaCheckCircle, FaProjectDiagram } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs"; // Dark Mode Icons

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = (direction = "up") => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0, y: direction === "up" ? 50 : 0 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const timelineItems = [
    {
      year: "2017",
      icon: <FaAward className="text-red-500 text-2xl" />,
      title: "Academic Qualifications",
      details: ["MBA (Executive) - East West University [CGPA 3.12]", "B.Sc in CSE - East West University [CGPA 3.37]", "HSC (Science) - Khanbahadur Ahsanullah College", "SSC (Science) - Town Sreepur S.C High School"],
    },
    {
      year: "2024",
      icon: <FaCheckCircle className="text-blue-500 text-2xl" />,
      title: "Professional Certifications",
      details: ["Talking to AI: Prompt Engineering for PMs", "Data Landscape of GenAI for PMs", "PMP® Certification – PMI USA (Renewed: 2024)", "Advanced Certificate for Management Professional – IBA, DU"],
    },
    {
      year: "2023",
      icon: <FaProjectDiagram className="text-green-500 text-2xl" />,
      title: "Training Summary",
      details: ["B-meet for Professionals – BASIS & University of Miyazaki", "Project Management Master Class for PMP", "➔ PMBOK Framework (6th & 7th Edition)", "➔ Agile, Scrum, PMP Content Update"],
    },
  ];

  return (
    <section className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"} min-h-screen py-4`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Toggle Button */}
        {/* <div className="flex justify-end mb-10">
          <button onClick={toggleDarkMode} className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:scale-105 transition">
            {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-blue-500" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div> */}

        {/* Section Title */}
        <motion.h2 className="text-5xl font-bold text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          About Me
        </motion.h2>

        {/* Intro Paragraphs */}
        <motion.div className="space-y-6 text-lg leading-relaxed mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <p>
            Hello! I’m <strong>MD. Moniruzzaman</strong>, a certified <strong>Project Management Professional (PMP®)</strong> with over <strong>15 years of experience</strong> in the ICT sector.
          </p>
          <p>
            I’ve successfully managed teams and multimillion-dollar projects for organizations like <strong>a2i (UNDP)</strong>, <strong>NBR (VAT Online Project)</strong>, and more. I’ve also worked with <strong>Microsoft</strong>, <strong>Tesla</strong>, and <strong>Apple</strong>.
          </p>
          <p>
            My expertise includes Agile, Scrum, DevOps, CI/CD, cloud technologies, and tools like <strong>JIRA, GitHub Actions, Docker, AWS, Azure</strong>.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative border-l-4  border-red-400 ml-6">
          {timelineItems.map((item, index) => (
            <motion.div key={index} className="mb-16 ml-8 relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(index % 2 === 0 ? "left" : "right")}>
              {/* Pulse Dot */}
              <div className="absolute -left-9 top-3">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
              </div>

              {/* Timeline Card */}
              <div className={`shadow-md rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">{item.icon}</div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    {/* Year Badge */}
                    <span className="text-sm setbg text-white px-3 py-1 rounded-full">{item.year}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-base ml-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
