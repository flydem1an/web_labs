import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Cabinet from './pages/Cabinet';
import About from './pages/About';

function App() {
    return (
        <>
            <Header />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cabinet" element={<Cabinet />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;