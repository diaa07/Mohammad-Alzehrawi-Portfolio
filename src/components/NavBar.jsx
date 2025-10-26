import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
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
  const navMenu = (
    <ul className="nav-list">
      <li className="nav-element">
        <a onClick={() => handleNavClick("home")}>Home</a>
      </li>
      <li className="nav-element">
        <a onClick={() => handleNavClick("portfolio")}>Portfolio</a>
      </li>
      <li className="nav-element">
        <a onClick={() => handleNavClick("contact")}>Contact</a>
      </li>
    </ul>
  );
  return (
    <nav className="desktop-nav">
      <div className="nav-left-sec">
        <div className="logo">
          <a className="logo" onClick={() => handleNavClick("home")}>
            Mohammed Al Zihrawe
          </a>
        </div>
      </div>
      <div className="nav-right-sec">
        <div className="desktop-nav">{navMenu}</div>
      </div>
    </nav>
  );
}
