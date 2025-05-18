import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-[90%] sm:w-[28rem]">
        <h1 className="font-lily text-center text-7xl"> B </h1>

        <h2 className="text-center mt-2 mb-4 font-poppins text-3xl font-semibold">
          Sign up
        </h2>

        <form>
          <div className="mb-2">
            <label htmlFor="email" className="text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block border-2 w-full mt-1 h-10 rounded-md p-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-secondary">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block border-2 w-full mt-1 h-10 rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-bg-light-blue hover:bg-bg-dark-blue focus:ring-2 focus:bg-bg-light-blue font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 focus:outline-none w-full"
          >
            Sign up
          </button>

          <div className="relative text-center before:absolute before:top-1/2 before:translate-y-1/2 before:left-0 before:right-0 before:h-[.5px] before:w-full before:bg-black before:z-10 mt-4 mb-4">
            <span className="bg-white relative z-20 px-3"> or </span>
          </div>

          <button className="flex items-center justify-center gap-2 w-full py-2.5 px-5 font-medium rounded-lg border border-gray-200 hover:bg-gray-100">
            <FcGoogle /> Sign up with Google
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/" className="font-semibold hover:text-text-hover">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
