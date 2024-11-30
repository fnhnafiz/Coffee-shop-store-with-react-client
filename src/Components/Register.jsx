import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./AuthProvider/AuthProviderContext";
import toast from "react-hot-toast";

const Register = () => {
  const { registerNewUser } = useContext(AuthContextProvider);

  const navigate = useNavigate();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log({ name, email, password });

    registerNewUser(email, password)
      .then((result) => {
        console.log(result.user);

        const createAt = result?.user?.metadata?.creationTime;

        const newRegisterUser = { name, email, createAt };

        // User Added in Database from client side;
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newRegisterUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("Register Successfully");
              navigate("/login");
            }
          });
      })
      .catch((error) => {
        toast.error(
          "Not Registered your account at this moment",
          error.message
        );
      });
  };

  return (
    <div className="bg-gray-800 min-h-screen px-12 py-6">
      <Link
        to="/"
        className="text-2xl text-white font-medium mb-4 inline-block"
      >
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>{" "}
        Back to home
      </Link>
      <div className="hero ">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center text-white lg:text-left space-y-5">
            <h1 className="text-6xl font-bold">Welcome to Coffee-Store</h1>
            <h1 className="text-5xl font-thin">Please Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-[#D1B084] w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt  link link-hover">
                    I have an account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
