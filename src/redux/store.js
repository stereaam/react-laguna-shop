import { createStore , combineReducers, applyMiddleware } from "redux";
import cartReducer from './reducers/cart'
import userReducer from "./reducers/user";
import favoritesReducer from "./reducers/favorites"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    favorites: favoritesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store