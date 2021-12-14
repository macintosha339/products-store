import React from 'react'
import Header from '../../components/Header'
import "antd/dist/antd.css";
import { Divider } from 'antd'
import EditFormBlock from '../../components/EditFormBlock';

function EditProductForm() {
  return (
    <div className="App">
      <Header />
      <Divider orientation='left'>Product edit form</Divider>
      <EditFormBlock />
    </div>
  );
}

export default EditProductForm;