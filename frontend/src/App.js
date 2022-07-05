import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter ,
  Link,
    Route,
    Routes,
  } from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
function App() {
  const cart = useSelector((state)=>state.cart);
  const {cartItems}  = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div className="">
            <Link className="brand" to="/">PayzStore</Link>
        </div>
        <div className="">
            <Link to="/cart">Cart
            {
              cartItems.length> 0 && (
                  <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
        </div>
    </header>
    <main>
    <Routes>
        <Route path="/cart/:id/"  element={<CartPage/>}></Route>
        <Route path="/product/:id/*"  element={<ProductPage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </main>
    <footer className="row center">All Right Copy</footer>
</div>
</BrowserRouter>
  );
}

export default App;
