import React from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h2>GOT Universe</h2>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/favourites">Favourites</Link></div>
    </div>
        
 )
}

export default Navbar


