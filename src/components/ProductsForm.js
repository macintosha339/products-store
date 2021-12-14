import React from 'react'
import { Button, Table, Divider } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductsForm() {
    const products = useSelector(state => state.products.products)
    const publishedProducts = useSelector(state => state.products.publishedProducts)
    const isOnlyPublished = useSelector(state => state.products.showPublished)
    console.log(products)
    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Price $',
          dataIndex: 'price',
          key: 'price',
          sorter: (a, b) => a.price - b.price
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Published',
          dataIndex: 'published',
          key: 'published',
        },
        {
          title: 'Actions',
          dataIndex: 'published',
          key: 'published',
          render: () => (
              <Link to={'/editProduct'}>Edit</Link>
          )
        },
      ];
    return (
        <>
            <Link to={'/formAdd'}>
                <Button type='dashed' size='large' icon={<PlusCircleOutlined />}>
                    Add product
                </Button>
            </Link>
            <Divider orientation='left'>List of created products</Divider>
            <Table dataSource={isOnlyPublished ? publishedProducts : products} columns={columns}/>
        </>
    );
}