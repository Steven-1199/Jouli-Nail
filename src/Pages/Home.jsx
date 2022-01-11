import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomeSection from "../Components/Sections/WelcomeSection";
import AboutSection from "../Components/Sections/AboutSection";
import ServiceSection from "../Components/Sections/ServiceSection";
import BookSection from "../Components/Sections/BookSection";
import ContactSection from "../Components/Sections/ContactSection";

function Home() {
  return (
    <div className="w-[100vw] m-0 p-0 max-w-full">
      <WelcomeSection />

      <div className="relative top-[60vh] bg-white">
        <AboutSection />
        <ServiceSection />
        <BookSection />
        <ContactSection />
      </div>
      {/*GoogleReviewSection */}
    </div>
  );
}

export default Home;
