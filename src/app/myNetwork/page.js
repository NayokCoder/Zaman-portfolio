"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const network = [
  {
    name: "Brooklyn Simmons",
    role: "Creative Director",
    department: "Design",
    joined: "30th Jan, 2022",
    projects: 15,
    lastSeen: "2m ago",
    image: "/assets/istockphoto-1682296067-612x612.jpg",
    localTime: "2:30 AM",
    active: true,
    bio: "Brooklyn is a seasoned creative leader, driving visual innovation across all design verticals.",
  },
  {
    name: "Jane Cooper",
    role: "Policy Advisor",
    department: "Strategy",
    joined: "12th Jul, 2021",
    projects: 10,
    lastSeen: "5m ago",
    image: "/assets/istockphoto-476776588-612x612.jpg",
    localTime: "3:15 AM",
    active: false,
    bio: "Jane has led impactful policy initiatives across global teams for over 8 years.",
  },
  // Add more if needed...
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-800 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">💼 Meet Your Dream Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Connect with top talent and build something amazing together.</p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {network.map((person, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-6" onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.02, // Slightly scale the card on hover for a smooth effect
                  y: -5, // Move the card up a little on hover
                }}
                transition={{
                  duration: 0.4, // Smoother, more subtle animation for the hover
                  ease: "easeInOut",
                }}
                className="w-full lg:w-2/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-6 transition-all"
              >
                <Image src={person.image} alt={person.name} width={80} height={80} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-white">{person.name}</h2>
                    {person.active && <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" title="Online now" />}
                  </div>
                  <p className="text-sm text-gray-300">
                    {person.role} — {person.department}
                  </p>
                  <div className="mt-2 text-sm text-gray-400 flex justify-between">
                    <span>✅ {person.projects} Projects</span>
                    <span>🕒 {person.lastSeen}</span>
                  </div>
                </div>
              </motion.div>

              {/* Side Info Panel */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="w-full lg:w-1/3 bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl backdrop-blur-md"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>
                    <p className="text-gray-300 mb-3">
                      {person.role} - {person.department}
                    </p>
                    <p className="text-sm text-gray-400">{person.bio}</p>
                    <div className="mt-4 text-sm text-gray-400 space-y-1">
                      <div>
                        <strong>Joined:</strong> {person.joined}
                      </div>
                      <div>
                        <strong>Local Time:</strong> {person.localTime}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
