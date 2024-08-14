import React from "react";
// Components And Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
// React router dom
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/games/:id' element={<Home />} />
      </Routes>
    </div >
  );
}

export default App;
