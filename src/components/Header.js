import React from 'react'
import { PageHeader } from 'antd'
import './Header.css'

export default function Header() {
    return (
        <PageHeader
            className="site-page-header"
            title="Products store"
            subTitle="Application for working with products"
        />
    )
}