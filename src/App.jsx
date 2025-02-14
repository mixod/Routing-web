import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact.jsx/Contact";
import Header from "./Components/Header/Header";
import Navigations from "./Components/Header/Navigation/Navigations";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Service from "./Pages/Servi/Service";
import Desc from "./Pages/Servi/description/Desc";

function App() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Header />
        <Navigations />
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:desc" element={<Desc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
