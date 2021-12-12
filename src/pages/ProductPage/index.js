import React from 'react'
import Header from '../../components/Header'
import "antd/dist/antd.css";
import Product from '../../components/Product';

function ProductPage() {
  return (
    <div className="App">
      <Header />
      <Product />
    </div>
  );
}

export default ProductPage;