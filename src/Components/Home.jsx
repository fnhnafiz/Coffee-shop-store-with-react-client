// import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import Coffee from "./Coffee";
import OurProducts from "./OurProducts";
import Products from "./Products";
// import { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <OurProducts></OurProducts>
      <Coffee></Coffee>
    </div>
  );
};

export default Home;
