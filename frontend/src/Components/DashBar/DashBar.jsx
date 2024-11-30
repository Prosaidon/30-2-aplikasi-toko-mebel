import React from 'react'
import '../Sidebar/Sidebar.css'
import add_product_icon from '../Assets/add-product.png'
import list_product_icon from '../Assets/list-product.png'


const DashBar = ({  setSidebar }) => {
    return (
      <div className='sidebar'>
        <div className="sidebar-item" onClick={() =>  setSidebar('AddProduct')}>
          <img src={add_product_icon} alt="Add Product" />
          <p>Add Product</p>
        </div>
        <div className="sidebar-item" onClick={() =>  setSidebar('ListProduct')}>
          <img src={list_product_icon} alt="Product List" />
          <p>Product List</p>
        </div>
      </div>
    );
  };

export default DashBar