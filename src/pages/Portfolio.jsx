import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { clients } from "../js/ProjectList";
import "./Portfolio.css";

const PROJECTS_PER_PAGE = 3;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = clients.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(clients.length / PROJECTS_PER_PAGE);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Work & Case Studies</h2>
      <div className="projects-grid">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            &lt; Prev
          </button>
          <ul className="pagination-list">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1} className="page-item">
                <a
                  onClick={() => paginate(i + 1)}
                  className={`page-link ${
                    currentPage === i + 1 ? "active-page" : ""
                  }`}
                >
                  {i + 1}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next &gt;
          </button>
        </div>
      )}
    </section>
  );
}
