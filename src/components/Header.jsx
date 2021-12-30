import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import './Header.css'


function Header() {
    return (
        <header className='header'>
            <div className='container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
                
                <Link to='/'><img src={Logo} alt="Laguna Shop" className='logo'/></Link>
                <div>
                    <Link to='/login'><h2>Login</h2></Link>
                </div>
            </div>
        </header>
    )
}

export default Header
