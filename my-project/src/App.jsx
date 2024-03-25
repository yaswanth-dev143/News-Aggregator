import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import First from "./First";

const App = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/first" element={<First />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
