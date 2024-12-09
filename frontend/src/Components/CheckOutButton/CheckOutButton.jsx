import React, { useContext } from 'react'
import axios from 'axios'
import { ShopContext } from '../../Context/ShopContext'

const CheckOutButton = ({cartItems}) => {
    
    const API_URL = process.env.REACT_APP_API_URL;
    const {clearCart} = useContext(ShopContext)
    const userEmail = localStorage.getItem('user-id')
    const handleCheckout = ()=>{
        if(!localStorage.getItem('auth-token')){
            alert("Please Login first")
            window.location.href = '/login';
        }
        axios.post(`${API_URL}/checkout`, {
            cartItems,
            userEmail
        }).then((res)=>{
            if(res.data.url){
                clearCart()
                window.location.href = res.data.url
                
            }
        }).catch((err)=>{
            console.log(err.message);
        })
       
    }
  return (
    <div>
       <button onClick={()=>handleCheckout()}> CHECKOUT</button>
    </div>
  )
}

export default CheckOutButton
