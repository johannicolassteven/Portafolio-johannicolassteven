import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import AboutPage from "./pages/AboutPage";
import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}


export default App;
