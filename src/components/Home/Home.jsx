import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-div'>
       <span>LOGO DE LA EMPRESA</span>
       <button className='btn-home'><Link to='/form'>Welcome</Link></button>
    </div>
  )
}

export default Home