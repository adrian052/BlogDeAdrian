import React from 'react'
import './style.css'

function Header() {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Inicio</a>
                <a href="#">Acerca de</a>
                <a href="#">Contacto</a>
            </nav>
            <div>
                socialMedia Links
            </div>
        </header>
    )
}

export default Header
