import React from "react";
import "./style.css";
import LeftImage from "../../assets/Veggies_new.avif";
import RightImage from "../../assets/Sushi_replace.avif";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
          <div className="quotes">
            <div className="quote">
              <div className="content">
                <h3 className="quote-header">Book Meal</h3>
                <h4 className="quote-text">Pick From Bhojnalay</h4>
              </div>
            </div>
            <div className="quote">
              <div className="content">
                <h3 className="quote-header">Book Poli-Bhakri</h3>
                <h4 className="quote-text">Pick From Bhakri-poli center</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="right-image">
          <img src={RightImage} alt="right_img" className="images" />
        </div>
      </div>
    </div>
  );
};

export default Homepagebanner;
