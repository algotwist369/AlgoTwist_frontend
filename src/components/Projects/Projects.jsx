import React, { useState, useEffect } from 'react';
import projectsData from '../../data/projectsData.json';
import Pagination from '../commonFeatures/Pagination';

// Group projects by category
const groupByCategory = (projects) => {
  return projects.reduce((acc, project) => {
    (acc[project.category] = acc[project.category] || []).push(project);
    return acc;
  }, {});
};

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const projectsByCategory = groupByCategory(projectsData.projects);
  const categories = Object.keys(projectsByCategory);
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Get projects to display based on active tab
  const filteredProjects =
    activeTab === 'All'
      ? projectsData.projects
      : projectsByCategory[activeTab] || [];

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page on tab change
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab, currentPage]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-700">{projectsData.title}</h2>
        <p className="text-lg text-gray-600 text-center mb-12">{projectsData.description}</p>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-5 py-2 rounded-full font-semibold border transition-colors duration-200 focus:outline-none ${activeTab === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-blue-700 border-blue-200 hover:bg-blue-100'}`}
            onClick={() => handleTabChange('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full font-semibold border transition-colors duration-200 focus:outline-none ${activeTab === category ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-blue-700 border-blue-200 hover:bg-blue-100'}`}
              onClick={() => handleTabChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {paginatedProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No projects found in this category.</div>
          ) : (
            paginatedProjects.map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    onError={e => { e.target.src = '/assets/images/fav-icon.png'; }}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Projects;