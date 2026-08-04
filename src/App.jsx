import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ProjectTwoClothes from "./pages/ProjectTwoClothes";
import ProjectSlateCoffee from "./pages/ProjectSlateCoffee";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/two-clothes" element={<ProjectTwoClothes />} />
          <Route path="/projects/slate-coffee" element={<ProjectSlateCoffee />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer id="contact" />
    </>
  );
}
