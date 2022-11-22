import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import { Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  const user =true;
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
      <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
