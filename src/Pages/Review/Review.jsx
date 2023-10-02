import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import './Review.css'
import useTitle from "../../hooks/useTitle";

function Review() {
  useTitle("Review")
  const reviews = [
    {
      qoute: require("../../img/quote.png"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero,laudantium nulla ipsam necessitatibus ab quam dolorem, odio tempora quae  maiores totam, adipisci sunt vel quas. Quasi repellendus assumenda totam?",
      userImg: require("../../img/woman2.jpg"),
      username: "Vnish jake",
    },
    {
      qoute: require("../../img/quote.png"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero,laudantium nulla ipsam necessitatibus ab quam dolorem, odio tempora quae  maiores totam, adipisci sunt vel quas. Quasi repellendus assumenda totam?",
      userImg: require("../../img/man1.jpg"),
      username: "Joshua ban",
    },
    {
      qoute: require("../../img/quote.png"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero,laudantium nulla ipsam necessitatibus ab quam dolorem, odio tempora quae  maiores totam, adipisci sunt vel quas. Quasi repellendus assumenda totam?",
      userImg: require("../../img/woman2.jpg"),
      username: "Joshua ban",
    },
  ];
  return (
    <section className="review" id="review">
      <h3 className="page-title">
        customer's <span>reviews</span>
      </h3>
      <div className="wrapper">
        {reviews.map((review) => (
          <div className="review-card">
            <img src={review.qoute} alt="quote" />
            <p>{review.review}</p>
            <img className="customer" src={review.userImg} alt="avatar" />
            <h3>{review.username}</h3>
            <div className="stars">
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i><FontAwesomeIcon icon={faStar}/></i>
              <i> <FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
