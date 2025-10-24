import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { name, industry, results, logo } = project;

  return (
    <Link
      to={`/portfolio/${name.replace(/\s+/g, "-")}`}
      className="project-card-link"
    >
      <div className="project-card">
        <div className="card-header">
          <div className="card-head-left">
            <img src={logo} alt="" />
          </div>
          <div className="card-head-right">
            <h2 className="project-name">{name}</h2>
            <p className="project-industry">{industry}</p>
          </div>
        </div>
        <div className="card-body">
          <h3 className="results-title">Key Results:</h3>
          <ul className="results-list">
            {results.slice(0, 2).map((result, index) => (
              <li key={index} className="result-item">
                {result}
              </li>
            ))}
            {results.length > 2 && (
              <li className="result-item">... more details</li>
            )}
          </ul>
        </div>
        <div className="card-footer">
          <span className="view-details-btn">View Case Study {`>`}</span>
        </div>
      </div>
    </Link>
  );
}
