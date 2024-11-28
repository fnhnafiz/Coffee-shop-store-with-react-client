import { Link } from "react-router-dom";
import footerIcon from "../assets/more/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#372727] ">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-12">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4 mb-8 md:mb-0 ">
            <img className="w-16" src={footerIcon} alt="" />
            <h2 className="text-2xl font-bold text-white">Espresso Emporium</h2>
            <p className="text-sm text-white">
              Always ready to be your friend. Come & contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                to="#"
                className="text-gray-500 hover:text-white transition"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-white transition"
              >
                <i className="fab fa-twitter text-xl"></i>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-white transition"
              >
                <i className="fab fa-instagram text-xl"></i>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-white transition"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </Link>
            </div>
            <div className="space-y-2 text-sm text-white">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone-alt text-white"></i>
                <span>+88 01533 333 333</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-white"></i>
                <span>info@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-white"></i>
                <span>72, Wall street, King Road, Dhaka</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Connect with Us
            </h3>
            <form className="space-y-4 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#D2B48C] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d1b084] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center text-sm bg-navbarImg h-12 flex justify-center items-center text-gray-500">
          © 2024 Espresso Emporium | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
