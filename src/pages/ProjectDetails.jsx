import { useParams, Link } from "react-router-dom";
import { clients } from "../js/ProjectList";
import NavBar from "../components/NavBar";
import "./ProjectDetails.css";

const BASE_URL = import.meta.env.BASE_URL;

const resolveImagePath = (src) => {
  return `${BASE_URL}${src.startsWith("/") ? src.substring(1) : src}`;
};

export default function ProjectDetails() {
  const { projectName } = useParams();
  const formattedName = projectName.replace(/-/g, " ");
  const project = clients.find(
    (client) => client.name.toLowerCase() === formattedName.toLowerCase()
  );

  if (!project) {
    return (
      <>
        <NavBar />
        <div className="details-not-found">
          Project Not Found.{" "}
          <Link to="/" className="back-link">
            Go Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="project-details-page">
        <Link to="/" className="back-to-home-btn">
          &lt; Back to Home
        </Link>

        <h1 className="client-name gold-span">{project.name}</h1>
        <p className="industry-tag">Industry: {project.industry}</p>

        <div className="details-section">
          <h2 className="section-title">The Challenge</h2>
          <ul className="details-list">
            {(Array.isArray(project.challenges)
              ? project.challenges
              : [project.challenges]
            ).map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h2 className="section-title">My Solutions</h2>
          <ul className="details-list">
            {project.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>

        <div className="details-section results-section">
          <h2 className="section-title">Achieved Results</h2>
          <ul className="results-list-details">
            {project.results.map((result, index) => (
              <li key={index} className="result-item-details">
                {result}
              </li>
            ))}
          </ul>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="details-section links-section">
            <h2 className="section-title">Work and Results Links</h2>
            <div className="project-links-grid">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-external-link-btn"
                >
                  {link.name}
                  <span className="link-icon">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="details-section images-section">
            <h2 className="section-title">Campaign Snapshots</h2>
            <div className="images-grid-container">
              {project.images.map((image, index) => (
                <div key={index} className="image-wrapper">
                  <img
                    src={resolveImagePath(image.src)}
                    alt={image.alt}
                    className="static-project-image"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
