import React from 'react'
import Header from '../../components/Header'
import Products from '../../components/Products'
import "antd/dist/antd.css";

function Main() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default Main;