"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["overview", "activities", "clients"];

const Page = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsData, setProjectsData] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjectsData(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveTab("overview");
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Project References</h1>
          <p className="text-lg text-indigo-600 underline underline-offset-4">Annexure-1 (Project Preferences)</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300 }} key={project.id} onClick={() => openModal(project)} className="relative bg-white border border-gray-100 rounded-3xl p-6 cursor-pointer shadow-md hover:shadow-2xl group overflow-hidden" style={{ background: "linear-gradient(135deg, #ffffff, #f9fafb)" }}>
              {/* Glow Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-indigo-700 group-hover:text-indigo-800">{project.title}</h2>
                <p className="text-xs text-gray-400">ID: {project.id}</p>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>
                    <strong>Client:</strong> {project.client}
                  </li>
                  <li>
                    <strong>Tech Stack:</strong> {project.techStack}
                  </li>
                  <li>
                    <strong>Duration:</strong> {project.duration}
                  </li>
                  <li>
                    <strong>Website:</strong> {project.website}
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
              <motion.div className="relative bg-white rounded-3xl p-10 w-11/12 sm:w-3/4 lg:w-1/2 max-h-[85vh] overflow-y-auto shadow-2xl" initial={{ opacity: 0, scale: 0.9, rotateX: -15 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} exit={{ opacity: 0, scale: 0.9, rotateX: -15 }} transition={{ type: "spring", stiffness: 200, damping: 25 }} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:scale-125 transition" onClick={closeModal} aria-label="Close Modal">
                  ✕
                </button>

                {/* Title */}
                <motion.h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  {selectedProject.title}
                </motion.h2>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-8">
                  {tabs.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && <motion.div className="absolute inset-0 rounded-full bg-indigo-500 opacity-20" layoutId="tab-indicator" transition={{ type: "spring", stiffness: 500, damping: 30 }} />}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="space-y-6 text-gray-700">
                      <h3 className="text-lg font-bold">{selectedProject.title2}</h3>
                      <p dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
                    </motion.div>
                  )}
                  {activeTab === "activities" && (
                    <motion.div key="activities" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="space-y-6 text-gray-700">
                      <h3 className="text-lg font-bold">{selectedProject.title3}</h3>
                      <p dangerouslySetInnerHTML={{ __html: selectedProject.CurrentActivities }} />
                    </motion.div>
                  )}
                  {activeTab === "clients" && (
                    <motion.div key="clients" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="space-y-6 text-gray-700">
                      <h3 className="text-lg font-bold">{selectedProject.title4}</h3>
                      <p dangerouslySetInnerHTML={{ __html: selectedProject.MajorClients }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page;
