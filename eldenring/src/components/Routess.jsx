import React from 'react'
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';


import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';
import './Routess.scss';


const Routess = () => {
    return (
        <Router>
            <div className='container'>
                <Link to='/'>
                    <button  className='button'>Home</button>
                </Link>
                <Link to='/About'>
                    <button  className='button'>About</button>
                </Link>
                <Link to='/Users'>
                    <button  className='button'>Users</button>
                </Link>
                <Link to='/NotFound'>
                    <button  className='button'>NotFound</button>
                </Link>
            </div>

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Users' element={<Users />} />
                    <Route path='/NotFound' element={<NotFound />} />
                </Routes>
            </main>
        </Router>
    );
};

export default Routess