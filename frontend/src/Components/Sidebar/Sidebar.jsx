import React from 'react'
import './Sidebar.css'
import add_product_icon from '../Assets/add-product.png'
import list_product_icon from '../Assets/list-product.png'
import people_icon from '../Assets/people_icon.png'


const Sidebar = ({ setSelectedComponent }) => {
    return (
      <div className='sidebar'>
        <div className="sidebar-item" onClick={() => setSelectedComponent('AddProduct')}>
          <img src={add_product_icon} alt="Add Product" />
          <p>Add Product</p>
        </div>
        <div className="sidebar-item" onClick={() => setSelectedComponent('ListProduct')}>
          <img src={list_product_icon} alt="Product List" />
          <p>Product List</p>
        </div>
        <div className="sidebar-item" onClick={() => setSelectedComponent('TransactionList')}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2j5MGY0-kZ8kRuNMbo8Walzj1H3ia2SP-rA&s' alt="Transaction List" />
          <p>Transactions List</p>
        </div>
        <div className="sidebar-item" onClick={() => setSelectedComponent('UserList')}>
          <img src={people_icon} alt="Product List" />
          <p>Users List</p>
        </div>
      </div>
    );
  };

export default Sidebar