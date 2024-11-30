import { Link } from "react-router-dom";
import navLogo from "../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div className="bg-navbarImg h-20 flex justify-between items-center gap-4 px-5">
      <div>
        <Link to="/allUsers">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <i className="fa-solid fa-user text-2xl text-white"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-center">
          <img className="w-12" src={navLogo} alt="" />
        </span>
        <h1 className="font-extrabold text-center text-3xl md:text-5xl text-white">
          Espresso Emporium
        </h1>
      </div>
      <div>
        <Link to="/login">
          <button className="btn btn-outline bg-white">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
