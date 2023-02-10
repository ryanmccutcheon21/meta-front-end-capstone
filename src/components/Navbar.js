import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <li>
                    <img src='../images/logo192.png' alt='Logo' />
                </li>
                <li>Login</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
            </ul>
        </nav>
    )
}

export default Navbar