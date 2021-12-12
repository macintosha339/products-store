import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Main/>}/>
      <Route
        path="/products/:id"
        element={<ProductPage />}
      />
    </Routes>
  );
}

export default App;
