import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Button, Empty } from 'antd';
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart, clearCart} = useContext(ProductsContext);

    if(cart.length == 0){
        return(
            <Empty description={<span>Empty cart</span>}>
                <Button type='primary'>
                    <Link to='/products'>Buy Now</Link>
                </Button>
            </Empty>
        );
    }



  return (
    <div></div>
  )
}

export default Cart