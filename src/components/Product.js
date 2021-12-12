import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../store/actions/fetchSingleProductActions';
import { Spin, Image, Card, Descriptions } from 'antd';

const { Meta } = Card

export default function Product() {
    let url = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchSingleProduct(url.pathname))  
    }, [])
    const product = useSelector(state => state.products.productInfo)
    const loading = useSelector(state => state.app.loading)
    console.log(product)
    let cardStyle = {
        margin: '0 auto',
        marginTop: '16px',
        width: '600px',
        textAlign: "center"
    }
    if(loading) {
        return <Spin size='large' />
    }
    return (
        <div style={cardStyle}>
            <Card
                hoverable
                style={{ width: 600 }}
                cover={<Image src={product.image} width={250} />}
            >
                <Descriptions title="Product Info" column={1}>
                    <Descriptions.Item label="Title">{product.title}</Descriptions.Item>
                    <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
                    <Descriptions.Item label="Price">{product.price} $</Descriptions.Item>
                    <Descriptions.Item label="Rating">{product.rating.rate} stars</Descriptions.Item>
                </Descriptions>
                <Meta style={{textAlign: 'left'}} description={product.description} />
            </Card>
        </div>
    )
}