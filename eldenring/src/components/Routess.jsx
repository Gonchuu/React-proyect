import React from 'react'
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';


import Home from '../pages/Home';
import About from '../pages/About';
import Users from '../pages/Users';
import NotFound from '../pages/NotFound';
import '../App.scss';


const Routess = () => {
    return (
        <Router>
            <header>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/About'>
                    <button>About</button>
                </Link>
                <Link to='/Users'>
                    <button>Users</button>
                </Link>
                <Link to='/NotFound'>
                    <button>NotFound</button>
                </Link>
            </header>

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