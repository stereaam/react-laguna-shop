import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container-fluid container-min-max-width
                            d-flex flex-wrap justify-content-between">
                <div>
                    <h3 className="h5 mb-3">Some useful links:</h3>
                    <p className="m-1">
                        <Link to='/about'>About</Link>
                    </p>
                    <p className="m-1">
                        <Link to='/terms-and-conditions'>Terms and conditions</Link>
                    </p>
                </div>
                <div>
                    <h3 className="h5 mb-3">Contact:</h3>
                    <p className="m-1">
                        <a href="mailto:mihai.sterea@yahoo.com">
                            <Mail className="footer-icon"/>
                            <span className="mx-1">mihai.sterea@yahoo.com</span> 
                        </a>
                    </p>
                    <p className="m-1">
                        <Phone className="footer-icon"/>
                        <span className="mx-1">+40770159063</span>
                    </p>
                </div>
                <div>
                    <h3 className="h5 mb-3">Contact:</h3>
                    <p className="m-1">
                        <a href="https://github.com/stereaam"  target="_blank" rel='noreferrer'>
                            <GitHub className="footer-icon"/>
                            <span className="mx-1">stereaam</span>
                        </a>
                    </p>
                    <p className="m-1">
                        <a href="https://www.linkedin.com/in/andrei-mihai-sterea-142436217/" target="_blank" rel='noreferrer'>
                            <LinkedIn className="footer-icon mb-1"/>
                            <span className="mx-1">andrei-mihai-sterea</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Andrei-Mihai Sterea, 2021
            </div>
        </footer>
    )
}

export default Footer
