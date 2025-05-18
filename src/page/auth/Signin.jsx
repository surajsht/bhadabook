import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-[90%] sm:w-[28rem]">
        <h1 className="font-lily text-center text-7xl"> B </h1>

        <h2 className="text-center mt-2 mb-4 font-poppins text-3xl font-semibold">
          Sign in
        </h2>

        <form>
          <div className="mb-2">
            <label htmlFor="name" className="text-secondary">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block border-2 w-full mt-1 h-10 rounded-md p-2"
            />
          </div>

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
            Sign in
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold hover:text-text-hover">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
