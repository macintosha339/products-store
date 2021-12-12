import React from 'react'
import { Tabs } from 'antd'
import FetchedProducts from './FetchedProducts'
import ProductsForm from './ProductsForm'
import ItemsButtonsContainer from './ItemsButtonsContainer'

const { TabPane } = Tabs

export default function Products() {
    return (
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Fetched products" key="1">
                <ItemsButtonsContainer />
                <FetchedProducts />
            </TabPane>
            <TabPane tab="Form products" key="2">
                <ProductsForm />
            </TabPane>
        </Tabs>
    )
}