import React, { Component } from 'react'
import Layout from '../components/Layout'
import products from '../utils/products.json'
import './Product.css'
import {connect} from 'react-redux'
import {addToCart} from '../redux/actions/cart'
import {addToFavorites, removeFromFavorites} from '../redux/actions/favorites'
import { ReactComponent as EmptyHeart} from '../assets/icons/empty-heart.svg'
import { ReactComponent as ColoredFullHeart} from '../assets/icons/colored-full-heart.svg'

class Product extends Component {

    constructor(props){
        super(props)
        this.state = {
            product: {}
        }
    }

    componentDidMount(){
        const productId =  this.props.match.params.productId  
        const productsValues = Object.values(products)
        let currentProduct
        productsValues.forEach( (value) => {
            const foundProduct = value.items.find( (item) => { return Number(item.id) === Number(productId)})
            if(foundProduct){
                currentProduct = foundProduct
            }
        })
        this.setState({product: currentProduct})  
    }

    

    render() {   
        const productInCart = this.props.favoriteProducts.find(product => product.id === this.state.product.id)
        const {product} = this.state
        return (
           <Layout>
                <div className='product-page container-min-max-width container-fluid d-flex flex-column flex-wrap rounded'>
                    <h1 className='product-name'>{product.name}</h1>
                    <div className='text-white d-flex align-items-center justify-content-center flex-wrap'>
                        <div className='d-flex flex-column align-items-center justify-content-center m-1'>
                            <img className='m-2 py-3'  src={product.image} alt="product" />
                        </div>
                        <div className='product-info rounded mb-3 mt-1 py-5 px-3 mx-3'>
                            <p className='m-1 p-1'><strong>Price:</strong> { product.price}{ product.currency}</p>
                            <p className='m-1 p-1'><strong>Brand:</strong> { product.brand}</p>
                            <p className='m-1 p-1'><strong>Size: </strong>{ product.size}</p>
                            <p className='m-1 p-1'><strong>Color: </strong>{ product.colour}</p>
                            <p className='m-1 p-1'><strong>Material: </strong>{ product.material}</p>
                            <p className='m-1 p-1'><strong>Description: </strong>{ product.description}</p>
                            <div>
                                <button 
                                    className='btn btn-outline-light m-1'
                                    onClick={()=>{
                                            this.props.addToCart({
                                                product: {
                                                    id :  product.id,
                                                    name:  product.name,
                                                    price:  product.price,
                                                    currency:  product.currency,
                                                    image: product.image
                                                }
                                            })
                                        }
                                    }
                                >
                                    Add to cart
                                </button>
                                {productInCart
                                ?<ColoredFullHeart
                                    className='pointer m-1'
                                    onClick={()=>{
                                        this.props.removeFromFavorites({
                                            product: {id: product.id}
                                            })
                                        }
                                    }
                                />
                                :<EmptyHeart
                                    className='pointer m-1'
                                    onClick={()=>{
                                            this.props.addToFavorites({
                                                product: {
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    currency: product.currency,
                                                    image: product.image
                                                }
                                            })
                                        }
                                    }
                                />
                                }        
                            </div>
                        </div>
                    </div>
                </div>
           </Layout>
        )
    }

    
}

function mapStateToProps(state){
    return {
        favoriteProducts: state.favorites.products
    }
}

function mapDispatchToProps (dispatch){
        return{
            addToCart: (payload) => dispatch(addToCart(payload)),
            addToFavorites: (payload) => dispatch(addToFavorites(payload)),
            removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Product)