import React from 'react'
import './style.css'
import Card from '../UI/Card/Card'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'


function Hero() {
    return (
        <div>
            <Card >
                <div className="random">
                    <Logo/>
                </div>
                <Navbar/>
            </Card>
        </div>
    )
}

export default Hero
