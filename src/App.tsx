import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";

// import pages
import { Home } from "./pages/Home";
import { EngBuilds } from "./pages/EngBuilds";
import { Projects } from "./pages/Projects";
import { Writings } from "./pages/Writings";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eng-builds" element={<EngBuilds />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
