import React from 'react'
import './ProductItem.css'
import { connect } from 'react-redux'
import {addToCart} from '../redux/actions/cart'



function ProductItem(props) {
    
    const {id,name,price,currency,image,addToCartInjected} = props

    return (
        <div className="product-item col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <img src={image} alt="productPhoto" className="category-image my-1 category-image"/>
            <p className="m-2 text-center text-white">{ name }</p>
            <p className="mb-3 text-center text-white">{ price + currency }</p>
            <button 
                className='btn btn-outline-light mb-3'
                onClick={()=>{
                        addToCartInjected({
                            product: {
                                id,
                                name,
                                price,
                                currency,
                                image
                            }
                        })
                    }
                }
            >
                Add to cart
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        addToCartInjected: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null,mapDispatchToProps)(ProductItem)
