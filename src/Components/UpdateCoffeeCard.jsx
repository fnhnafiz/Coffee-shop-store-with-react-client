import { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const UpdateCoffeeCard = () => {
  const singleCoffee = useLoaderData();

  const { pathname } = useLocation();
  // console.log(location);
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [pathname]);

  const { name, category, chef, details, photo, supplier, taste } =
    singleCoffee;

  return (
    <div className="w-[60%] mx-auto ">
      <Link to="/" className="text-2xl font-medium mb-4 inline-block">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>{" "}
        Back to home
      </Link>

      <div className="flex items-center justify-center gap-8 p-12 bg-[#F4F3F0] my-12">
        <div>
          <img src={photo} alt="" />
        </div>
        <div>
          <h1>{name}</h1>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffeeCard;
