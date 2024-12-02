import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Swal from "sweetalert2";

const AddCoffee = () => {
  const { pathname } = useLocation();
  // console.log(location);
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [pathname]);

  const handleSubmitCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const chef = formData.get("chef");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const category = formData.get("category");
    const details = formData.get("details");
    const photo = formData.get("photo");

    const orderCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(orderCoffee);

    // fetch data backhand
    fetch("http://localhost:5000/details", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Add Your Coffee",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 sm:p-10">
        <Link to="/" className="text-2xl font-medium mb-4 inline-block">
          <span>
            <i className="fa-solid fa-arrow-left"></i>
          </span>{" "}
          Back to home
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Add New Coffee
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          It is a long-established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmitCoffee} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Coffee Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter coffee name"
              />
            </div>
            {/* Chef */}
            <div>
              <label
                htmlFor="chef"
                className="block text-sm font-medium text-gray-700"
              >
                Chef
              </label>
              <input
                required
                type="text"
                name="chef"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter chef name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Supplier */}
            <div>
              <label
                htmlFor="supplier"
                className="block text-sm font-medium text-gray-700"
              >
                Supplier
              </label>
              <input
                required
                type="text"
                name="supplier"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter coffee supplier"
              />
            </div>
            {/* Taste */}
            <div>
              <label
                htmlFor="taste"
                className="block text-sm font-medium text-gray-700"
              >
                Taste
              </label>
              <input
                required
                type="text"
                name="taste"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                required
                type="text"
                name="category"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter coffee category"
              />
            </div>
            {/* Details */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <input
                required
                type="text"
                name="details"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo
            </label>
            <input
              required
              type="text"
              name="photo"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter photo URL"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-white px-4 py-2 rounded-md shadow-md  focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              BUY COFFEE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
