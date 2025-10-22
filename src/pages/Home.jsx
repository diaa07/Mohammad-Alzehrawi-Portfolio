import NavBar from "../components/NavBar";
import "./Home.css";
import profileImage from "../assets/personalPhoto.jpg";

export default function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home-left-sec">
          <div className="welcoming-text">
            <h1>
              I’m a Marketing Specialist & content Lead with{" "}
              <span className="gold-span">+7 years of experience</span>
            </h1>
            Have been creating data-driven, engaging Arabic and English content
            across digital platforms. Skilled in SEO, storytelling, and tools
            like Google Analytics, SEMrush, and WordPress.
          </div>
          <div className="button-container">
            <a href="#portfolio">
              <button className="button-cta">View My Work {`>`}</button>
            </a>
          </div>
        </div>
        <div className="home-right-sec">
          <div className="name-container">Mohammad Alzehrawi</div>
          <div className="image-container">
            <img src={profileImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
