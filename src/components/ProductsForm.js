import React, { useState } from 'react'
import { Button, Table, Divider, Space, Modal, Input } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDateAction } from '../store/actions/getDateActions';
import { deleteProduct } from '../store/actions/deleteProductActions';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

export default function ProductsForm() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const publishedProducts = useSelector(state => state.products.publishedProducts)
    const isOnlyPublished = useSelector(state => state.products.showPublished)
    const dateOfCurrent = useSelector(state => state.products.getDate)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('');

    const showModal = (date) => {
      dispatch(getDateAction(date))
      setIsModalVisible(true);
    };

    const handleOk = () => {
      dispatch(deleteProduct(dateOfCurrent))
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0])
      setSearchedColumn(dataIndex)
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setSearchText('')
    };

    let searchInput = null

    const getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText(selectedKeys[0])
                setSearchedColumn(dataIndex)
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.select(), 100);
        }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          ...getColumnSearchProps('title'),
        },
        {
          title: 'Price $',
          dataIndex: 'price',
          key: 'price',
          sorter: (a, b) => a.price - b.price,
          ...getColumnSearchProps('price'),
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          ...getColumnSearchProps('description'),
        },
        {
          title: 'Published',
          dataIndex: 'published',
          key: 'published',
        },
        {
          title: 'Actions',
          dataIndex: 'actions',
          key: 'actions',
          render: (text, record, index) => {
            return (
              <Space>
                <Link onClick={() => {
                  dispatch(getDateAction(record.date))
                }} 
                to={'/editProduct'}>
                    Edit
                </Link>
                <Button type='primary' onClick={() => {showModal(record.date)}} danger>Delete</Button>
                <Modal title="Delete" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Are you sure you want to remove the product?</p>
                </Modal>
              </Space>
            )
          }
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
            <Table 
              dataSource={isOnlyPublished ? publishedProducts : products} 
              columns={columns} 
              pagination={{
                pageSize: 6
              }}/>
        </>
    );
}