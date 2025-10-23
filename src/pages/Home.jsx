import NavBar from "../components/NavBar";
import "./Home.css";
import profileImage from "../assets/personalPhoto.jpg";

export default function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home-left-sec">
          <div className="welcoming-text">
            I specialize in leading content strategy and overseeing digital
            marketing campaigns across Meta, Google, and TikTok. My work
            combines creative storytelling with data-driven insights to deliver
            measurable results. Skilled in SEO, performance marketing, and tools
            such as Google Analytics, SEMrush, and WordPress.
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
