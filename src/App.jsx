import "./App.css";
import Home from "./pages/Home";
import MobileNavBar from "./components/MobileNavBar.jsx";
import Marquee from "./components/Marquee.jsx";

export default function App() {
  return (
    <>
      <Home />;
      <Marquee />;
      <MobileNavBar />
    </>
  );
}
