import React from 'react'
import './Page404.css'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg'
import {Link} from 'react-router-dom'

function Page404() {
    return (
        <div className='not-found-page'>
            <h1>404 NOT FOUND</h1>
            <em>The content you are looking for doesn't exist</em>
            <Link to='/'>
                <button className="hover-zoom btn btn-outline-light d-flex align-items-center m-5">
                    <HomeIcon/>
                    <span className="m-3">Take me back Home</span>
                </button>
            </Link>
        </div>
    )
}

export default Page404
