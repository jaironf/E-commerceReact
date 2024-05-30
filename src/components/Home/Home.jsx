import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-div'>
       <span><img src="src/assets/LogoE-commerce.png" alt="logo" /></span>
       <div className='btn-div'>
       <button className='btn-home'><Link to='/registre'>Sign Up</Link></button>
       <button className='btn-home'><Link to='login'>Login</Link></button>
       </div>
    </div>
  )
}

export default Home