import React from "react";
import "./Cakes.css";
import { Link } from "react-router-dom";
import useTitle from './../../hooks/useTitle';
function Cakes() {
  useTitle("Cakes")
  const cakes = [
    {
      img: require("../../img/cake4.jpg"),
      name: "fruite cake",
      price: "$10",
      orginalPrice:"$16.33",
      btn: "add to cart",
    },
    {
      img: require("../../img/cake4.jpg"),
      name: "fruite cake",
      price: "$10",
      orginalPrice:"$15",
      btn: "add to cart",
    },
    {
      img: require("../../img/cake4.jpg"),
      name: "fruite cake",
      price: "$10",
      orginalPrice:"$14.33",
      btn: "add to cart",
    },
    {
      img: require("../../img/cake4.jpg"),
      name: "fruite cake",
      price: "$10",
      orginalPrice:"$15.33",
      btn: "add to cart",
    },
    {
      img: require("../../img/cake4.jpg"),
      name: "fruite cake",
      price: "$10",
      orginalPrice:"$13",
      btn: "add to cart",
    },
    {
      img: require("../../img/cake4.jpg"),
      name: "fruite cake",
      price: "$10",
      orginalPrice:"$15.33",
      btn: "add to cart",
    },
  ];
  return (
    <section className=" cakes" id="cakes">
      <h3 className="page-title">
        our <span>Cakes</span>
      </h3>
      <div className="wrapper">
        {cakes.map((cake) => (
          <div className="cake-card">
            <img src={cake.img} alt="cakes" />
            <h3 >{cake.name}</h3>
            <div className="price">{cake.price} <span>{cake.orginalPrice}</span> </div>
            <Link to="" className="btn">
              {cake.btn}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cakes;
