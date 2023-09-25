import React from 'react'
import "../css/Navbar.css"
import Image_2 from "../assest/5QYw2bXpd59hSw9OJRXRNw==.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar-nav'>
            <li className='nav-item'><Link href='/' className='nav-link'>HOME</Link></li>
            <li className='nav-item'><Link href='/' className='nav-link'>ROADMAP</Link></li>
            <li className='nav-item'><Link href='/' className='nav-link'>WHITEPAPER</Link></li>
            <li className='nav-item'><Link href='/' className='nav-link'>AMBASODORS</Link></li>
            <li className='button'>
                <img src={Image_2}/>
                <span className="text">PLAY GAME</span>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar