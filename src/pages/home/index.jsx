import React from "react";
import MenuContainer from "./menuContainer";
import FooterSection from "../../component/footer";

const HomePage = () => {
  return (
    <>
      <div className="layout">
        <MenuContainer />
      </div>
      <FooterSection />
    </>
  );
};

export default HomePage;
