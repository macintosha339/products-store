import React from 'react'
import Header from '../../components/Header'
import "antd/dist/antd.css";
import { Divider } from 'antd'

function EditProductForm() {
  return (
    <div className="App">
      <Header />
      <Divider orientation='left'>Product edit form</Divider>
    </div>
  );
}

export default EditProductForm;