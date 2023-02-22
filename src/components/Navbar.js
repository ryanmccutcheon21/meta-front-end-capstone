import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li><img src={logo} /></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to='/order-online'>Order Online</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar