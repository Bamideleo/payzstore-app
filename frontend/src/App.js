import React from 'react';
import {
    BrowserRouter ,
    Route,
    Routes,
  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div className="">
            <a className="brand" href="/">PayzStore</a>
        </div>
        <div className="">
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
    <Routes>
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
