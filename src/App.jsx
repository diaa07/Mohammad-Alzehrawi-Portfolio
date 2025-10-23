import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import MobileNavBar from "./components/MobileNavBar.jsx";
import Marquee from "./components/Marquee.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import NavBar from "./components/NavBar.jsx";
import ContactMe from "./pages/ContactMe.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <div className="App-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Marquee />
                  <Portfolio />
                  <ContactMe />
                </>
              }
            />
            <Route path="portfolio/:projectName" element={<ProjectDetails />} />
          </Routes>
          <MobileNavBar />
        </div>
      </BrowserRouter>
    </>
  );
}
