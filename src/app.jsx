import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import AddItems from "./pages/addItems";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="addItems" element={<AddItems />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
