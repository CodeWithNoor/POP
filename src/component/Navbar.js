import React from 'react'
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="containers-fluid">
                <nav className='navbar'>
                         <div>
                            <img className='neon-image' src="./assest/2TPRgTsb1nZ30fG1sycISg==.png" alt="" />
                        </div> 
                    <ul className='nav-list'>
                        <li className='nav-item'><a href="/">HOME</a></li>
                        <li className='nav-item'><a href="/">ROADMAP</a></li>
                        <li className='nav-item'><a href="/">WHITEPAPER</a></li>
                        <li className='nav-item'><a href="/">AMBASODORS</a></li>
                        <li className='nav-item'>
                            <img className='border-image' src="./assest/5QYw2bXpd59hSw9OJRXRNw==.png" alt="" />
                            <a href="/">PLAY GAME</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar