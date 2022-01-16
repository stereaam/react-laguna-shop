import React, { Component } from 'react'
import Layout from '../components/Layout'
import products from '../utils/products.json'
import './Product.css'
import {connect} from 'react-redux'
import { addToCart } from '../redux/actions/cart'

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
        return (
           <Layout>
                <div className='product-page container-min-max-width container-fluid d-flex flex-column flex-wrap rounded'>
                    <h1 className='product-name'>{this.state.product.name}</h1>
                    <div className='text-white d-flex align-items-center justify-content-center flex-wrap'>
                        <div className='d-flex flex-column align-items-center justify-content-center m-1'>
                            <img className='m-2 py-3'  src={this.state.product.image} alt="product" />
                        </div>
                        <div className='product-info rounded mb-3 mt-1 py-5 px-3 mx-3'>
                            <p className='m-1 p-1'><strong>Price:</strong> {this.state.product.price}{this.state.product.currency}</p>
                            <p className='m-1 p-1'><strong>Brand:</strong> {this.state.product.brand}</p>
                            <p className='m-1 p-1'><strong>Size: </strong>{this.state.product.size}</p>
                            <p className='m-1 p-1'><strong>Color: </strong>{this.state.product.colour}</p>
                            <p className='m-1 p-1'><strong>Material: </strong>{this.state.product.material}</p>
                            <p className='m-1 p-1'><strong>Description: </strong>{this.state.product.description}</p>
                            <button 
                                className='btn btn-outline-light m-1'
                                onClick={()=>{
                                        this.props.addToCart({
                                            product: {
                                                id : this.state.product.id,
                                                name: this.state.product.name,
                                                price: this.state.product.price,
                                                currency: this.state.product.currency,
                                                image:this.state.product.image
                                            }
                                        })
                                    }
                                }
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
           </Layout>
        )
    }

    
}
let mapDispatchToProps = (dispatch) =>{
        return{
            addToCart: (payload) => dispatch(addToCart(payload))
        }
    }

export default connect(null,mapDispatchToProps)(Product)