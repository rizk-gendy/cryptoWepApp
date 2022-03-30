import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'
const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="container">
                {/* Left Side */}
                <div className="left">
                    <p>Buy & Sell Crypto Using your retiremnt account </p>
                    <h1>Inest in Cryptocurrency with Your IRA</h1>
                    <p>Buy,Sell and store handreds of Cryptocurrencies</p>
                    <div className="input-container">
                        <input type="email"  placeholder='Enter your Email' />
                        <button className="btn">Learn More</button>
                    </div>

                </div>
                {/* Right Side */}
                <div className="right">
                    <div className="img-container">
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero