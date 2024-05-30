import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Button, Empty, message, List } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Cart.scss'

const API_URL = 'http://localhost:3001/orders'

const Cart = () => {
    const {cart, clearCart} = useContext(ProductsContext);
    const navigate = useNavigate();
    const [productsMap, setProductsMap] = useState(new Map());

    const order = async () => {
      const token = localStorage.getItem('token')

      await axios.post(API_URL, {ProductId: cart.map((product) => product.id)}, {headers: {Authorization: token}});

      message.success('Order created succesfully');
      setTimeout(() =>{
        navigate('/profile');
      }, 1000)
      clearCart()

      setProductsMap(new Map());
    };

    
    if (!Array.isArray(cart) || cart.length === 0) {
      return (
        <Empty description={<span>Empty cart</span>}>
          <Button type='primary'>
            <Link to='/products'>Buy Now</Link>
          </Button>
        </Empty>
      );
    }

    const productsList = cart.map((products) => ({
      id: products.id,
      name: products.name,
      price: products.price
    }))


  return (
    <div className="container-flex">
      <div className="container-cart">
      <List
        size="small"
        header={<h2 className="title">Cart</h2>}
        footer={
          <div className="btn-link-container">
            <button className="btn-cart" onClick={() => clearCart()}>
              Clear
            </button>
            <button className="btn-cart" onClick={order}>
              Pay now
            </button>
          </div>
        }
        bordered
        dataSource={productsList}
        renderItem={(item) => {
          const qty = productsMap.get(item.id) || 1;
          return (
            <div className="cart-table-flex">
              <table key={item.id}>
                <tbody>
                  <tr>
                    <td colSpan="6" className="table-header">
                      <h4>{item.name}</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }}
      />
    </div>
    </div>
  )
}

export default Cart


