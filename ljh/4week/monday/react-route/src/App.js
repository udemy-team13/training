import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
