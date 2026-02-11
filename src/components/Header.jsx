import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="logo">PolitechDrive</div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/">Автомобілі</Link></li>
                        <li><Link to="/cabinet">Мій кабінет</Link></li>
                        <li><Link to="/about">Про нас</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}