import React from 'react'
import Header from '../../components/Header'
import FormAddBlock from '../../components/FormAddBlock';
import "antd/dist/antd.css";

function FormAddPage() {
  return (
    <div className="App">
      <Header />
      <FormAddBlock />
    </div>
  );
}

export default FormAddPage;