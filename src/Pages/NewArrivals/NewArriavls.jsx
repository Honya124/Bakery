import React from "react";
import { Link } from "react-router-dom";
import "./NewArrivals.css";
import useTitle from "../../hooks/useTitle";
function NewArriavls() {
  useTitle("New Arriavls")
  const newArrivals = [
    {
      img: require("../../img/macroons1.jpg"),
      name: "rainbow macroons",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dignissimos corrupti ab distinctio.",
      btn: "explore",
    },
    {
      img: require("../../img/macroons1.jpg"),
      name: "macroons",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dignissimos corrupti ab distinctio.",
      btn: "explore",
    },
    {
      img: require("../../img/macroons1.jpg"),
      name: "macroons",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dignissimos corrupti ab distinctio.",
      btn: "explore",
    },
  ];
  return (
    <section className="new-arrivals" id="newarrivals">
      <h3 className="page-title">
        New <span>Arrivals</span>
      </h3>
      <div className="wrapper">
        {newArrivals.map((newArrival) => (
          <div className="new-arrival-card">
            <div className="img">
              <img src={newArrival.img} alt="New Arrivals" />
            </div>
            <div className="content">
              <Link to="">{newArrival.name}</Link>
              <p>{newArrival.text}</p>
              <Link to="" className="btn">
                {newArrival.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArriavls;
