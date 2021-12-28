import react from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Page404 from './pages/Page404';
import {Routes, Route } from "react-router-dom";

class App extends react.Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    )
  }

}
export default App;
