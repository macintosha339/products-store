import React from 'react'
import { Tabs, Switch } from 'antd'
import FetchedProducts from './FetchedProducts'
import ProductsForm from './ProductsForm'
import ItemsButtonsContainer from './ItemsButtonsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { showPublished, showAllProducts } from '../store/actions/filterProductsActions'

const { TabPane } = Tabs

export default function Products() {
    const dispatch = useDispatch();
    const isOnlyPublished = useSelector(state => state.products.showPublished)
    return (
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Fetched products" key="1">
                <ItemsButtonsContainer />
                <FetchedProducts />
            </TabPane>
            <TabPane 
                tab={
                    <>
                        Form products
                        <Switch 
                            checkedChildren="show all products" 
                            unCheckedChildren="show only published"
                            checked={isOnlyPublished ? true : false}
                            style={{marginLeft: '16px'}} 
                            onClick={(checked) => {checked ? dispatch(showPublished()) : dispatch(showAllProducts())}}
                        />
                    </>
                } 
                key="2"
            >
                <ProductsForm />
            </TabPane>
        </Tabs>
    )
}