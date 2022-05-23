import React from 'react'
import './Navinshorts.css'
import Hamburgerdrawer from './Hamburgerdrawer'

const Navinshorts = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'><Hamburgerdrawer setCategory={setCategory}/></div>
      <img style={{cursor:"pointer"}} src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height="100%" alt="logo" />
    </div>
  )
}

export default Navinshorts
