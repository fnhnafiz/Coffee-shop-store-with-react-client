import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { name, category, chef, photo, _id } = coffee;

  const { pathname } = useLocation();
  // console.log(location);
  useEffect(() => {
    window.scrollTo({ top: "10", behavior: "smooth" });
  }, [pathname]);

  const handleDeleteCoffee = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("Yess Deleted");
        fetch(`http://localhost:5000/details/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const deleteCoffee = coffees.filter((cofe) => cofe._id !== id);
              setCoffees(deleteCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-between items-center gap-5">
      <div className="h-80">
        <img className="h-full object-cover w-full" src={photo} alt="" />
      </div>
      <div className="space-y-3">
        <h1 className="font-semibold text-xl">Name: {name}</h1>
        <p className="text-gray-400 font-bold">Chef: {chef}</p>
        <p className="text-gray-400 font-bold">Coffee Name: {category}</p>
      </div>
      <div className="flex flex-col gap-3">
        <Link to={`/view-details/${_id}`}>
          <button>
            <i className="fa-regular fa-eye btn bg-[#D2B48C] text-white"></i>
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button>
            <i className="fa-solid fa-pen btn bg-[#3C393B] text-white"></i>
          </button>
        </Link>
        <button onClick={() => handleDeleteCoffee(_id)}>
          <i className="fa-solid fa-trash btn bg-red-500 text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
// category
// :
// "Hot Coffee"
// chef
// :
// "Walid"
// details
// :
// "A bleasing coffee for me and it is very great"
// name
// :
// "Fnh Nafiz"
// photo
// :
// "https://i.ibb.co.com/LCSppBV/images-3.jpg"
// supplier
// :
// "5"
// taste
// :
// "Awesome"
// _id
// :
// "67475683796f9646ae777eb7"
