import React from 'react'
import { List, Card, Spin, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFewProducts } from '../store/actions/fetchProductsActions';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const { Meta } = Card;

const cardsStyle = {
    textAlign: "center"
}

export default function FetchedProducts() {
    let url = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFewProducts())
    }, []);
    const products = useSelector(state => state.products.fetchedProducts)
    const loading = useSelector(state => state.app.loading)

    if(loading) {
        return (
            <Spin size='large' />
        )
    }
    
    return (
        <List
            grid={{
                gutter: 32,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
            }}
            dataSource={products}
            renderItem={item => (
                <List.Item width={300}>
                    <Card size='small' title={item.title} extra={<Link to={`${url.pathname}products/${item.id}`}>More</Link>}>
                        <div style={cardsStyle}>
                            <Image
                                height={200}
                                src={item.image}
                            />
                        </div>
                        <Meta 
                            title="Price"
                            style={cardsStyle}
                        />
                        <div style={cardsStyle}>
                            {`${item.price} $`}
                        </div>
                    </Card>
                </List.Item>
            )}
        />
    );
}