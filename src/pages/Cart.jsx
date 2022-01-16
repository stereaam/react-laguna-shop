import React from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg'
import { ReactComponent as Close } from '../assets/icons/close.svg'
import './Cart.css'
import { removeFromCart } from '../redux/actions/cart'


function Cart(props) {

    const {cartProducts,removeFromCartInjected} = props
    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity * product.price
        }, 0)
    }

    return (
        <Layout>
            <div className='container-fluid container-min-max-width
                d-flex flex-column justify-content-center product-container my-5'>{
                cartProducts.length
                ? <div>
                    <div className="d-flex justify-content-between text-center h4 text-bold text-white my-3">
                            <p className="w-25">Product</p>
                            <p className="w-25">Price</p>
                            <p className="w-25">Quantity</p>
                            <p className="w-25">Total</p>
                    </div>
                   {cartProducts.map( (cartProduct) => {
                       return (
                       <div className="d-flex justify-content-between align-items-center text-center text-white my-2" key={cartProduct.id}>
                           <div className="w-25 d-flex flex-column justify-content-center align-items-center my-2">
                                <img src={cartProduct.image} alt="product" />
                                <p className='m-0'>{cartProduct.name}</p>
                           </div>
                           <p className="w-25 my-2">{ cartProduct.price } { cartProduct.currency }</p>
                           <p className="w-25 my-2">{ cartProduct.quantity }</p>
                           <div className="w-25 d-flex justify-content-center align-items-center my-2">
                                <p className='m-0'>
                                    { cartProduct.price * cartProduct.quantity }{ cartProduct.currency } 
                                </p>
                                <div onClick={()=>{
                                        removeFromCartInjected ({
                                                id: cartProduct.id
                                            })
                                    }}>
                                            <Close className='close-svg'/>
                                </div>
                           </div>
                       </div> )
                            
                   })}
                   <div className="d-flex justify-content-end border-top mt-4 text-white">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <Link to='/stripe'>
                                    <button className="btn btn-outline-light p-2">Checkout</button>
                                </Link>
                            </div>
                            <div className="w-25">
                                <p className="my-4 p-1 h4 text-center">
                                    { totalSum(cartProducts) }{ cartProducts[0].currency }
                                </p>
                            </div>
                    </div>
                </div>
                : <div className='d-flex flex-column align-items-center justify-content-center'>
                    <p className='text-white my-5 lead'>No products in cart!</p>
                    <Link to="/">
                        <button className="btn btn-outline-light d-flex align-items-center mb-5">
                            <HomeIcon/>
                            <span className='m-3'>Take me back Home</span>
                        </button>
                    </Link>
                </div>
            }
            </div>
        </Layout>
    )
}

function mapStateToProps(state){
    return {
        cartProducts : state.cart.products
    }

}

function mapDispatchToProps(dispatch){
    return {
        removeFromCartInjected: (payload) => dispatch(removeFromCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
