import React from 'react'
import './Transaction.css'
import remove_icon from '../Assets/remove-icon.png'
import { useState, useEffect } from 'react';

export default function Transaction() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [allTransactions,setallTransactions] = useState([]);
    const token = localStorage.getItem('auth-token')

    const fetchInfo = async ()=>{
        await fetch (`${API_URL}/all-transactions`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'auth-token' : token
            }
           
        })
        .then((res)=>res.json())
        .then((data)=>{setallTransactions(data)});
      }

    useEffect(()=>{
        fetchInfo();
      }, [])

    const remove_transaction = async(id)=>{
        const userConfirmed = window.confirm('Yakin ingin menghapus transaksi?');
        if(userConfirmed){
          await fetch(`${API_URL}/remove-transactions`, {
            method:'DELETE',
            headers:{
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'auth-token' : token
            },
            body:JSON.stringify({id:id})
          })
          await fetchInfo();
        }
  
    }

const transactionArray = allTransactions.transactions || [];
// console.log("Array orders: "+JSON.stringify(transactionArray));

const transformedTransactions = transactionArray.map(transaction => {
    return {
        customer: {
        name: transaction.customer.name,
        email: transaction.customer.email,
        country: transaction.customer.country
        },
        id: transaction._id,
        total: transaction.total,
        subtotal: transaction.subtotal,
        products: transaction.products.map(product => ({
        name: product.name,
        category: product.category,
        sub_category: product.sub_category,
        image: product.image,
        quantity: product.quantity,
        price: product.price
        })),
        paymentStatus: transaction.payment_status,
        createdAt: transaction.createdAt
    };
    });
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(price).replace('IDR', 'Rp');
      }

  return (
    <div className='transaction-list'>
       <h1>All Mebelify Transactions List</h1>
       <div className="transaction-list-format-main">
        <p>User's name</p>
        <p>Amount</p>
        <p>Payment Status</p>
        <p>Products</p>
        <p></p>
        <p>Remove</p>
       </div>
       <div className="transaction-list-allTransactions">
        <hr/>
            {transformedTransactions.map((transaction, index) => {
            return <> 
            <div key={index} className="transaction-list-format-main">
                <p>Customer: {transaction.customer.name}
                  <br />({transaction.customer.email})
                </p>
                <p className='total'>Total : {formatPrice(transaction.total)}
                    <br />
                    <br />Subtotal : {formatPrice(transaction.subtotal)}
                </p>
                <p className='Payment'>Payment Status: {transaction.paymentStatus}</p>
                <p>Products:</p>
                <ul>
                {transaction.products.map((product, idx) => (
                    <li key={idx}>
                    {product.name} 
                    <img src={product.image} alt='' className='transaction-list-product-icon'/>
                    <p>Price : {formatPrice(product.price)}</p>
                    <p>Quantity: {product.quantity}</p>  
                    </li>
                ))}
                </ul>
                <img onClick={()=>{remove_transaction(transaction.id)}} src={remove_icon} alt="" className="transaction-list-remove-icon" />
                
            </div>
            <hr/>
            </>
           })}
        <hr />
       </div>
    </div>
  )
}
