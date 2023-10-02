import React from 'react'
import {FaFacebookF,FaInstagram,FaLinkedin,FaPinterest,FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Footer.css'


function Footer() {
  return <footer>
    <div className="social-media">
        <Link to=""><FaFacebookF  /></Link>
        <Link to=""><FaInstagram  /></Link>
        <Link to=""><FaTwitter /></Link>
        <Link to=""><FaLinkedin  /></Link>
        <Link to=""><FaPinterest  /></Link>
    </div>
    <div className="links">
    <a href="#">Home</a>
    <a href="#cakes">Cakes</a>
        <a href="#cheesecakes">CheeseCakes</a>
        <a href="#newarrivals">New Arrivals</a>
        <a href="#about">About</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
    </div>
    <div className="credits">
        Created by <span>Honya124</span> | all rights reserved.
    </div>
  </footer>
}

export default Footer
