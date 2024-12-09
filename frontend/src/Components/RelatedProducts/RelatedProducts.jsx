import React from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/all_product'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RelatedProducts = () => {
  
  const API_URL = process.env.REACT_APP_API_URL;
  const [relatedProducts,setRelatedProd] = useState([]);
  const {productId} = useParams();
  useEffect(() => {
    fetch(`${API_URL}/relatedproduct?productId=${productId}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setRelatedProd(data))
      .catch((error) => console.error('Error fetching related products:', error));
  }, [productId]);


  return (
    
    <div className='relatedproducts' onClick={()=>window.scrollTo(0, 0)}>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.price}
            old_price={item.price}
          />
        ))}
        </div>
    </div>
  )
}

export default RelatedProducts