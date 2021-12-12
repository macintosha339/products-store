import React from 'react'
import { Radio } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFewProducts, fetchAllProducts, fetchMoreProducts } from '../store/actions/fetchProductsActions';

export default function ItemsButtonsContainer () {
    const [amount, setAmount] = useState('8 items');
    const dispatch = useDispatch();

    const handleAmountChange = e => {
        setAmount(e.target.value)
        if(e.target.value === '8 items') {
            dispatch(fetchFewProducts())
        } else if(e.target.value === '16 items') {
            dispatch(fetchMoreProducts())
        } else if(e.target.value === 'all') {
            dispatch(fetchAllProducts())
        }
    }
    return (
        <>
        <Radio.Group value={amount} onChange={handleAmountChange}>
            <Radio.Button value="8 items">8 items</Radio.Button>
            <Radio.Button value="16 items">16 items</Radio.Button>
            <Radio.Button value="all">All items</Radio.Button>
        </Radio.Group>
        </>
    )
}