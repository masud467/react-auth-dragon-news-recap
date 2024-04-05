import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
     signIn(email,password)
     .then(result=>{
        console.log(result.user)
        navigate(location?.state ? location.state :'/')
     })
     .catch(error=>{
        console.error(error)
     })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-200 p-5 w-3/4 mx-auto rounded-lg">
        <h1 className="text-3xl text-center">Login your account</h1>
        <hr className="mx-auto" />
        <form
          onSubmit={handleLogIn}
          className="card-body md:w-1/2 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn  btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center">
          Do not have an account?
          <Link to="/register" className="text-blue-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
