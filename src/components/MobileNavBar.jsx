import homeLogo from "../assets/home.png";
import portfolioLogo from "../assets/portfolio.png";
import contactLogo from "../assets/contact.png";
import "./MoblieNavBar.css";

export default function MobileNavBar() {
  return (
    <nav className="moblie-nav">
      <ul>
        <li>
          <a href="#home">
            <img src={homeLogo} alt="" />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <img src={portfolioLogo} alt="" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={contactLogo} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
