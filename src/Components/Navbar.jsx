import navLogo from "../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div className="bg-navbarImg h-20 flex justify-center items-center gap-4">
      <span className="text-center">
        <img className="w-12" src={navLogo} alt="" />
      </span>
      <h1 className="font-extrabold text-center text-5xl text-white">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Navbar;
