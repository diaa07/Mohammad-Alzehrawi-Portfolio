import homeLogo from "../assets/home.png";
import portfolioLogo from "../assets/portfolio.png";
import contactLogo from "../assets/contact5.png";
import "./MoblieNavBar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function MobileNavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="moblie-nav">
      <ul>
        <li>
          <a onClick={() => handleNavClick("home")}>
            <img src={homeLogo} alt="" />
          </a>
        </li>
        <li>
          <a onClick={() => handleNavClick("portfolio")}>
            <img src={portfolioLogo} alt="" />
          </a>
        </li>
        <li>
          <a onClick={() => handleNavClick("contact")}>
            <img src={contactLogo} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
