import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
