import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Switch, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../store/actions/updateProductActions';
import { deleteProduct } from '../store/actions/deleteProductActions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EditFormBlock() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateOfCurrent = useSelector(state => state.products.getDate)
  const product = useSelector(state => state.products.products.filter((product) => dateOfCurrent === product.date))

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(deleteProduct(dateOfCurrent))
    setIsModalVisible(false);
    navigate('/products')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    }
  };
  const onFinish = (values) => {
    const { title, price, description, published } = values.product
    dispatch(updateProduct(title, price, description, published))
    navigate('/products')
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['product', 'title']}
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={product[0]?.title}/>
        </Form.Item>
        <Form.Item
         name={['product', 'price']}
         label="Price $"
         rules={[
          {
            required: true,
            type: 'number',
            min: 0
          },
        ]}
        >
          <InputNumber defaultValue={product[0]?.price}/>
        </Form.Item>
        <Form.Item
         name={['product', 'description']}
         label="Description"
         rules={[
          {
            required: true,
          },
        ]}
        >
          <Input.TextArea defaultValue={product[0]?.description}/>
        </Form.Item>
        <Form.Item
          name={['product', 'published']} 
          label="Published" 
          valuePropName="checked"
        >
          <Switch defaultChecked={product[0]?.published}/>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type='primary' onClick={showModal} style={{marginLeft: '16px'}} danger>Delete product</Button>
          <Modal title="Delete" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Are you sure you want to remove the product?</p>
          </Modal>
          <Link to={'/products'}>
            <Button type='dashed' style={{marginLeft: '16px'}}>Back to products</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
}

export default EditFormBlock;