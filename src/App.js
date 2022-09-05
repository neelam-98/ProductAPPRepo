import React, { useState } from 'react';
import Item from './Component/Item';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Category from './Component/Category';
import Products from './Component/Products';
import PreNextButton from './Component/PreNextButton';
import Cart from './Component/Cart';
import UserLogin from './Component/UserLogin';
import Error from './Component/Error';
import Sort from './Component/Sort';
import HomePage from './Component/HomePage';
import LoginGoogle from './Component/GoogleLogin';

function App() {

  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    {/* <UserLogin/> */}
      <Routes>
        <Route path="/" element={<UserLogin/>}/>
        {/* <Route path="/" element={<LoginGoogle/>}/> */}
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/product/:id" element={<Item/>}/>
        <Route path='/category/:category' element={<Category/>}/>
        <Route path='/category/:category/:id' element={<Item/>}/>
        <Route path='/sort' element={<Sort/>}/>
        <Route path='/sort/:id' element={<Item/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      {/* <PreNextButton/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
