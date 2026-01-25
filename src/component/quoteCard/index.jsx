import React from "react";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuImg from "../../assets/Menu.png";
import Fullplate from "../../assets/Full plate.png";
const Quotecard = () => {
  return (
    <div className="quotes">
      <div className="quote">
        <div className="content">
          <div className="text-content">
            <h3 className="quote-header">Book Meal</h3>
            <h4 className="quote-text">Pick Pick your order from Bhojnalay</h4>
          </div>
          <div className="imgSection">
            <img src={Fullplate} alt="menu_img" className="menuImg" />
            <div className="arrowContainer">
              <ArrowForwardIcon className="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="content">
          <div className="text-content">
            <h3 className="quote-header">Book Poli-Bhakri</h3>
            <h4 className="quote-text">
              Pick your order from Bhakri-poli center
            </h4>
          </div>
          <div className="imgSection">
            <img src={MenuImg} alt="menu_img" className="menuImg" />
            <div className="arrowContainer">
              <ArrowForwardIcon className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotecard;
