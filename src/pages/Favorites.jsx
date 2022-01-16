import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg'
import { Link } from 'react-router-dom'

function Favorites(props) {
    const {favoriteProducts} = props
    return (
       <Layout>
           {favoriteProducts.length
           ? <div>
                <h2 className="text-center category-name">Favorites</h2>
                <div className='row m-0'>
                {
                    favoriteProducts.map( product => {
                        return <ProductItem key={product.id} url={props.match.url} {...product} />
                    })
                }
                </div>
             </div>
           : <div className='container-fluid container-min-max-width
                d-flex flex-column justify-content-center product-container my-5'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                    <p className='text-white my-5 lead'>No products added to Favorites!</p>
                    <Link to="/">
                        <button className="btn btn-outline-light d-flex align-items-center mb-5">
                            <HomeIcon/>
                            <span className='m-3'>Take me back Home</span>
                        </button>
                    </Link>
              </div>
             </div>
           }       
        </Layout>
    )
}

function mapStateToProps(state){
    return {
        favoriteProducts: state.favorites.products
    }
}

export default connect(mapStateToProps)(Favorites)
