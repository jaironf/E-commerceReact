import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
        <span className='navbar-brand'><img src="../../src/assets/LogoSinFondo.png" alt="logo" className='logo-header'/></span>
        <nav className='navbar-nav'>
            <span className='navbar-item'><Link to='/'>Home</Link></span>
            <span className='navbar-item'><Link to='/products'>Products</Link></span>
            {/* <span className='navbar-item'><Link to='/login'>Login</Link></span> */}
        </nav>
    </div>
  )
}

export default Header