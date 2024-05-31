import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Button, Empty, message, List } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.scss'
import orderService from '../../services/OrderService';



const Cart = () => {
    const {cart, clearCart} = useContext(ProductsContext);
    const navigate = useNavigate();
    const [productsMap, setProductsMap] = useState(new Map());

    const order = async () => {
orderService.createOrder(cart)

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
        size="medium"
        header={<h2 className="cart-title">Your Products</h2>}
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
          return (
            <div className="cart-table-flex">
              <table key={item.id}>
                <tbody>
                  <tr>
                    <td colSpan="6" className="table-header">
                      <h4>{item.name} - {item.price} €</h4>
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


