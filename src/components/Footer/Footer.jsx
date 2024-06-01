import React from 'react'
import './Footer.scss'
import {GithubOutlined, LinkedinOutlined, InstagramOutlined} from '@ant-design/icons'



const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='social-div'>
        <span ><GithubOutlined /></span>
        <span><LinkedinOutlined /></span>
        <span><InstagramOutlined /></span>
      </div>
      <div className='info-div'>
          <p>Todos los derechos reservado © | Proyecto FrontEnd por Jairo Núñez</p>
      </div>
  </div>
  
  )
}

export default Footer