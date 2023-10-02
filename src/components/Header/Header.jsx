import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";


function Header() {
    const [toggleSearch,setToggleSearch]=useState(false)
    const [toggleCart,setToggleCart]=useState(false)
    const [toggleBar,setToggleBar]=useState(false)
    const toggleSearchAction=()=>{
      setToggleSearch(toggleSearch=>!toggleSearch)
      setToggleCart(false)
      setToggleBar(false)
    }
    const toggleCartAction=()=>{
      setToggleCart(toggleCart=>!toggleCart)
      setToggleSearch(false)
      setToggleBar(false)
    }
    const toggleBarAction=()=>{
      setToggleBar(toggleBar=>!toggleBar)
      setToggleSearch(false)
      setToggleCart(false)
    }

    // har scroll page krd ba aw toggle disactive bkat chwnka scroll pagekan akain.
    window.onscroll=()=>{
      setToggleBar(false)
      setToggleSearch(false)
      setToggleCart(false)
    }
    const bakery=[
      {
        img:require('../../img/brownes.jpg'),
        foodName:"brownie",
        price:"$49.99"
      },
      {
        img:require('../../img/brownes.jpg'),
        foodName:"brownie",
        price:"$49.99"
      },
      {
        img:require('../../img/brownes.jpg'),
        foodName:"Chocco brownie",
        price:"$49.99"
      },
      {
        img:require('../../img/brownes.jpg'),
        foodName:"Lemon Brownie",
        price:"$49.99"
      },
    ]
  //title-Bread House
  return (
    <header>
      <a href="#" className="logo">
        <img src={require("../../img/logo.png")} alt="logo" />
      </a>
      <nav className={toggleBar ? "navbar active" :"navbar"} >
        <a href="#">Home</a>
        <a href="#cakes">Cakes</a>
        <a href="#cheesecakes">CheeseCakes</a>
        <a href="#newarrivals">New Arrivals</a>
        <a href="#about">About</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons">
        <div className="search-icon" onClick={toggleSearchAction}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="cart-icon" onClick={toggleCartAction}>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
        <div className="menu-icon" onClick={toggleBarAction}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div  className={toggleSearch ? 'search-form active ':'search-form disacivate'} >
        <input type="search"  name="search" id="search-box" placeholder="search here.."/>
       <label htmlFor="search-box"><FontAwesomeIcon icon={faSearch} /></label>
      </div>

      <div className={toggleCart? "cart-items-container active":'cart-items-container disacivate'}>
        {bakery.map(bakeryFood=>(
            <div className="cart-item">
            <span><FontAwesomeIcon icon={faTimes}/></span>
            <img src={bakeryFood.img} alt="brownes" />
            <div className="content">
              <h3>{bakeryFood.foodName}</h3>
              <div className="price">{bakeryFood.price}</div>
            </div>
          </div>
        ))}
      
       <Link to='' className="btn">order now</Link>
      </div>
    </header>
  );
}

export default Header;
