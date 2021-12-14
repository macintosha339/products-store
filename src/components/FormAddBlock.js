import React from 'react'
import { Form, Input, Button, InputNumber, Switch, Divider } from 'antd'
import { useDispatch } from 'react-redux';
import { addSingleProduct } from '../store/actions/addSingleProductActions';
import { Link } from 'react-router-dom';

function FormAddBlock() {
  const dispatch = useDispatch();
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    }
  };
  const onFinish = (values) => {
    const { title, price, description, published } = values.product
    console.log(title)
    dispatch(addSingleProduct(title, price, description, published))
  };
  return (
    <>
      <Divider orientation='left'>Form for creating product</Divider>
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
          <Input />
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
          <InputNumber />
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
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={['product', 'published']} 
          label="Published" 
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link to={'/products'}>
            <Button type='dashed' style={{marginLeft: '16px'}}>Back to products</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormAddBlock;