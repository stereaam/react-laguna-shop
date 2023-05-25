import React from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Page404 from './pages/Page404'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Favorites from './pages/Favorites'
import TermsAndConditions from './pages/TermsAndConditions'
import Stripe from './pages/Stripe'
import Admin from './pages/Admin'
import {Route, Switch} from 'react-router-dom'



class App extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}  />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/stripe" component={Stripe} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    )
  }

}
export default App;
