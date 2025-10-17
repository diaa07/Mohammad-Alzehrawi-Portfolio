import "./NavBar.css";

export default function NavBar() {
  const navMenu = (
    <ul className="nav-list">
      <li className="nav-element">
        <a className="nav-a" href="#home">
          Home
        </a>
      </li>
      <li className="nav-element">
        <a className="nav-a" href="#portfolio">
          Portfolio
        </a>
      </li>
      <li className="nav-element">
        <a className="nav-a" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
  return (
    <nav>
      <div className="nav-left-sec">
        <div className="logo">
          Mohammad Alzehrawi<a href="#home"></a>
        </div>
      </div>
      <div className="nav-right-sec">
        <div className="desktop-nav">{navMenu}</div>
      </div>
    </nav>
  );
}
