import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FormAddPage from "./pages/FormAddPage";
import Main from './pages/Main'
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route exact path={"/products"} element={<Main/>}/>
      <Route
        path="/products/:id"
        element={<ProductPage />}
      />
      <Route path={"/formAdd"} element={<FormAddPage />} />
      <Route path="/" element={<Navigate replace to="/products" />} />
    </Routes>
  );
}

export default App;
