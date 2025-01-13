import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact.jsx/Contact";
import Header from "./Components/Header";
import Navigations from "./Components/Navigations";
function App() {
  return (
    <>
      <div>
        <Header />
        <Navigations />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
