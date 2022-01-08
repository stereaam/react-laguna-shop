import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import './Header.css'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';


function Header(props) {
    const {numberOfProducts} = props
    return (
        <header className='header'>
            <div className='container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
                
                <Link to='/'><img src={Logo} alt="Laguna Shop" className='logo'/></Link>
                <div className='d-flex align-items-center'>
                    <Link to='/login'><h2 className='mx-1'>Login</h2></Link>
                    <Link to='/cart'><ShoppingCart className='mx-2'/></Link>
                    <p className='my-2 mr-1 number-of-products text-white'>{numberOfProducts}</p>
                </div>
            </div>
        </header>
    )
}
function mapStateToProps(state){
    return {
        numberOfProducts: state.products.length
    }
}
export default connect(mapStateToProps)(Header)
