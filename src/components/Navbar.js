import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li>
                    <img src='../images/logo192.png' alt='Logo' />
                </li>
                <li><Link>Login</Link></li>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Menu</Link></li>
                <li><Link>Reservations</Link></li>
                <li><Link>Order Online</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar