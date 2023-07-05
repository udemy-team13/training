import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import auth from "./fConfig";
import Auth from "./routes/Auth";

function App() {
  let [isLogin, setisLogin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth isLogin={isLogin} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
