import React from "react";
import "./CheeseCakes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart,faEye,faShoppingCart, faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
function CheeseCakes() {
  useTitle("Cheese-Cakes")
  const cheesecakes = [
    {
      img: require("../../img/cheesecake2.jpg"),
      name: "lemon cheese Cake",
      price: "$10",
      orginalPrice: "$16.33",
      btn: "add to cart",
    },
    {
      img: require("../../img/cheesecake2.jpg"),
      name: "lemon cheese Cake",
      price: "$10",
      orginalPrice: "$15",
      btn: "add to cart",
    },
    {
      img: require("../../img/cheesecake2.jpg"),
      name: "lemon cheese Cake",
      price: "$10",
      orginalPrice: "$14.33",
      btn: "add to cart",
    },
 
  ];
  return (
    <section className="cheese-cakes" id="cheesecakes">
      <h3 className="page-title">
        our <span>Cheese Cakes</span>
      </h3>
      <div className="wrapper">
        {cheesecakes.map((cheesecake) => (
          <div className="cheesecake-card">
            <div className="icons">
                <Link to="" ><FontAwesomeIcon icon={faShoppingCart}/></Link>
                <Link to="" ><FontAwesomeIcon icon={faHeart}/></Link>
                <Link to="" ><FontAwesomeIcon icon={faEye}/></Link>
            </div>
            <div className="img">
                <img src={cheesecake.img} alt="cheese cake" />
            </div>
            <div className="content">
                <h3>{cheesecake.name}</h3>
            <div className="stars">
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i> <FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <div className="price">{cheesecake.price} <span>{cheesecake.orginalPrice}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CheeseCakes;
