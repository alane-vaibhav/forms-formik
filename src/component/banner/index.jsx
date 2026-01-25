import React from "react";
import "./style.css";
import LeftImage from "../../assets/Veggies_new.avif";
import RightImage from "../../assets/Sushi_replace.avif";
import Quotecard from "../quoteCard";
const Homepagebanner = () => {
  return (
    <div className="home-banner">
      <div className="contentWrapper">
        <div className="left-image">
          <img src={LeftImage} alt="left_img" className="images" />
        </div>
        <div className="center-content">
          <div>
            <h1 className="header">
              Shree Sadguru Bhojnalay and Bhakri-Poli center
            </h1>
          </div>
          <Quotecard />
        </div>
        <div className="right-image">
          <img src={RightImage} alt="right_img" className="images" />
        </div>
      </div>
    </div>
  );
};

export default Homepagebanner;
