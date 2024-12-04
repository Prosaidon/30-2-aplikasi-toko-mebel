import './CSS/Admin.css'
import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import AddProduct from '../Components/AddProduct/AddProduct'
import ListProduct from '../Components/ListProduct/ListProduct'
import { useState } from 'react'
import Transaction from '../Components/Transaction/Transaction'


const Admin = () => {
    const [selectedComponent, setSelectedComponent] = useState('AddProduct');

    const renderComponent = () => {
      switch (selectedComponent) {
        case 'AddProduct':
          return <AddProduct />;
        case 'ListProduct':
          return <ListProduct />;
        case 'TransactionList':
          return <Transaction />;
        default:
          return <AddProduct />;
      }
    };
  
    return (
      <div className='admin'>
        <Sidebar setSelectedComponent={setSelectedComponent} />
        {renderComponent()}
      </div>
    );
}

export default Admin
