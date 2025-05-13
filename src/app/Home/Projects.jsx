"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsData, setProjectsData] = useState([]);

  // Fetch project data from the public folder
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json"); // Fetch from public directory
      const data = await response.json();
      setProjectsData(data);
      // Debugging line to check fetched data
    };

    fetchProjects();
  }, []);

  const openModal = (project) => {
    console.log("Project clicked:", project); // Debugging line
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gradient-to-br to-amber-50 from-teal-50 pb-10 ">
      <div className="py-12 max-w-6xl mx-auto space-y-10 ">
        <h1 className="text-3xl font-bold text-center text-gray-800  settext">Project References</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
          {projectsData.slice(0, 6).map((project) => (
            <div key={project.id} onClick={() => openModal(project)} className="relative group rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
              <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-64 object-cover" />

              {/* Floating info card bottom-left */}
              <div className="absolute bottom-4 left-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg flex items-center justify-between w-[85%] shadow">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 settext">{project.title}</h3>
                  <p className="text-xs text-gray-500">{project.category || "web design"}</p>
                </div>
                <div className="ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197 3.197a.75.75 0 01-1.06 0l-3.197-3.197a.75.75 0 011.06-1.06l2.167 2.167V6.75a.75.75 0 011.5 0v5.525l2.167-2.167a.75.75 0 111.06 1.06z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed z-50 inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
            <div className="fixed z-50 inset-0 backdrop-blur-xs bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
              <div className="bg-slate-100 p-8 rounded-3xl w-11/12 sm:w-3/4 lg:w-3/4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-3xl font-semibold settext mb-4">{selectedProject.title}</h2>

                <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: selectedProject.overview }} />

                <h2 className="text-lg font-semibold settext mb-2">{selectedProject.title2}</h2>
                <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: selectedProject.description }} />

                <h2 className="text-lg font-semibold settext mb-2">{selectedProject.title3}</h2>
                <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: selectedProject.CurrentActivities }} />

                <h2 className="text-lg font-semibold settext mb-2">{selectedProject.title4}</h2>
                <p className="text-lg text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: selectedProject.MajorClients }} />

                {/* <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200" onClick={closeModal}>
            Close
          </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
