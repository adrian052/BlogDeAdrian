import React,{useState} from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
     
    const [search,setSearch] = useState(false);
    const searchClass = search?'searchInput active':'searchInput';

    const openSearch = () =>{
        setSearch(true)
    }

    const submitSearch = e => {
        e.preventDefault();
        alert("hola mundo");
    }

    
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/about-us">Acerca de</NavLink></li>
                <li><NavLink to="/post">Publicaciones</NavLink></li>
                <li><NavLink to="/contact-us">Contacto</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" placeholder="Buscar" className={searchClass}/>
                    <img onClick={openSearch} src={require('../../asserts/icons/search.png')} alt="Search"/>
                </form>
                
            </div>
        </div>
    )
}

export default Navbar
