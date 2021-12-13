import React from 'react'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

export default function ProductsForm() {
    return (
        <Link to={'/formAdd'}>
            <Button type='dashed' size='large' icon={<PlusCircleOutlined />}>
                Add product
            </Button>
        </Link>
    );
}