import React, { useContext, useEffect } from 'react'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { Badge } from 'antd'



const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext)
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <div className='navbar'>
        <span className='navbar-brand'><img src="src/assets/LogoE-commerce.png" alt="logo" className='logo-header' /></span>
         <nav className='navbar-nav'>
           <Link to='/'>Home</Link>
           <Link to='/products'>Products</Link>{token ? (
            <>
            <Link to='/profile'>Profile</Link>
            <Link to='/cart'>Cart<Badge count={cart.length} size='small'><ShoppingCartOutlined/></Badge></Link>
            <Link
              onClick={() =>{
                logout();
                navigate('/login');
              }}>
                Logout
            </Link>
            </>
           ) : (
            <Link to='/login'>Login</Link>
           )}
      </nav>
    </div>
  )
}

export default Header