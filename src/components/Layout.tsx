import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import EngineeringLabs from "@/pages/EngineeringLabs";
import Projects from "@/pages/Projects";

const Layout = () => {
  return (
    <div className="layout bg-neutral-100 p-5">
      <BrowserRouter>
        <div className="layout__navbar mb-5">
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
