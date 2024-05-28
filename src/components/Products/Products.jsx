import React, { useContext, useEffect } from 'react'
import {ProductsContext} from '../../context/ProductsContext/ProductsState'
import './Products.scss'

const Products = () => {
  const {products, getProducts} = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, [])

  
  return <div className='products-container'>{products.map((products) => {
      return (
        <div key={products.id} className='card'>
         <div className='card-content'>
          <h2 className='card-name'>{products.name}</h2>
          <p className='card-genre'>{products.genre}</p>
          <h4 className='card-price'>{products.price + ' €'}</h4>
        </div>
        </div>
      );
    })}
  </div>
}

export default Products