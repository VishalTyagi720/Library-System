import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

import BookContainer from "./Book/books.container";

import Navbar from './navbar/navbar';
import Login from './navbar/login';
import Signup from './navbar/signup';
import Home from './navbar/Home';
import About from './navbar/About'


function App (){
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
        {/* <BookContainer /> */}
        </div>
    );
  }

export default App;
