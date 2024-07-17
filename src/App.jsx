import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Contactus from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        {/* BASIC ROUTES */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />

          <Route path="*" element={<Home />} />
        </Route>
        {/* BASIC ROUTES */}
      </Routes>
    </>
  );
}

export default App;
