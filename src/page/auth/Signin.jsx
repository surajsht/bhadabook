import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[90%] rounded-lg bg-white p-6 shadow-lg sm:w-[28rem]">
        <div className="mb-6 text-center">
          <h1 className="inline-block bg-black px-4 pt-2 font-lily text-7xl text-white">
            B
          </h1>
        </div>

        <h2 className="mb-4 text-center font-poppins text-3xl font-semibold">
          Sign in
        </h2>

        <form>
          <div className="mb-2">
            <label htmlFor="email" className="text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block h-10 w-full rounded-md border-2 p-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-secondary">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block h-10 w-full rounded-md border-2 p-2"
            />
          </div>

          <button
            type="submit"
            className="text-md mb-2 me-2 w-full rounded-lg bg-bg-light-blue px-5 py-2 font-medium text-white hover:bg-bg-dark-blue focus:bg-bg-light-blue focus:outline-none focus:ring-2"
          >
            Sign in
          </button>
        </form>

        <div className="relative mb-4 mt-4 text-center before:absolute before:left-0 before:right-0 before:top-1/2 before:z-10 before:h-[.5px] before:w-full before:translate-y-1/2 before:bg-black">
          <span className="relative z-20 bg-white px-3"> or </span>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 font-medium hover:bg-gray-100">
          <FcGoogle /> Sign in with Google
        </button>

        <p className="mt-4 text-center">
          Don't have an account?
          <Link to="/" className="ml-2 font-semibold hover:text-text-hover">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
