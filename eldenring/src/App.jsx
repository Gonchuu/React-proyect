// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
