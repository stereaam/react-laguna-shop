const initialState = {
    products: []
}

function favoritesReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_FAVORITES':
            let productInFavorites = false
            const updatedProducts = state.products.map(product => {
                if(product.id === action.payload.product.id){
                    productInFavorites = true
                    return product
                }
                else
                    return product
            })


            if(!productInFavorites){
                return Object.assign({}, state, {
                        products: [
                            ...state.products,
                            {
                                ...action.payload.product
                            }
                        ]
                    })
            }
            else{
                return Object.assign({},state, {
                    products: updatedProducts
                })
            }
            
        case 'REMOVE_FROM_FAVORITES':
            const filteredProducts = state.products.filter(product => {return product.id !== action.payload.product.id})
            return Object.assign({}, state, {
                    products: filteredProducts
            })

        default:
            return state
    }

}

export default favoritesReducer