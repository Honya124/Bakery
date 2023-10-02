import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Cakes from "../Cakes/Cakes";
import CheeseCakes from "../CheesCakes/CheeseCakes";
import NewArriavls from "../NewArrivals/NewArriavls";
import About from "../About/About";
import Review from './../Review/Review';
import Contact from "../Contact/Contact";
import useTitle from "../../hooks/useTitle";

function Home() {
  useTitle("Bread House")
  return (
    <>
    <section className="home" id="/">
      <div className="hero">
        <h3>include in heavenly sweet delights</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <Link to="" className="btn">
          get yours now
        </Link>
      </div>
    </section>
    <Cakes />
    <CheeseCakes />
    <NewArriavls />
    <About />
    <Review />
    <Contact />
    </>
    
  );
}

export default Home;
