import { Link, useLoaderData } from "react-router-dom";
import icon from "../assets/more/buttonIcon.png";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const OurProducts = () => {
  const allCoffee = useLoaderData();

  const [coffees, setCoffees] = useState(allCoffee);

  // console.log(allCoffee);
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 py-12">
        <span className="text-lg text-[#1B1A1A] font-thin">
          --- Sip & Savor ---
        </span>
        <h1 className="text-5xl text-[#331A15]">Our Popular Products</h1>
        <Link to="/details">
          <button className="btn btn-outline text-[24px] text-black bg-[#E3B577] hover:bg-[#E3B577] hover:text-[#1B1A1A]">
            Add Coffee <img src={icon} alt="" />
          </button>{" "}
        </Link>
      </div>
      <h1 className="text-center text-5xl font-extrabold">
        All coffee {coffees.length}
      </h1>
      <div className="container md:w-[80%] mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
