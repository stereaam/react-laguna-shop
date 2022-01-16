import React from 'react'
import './ProductItem.css'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cart'
import { addToFavorites, removeFromFavorites } from '../redux/actions/favorites'
import { ReactComponent as EmptyHeart} from '../assets/icons/empty-heart.svg'
import { ReactComponent as ColoredFullHeart} from '../assets/icons/colored-full-heart.svg'
import { ReactComponent as CloseRed} from '../assets/icons/close-red.svg'
import { Link } from 'react-router-dom'



function ProductItem(props) {
    
    const {id,name,price,currency,image,addToCart,addToFavorites, removeFromFavorites, favoriteProducts} = props
    const productInCart = favoriteProducts.find(product => product.id===id)
    
    return (
        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center p-0">

            <Link to={`/product/${id}`}>
                <div className='d-flex'>
                    <img src={image} alt="productPhoto" className="category-image"/>
                </div>

            </Link>

            <Link to={`/product/${id}`}>
                <p className="my-1 mb-0 text-center text-white">{ name }</p>
            </Link>

            <Link to={`/product/${id}`}>
                <p className="mb-1 text-center text-white">{ price + currency }</p>
            </Link>
            
            <div>
                <button 
                    className='btn btn-outline-light mb-5 mx-3'
                    onClick={()=>{
                            addToCart({
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

                {props.url !=="/favorites"
                    ?(productInCart
                        ?<ColoredFullHeart
                            className='pointer mb-5'
                            onClick={()=>{
                                removeFromFavorites({
                                    product: {id}
                                    })
                                }
                            }
                        />
                        :<EmptyHeart
                            className='pointer mb-5'
                            onClick={()=>{
                                    addToFavorites({
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
                        />
                    )

                    :<CloseRed
                        className='pointer mb-5'
                        onClick={()=>{
                            removeFromFavorites({
                                product: {id}
                                })
                            }
                        }
                    />
                }

            </div>
       
        </div>
    )
}


function mapStateToProps(state){
    return {
        favoriteProducts: state.favorites.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)
