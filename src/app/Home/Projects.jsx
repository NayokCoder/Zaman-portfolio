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
    <div className="py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 settext">Project References</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projectsData.slice(0, 6).map((project) => (
          <div key={project.id} onClick={() => openModal(project)} className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer group">
            <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-2xl mb-4 object-cover" />
            <div className="mb-4">
              <h2 className="text-xl font-bold  settext hover:settext transition">{project.title}</h2>
              <p className="text-sm text-gray-500">Project ID: {project.id}</p>
            </div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <span className="font-semibold text-gray-900">Client:</span> {project.client}
              </li>
              <li>
                <span className="font-semibold text-gray-900">Tech Stack:</span> {project.techStack}
              </li>
              <li>
                <span className="font-semibold text-gray-900">Duration:</span> {project.duration}
              </li>
              <li>
                <span className="font-semibold text-gray-900">Website:</span> {project.website}
              </li>
            </ul>
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
  );
};

export default Projects;
