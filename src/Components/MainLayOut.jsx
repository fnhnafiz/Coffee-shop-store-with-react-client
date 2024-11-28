import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-320px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
