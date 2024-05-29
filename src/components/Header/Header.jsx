import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
        <span className='navbar-brand'><img src="src/assets/LogoE-commerce.png" alt="logo" className='logo-header'/></span>
        <nav className='navbar-nav'>
            <span className='navbar-item'><Link to='/'>Home</Link></span>
            <span className='navbar-item'><Link to='/registre'>Sign up</Link></span>
            <span className='navbar-item'><Link to='/products'>Products</Link></span>
            <span className='navbar-item'><Link to='/login'>Login</Link></span>
            <span className='navbar-item'><Link to='/profile'>Profile</Link></span>
        </nav>
    </div>
  )
}

export default Header