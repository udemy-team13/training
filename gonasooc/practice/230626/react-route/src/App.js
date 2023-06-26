import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Home from "pages/Home";
import About from "pages/About";
import Profile from "pages/Profile";
import SearchResults from "pages/SearchResults";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </Router>

    // <div className="App">
    //   <Navigation />
    //   <Footer />
    // </div>
  );
}

export default App;
