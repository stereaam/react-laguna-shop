import React from 'react'
import {Link} from 'react-router-dom'
import { signOutUser } from '../redux/actions/user'
import { connect } from 'react-redux'
import Logo from '../assets/logo.png'
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg'
import { ReactComponent as FullHeart } from '../assets/icons/full-heart.svg'
import './Header.css'

function Header(props) {

    const {numberOfCartProducts, numberOfFavoriteProducts, userData, signOutUser} = props
    return (
        <header className='header'>
            <div className='container-fluid container-min-max-width d-flex justify-content-between align-items-center'>
                
                <Link to='/'><img src={Logo} alt="Laguna Shop" className='logo'/></Link>
                <div>
                    { userData
                    ? <div className='d-flex flex-column flex-sm-row justify-content-end align-items-end text-white'>
                        <p className='p-0 m-0'>Hello,&nbsp;</p>
                        <p className='p-0 m-0'>{userData}!</p>
                      </div>
                    
                    : null}
                    <div className='d-flex flex-column flex-sm-row'>
                        <div className='d-flex align-items-center justify-content-end'>
                            { userData
                            ? <h2 className='logout-text mx-2' onClick={signOutUser}>Logout</h2>
                            : <Link to='/login'><h2 className='mx-2'>Login</h2></Link>}  
                        </div>
                        <div className='d-flex align-items-center justify-content-end'>
                            <Link to='/favorites'><FullHeart className='mx-1 text-bold'/></Link>
                            <p className='my-2 mr-1 number-of-products text-white'>{numberOfFavoriteProducts}</p>
                            <Link to='/cart'><ShoppingCart className='mx-1'/></Link>
                            <p className='my-2 mr-1 number-of-products text-white'>{numberOfCartProducts}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
function mapStateToProps(state){
    return {
        numberOfCartProducts: state.cart.products.length,
        numberOfFavoriteProducts: state.favorites.products.length,
        userData : state.user.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        signOutUser: () => dispatch(signOutUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
