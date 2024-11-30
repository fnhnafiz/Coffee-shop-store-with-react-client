import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "./AuthProvider/AuthProviderContext";

const Login = () => {
  const { loginUser } = useContext(AuthContextProvider);

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ email, password });

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Update User Login time

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const userLoginInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users/${email}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userLoginInfo),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log("Login failed", error.message);
      });
  };

  return (
    <div className="bg-gray-800 min-h-screen px-12 py-6">
      <Link
        to="/"
        className="text-2xl font-medium mb-4 inline-block text-white"
      >
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
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
            <form onSubmit={handleLoginUser} className="card-body">
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
                  <Link className="label-text-alt text-white link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <p className=" text-white ">
                    I don't have an account. Please
                    <Link
                      to="/register"
                      className="text-green-500 text-xl label-text-alt link link-hover ml-2"
                    >
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
