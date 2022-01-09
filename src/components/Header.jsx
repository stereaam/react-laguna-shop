import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import './Header.css'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { signOutUser } from '../redux/actions/user'


function Header(props) {
    const {numberOfProducts, userData, signOutUser} = props
    return (
        <header className='header'>
            <div className='container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
                
                <Link to='/'><img src={Logo} alt="Laguna Shop" className='logo'/></Link>
                <div>
                    { userData
                    ? <p className='text-white lead m-0'>Hello, {userData}!</p>
                    : null}
                    <div className='d-flex align-items-center justify-content-end'>
                        { userData
                        ? <h2 className='logout-text' onClick={signOutUser}>Logout</h2>
                        : <Link to='/login'><h2>Login</h2></Link>}
                        <Link to='/cart'><ShoppingCart className='mx-2'/></Link>
                        <p className='my-2 mr-1 number-of-products text-white'>{numberOfProducts}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
function mapStateToProps(state){
    return {
        numberOfProducts: state.cart.products.length,
        userData : state.user.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        signOutUser: () => dispatch(signOutUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
