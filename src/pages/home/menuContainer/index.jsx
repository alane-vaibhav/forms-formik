import React from "react";
import "./style.css";
import MenuImg from "../../../assets/Menu.png";
import Fullplate from "../../../assets/Full plate.png";
const MenuContainer = () => {
  return (
    <div className="menuContainer">
      <div className="title">
        <h2>Find menu here</h2>
      </div>
      <div className="eachItems">
        <div className="eachItem">
          <img src={Fullplate} alt="" className="menuImg" />
          <h5 className="menuText">Full plate</h5>
        </div>
        <div className="eachItem">
          <img src={MenuImg} alt="" className="menuImg" />
          <h5 className="menuText">Half plate</h5>
        </div>
        <div className="eachItem">
          <img src={Fullplate} alt="" className="menuImg" />
          <h5 className="menuText">Customized plate</h5>
        </div>
        <div className="eachItem">
          <img src={MenuImg} alt="" className="menuImg" />
          <h5 className="menuText">Bhakri</h5>
        </div>
        <div className="eachItem">
          <img src={Fullplate} alt="" className="menuImg" />
          <h5 className="menuText">Poli</h5>
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
