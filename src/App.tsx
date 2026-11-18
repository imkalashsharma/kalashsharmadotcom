import { BrowserRouter, Route, Routes } from "react-router";

// pages
import { Home } from "@/pages/Home";
import { Builds } from "@/pages/Builds";
import { Writings } from "@/pages/Writings";
import { Layout } from "./components/Layout";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
