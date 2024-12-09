import React, {useEffect, useState} from 'react'
import './Popular.css'
import Item from '../Item/Item'     

const Popular = () => {

  const API_URL = process.env.REACT_APP_API_URL;
  const [popularProducts,setPopularProducts] = useState([]);
  useEffect(()=>{
    fetch(`${API_URL}/popular-in-office`)
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])
  
  return (
    <div className='popular'>
      <h1>POPULAR IN HOME</h1>
      <hr />
      <div className='popular-item'>
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.price}
            old_price={item.price}
          />
        ))}
      </div>
    </div>
  );
};


export default Popular