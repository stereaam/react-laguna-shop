import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
    
    const {products} = props
    return (

        <div className='row m-3 p-0'>
            {
                products.map((product) =>{
                    return <ProductItem {...product} key={product.id} />
                })
            }
        </div>
       
    )
}

export default ProductList
