import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import EngineeringLabs from "@/pages/EngineeringLabs";
import Projects from "@/pages/Projects";

const Layout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <div className="layout__navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering-labs" element={<EngineeringLabs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <div className="layout__footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
