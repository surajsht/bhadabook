import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { auth } from "../../firebase/FireConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { FadeLoader } from "react-spinners";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if (formData.email === "" && formData.password === "") {
      setError("Please provide valid details");
      return;
    }

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-[90%] rounded-lg bg-white p-6 shadow-lg sm:w-[28rem]">
        <div className="mb-6 text-center">
          <h1 className="inline-block bg-black px-5 pb-1 pt-3 font-lily text-7xl text-white">
            Bb
          </h1>
        </div>

        <h2 className="mb-4 text-center font-poppins text-3xl font-semibold">
          Sign in
        </h2>

        {error && <span className="my-4 block text-danger"> {error} </span>}

        <form onSubmit={loginUser}>
          <div className="mb-2">
            <label htmlFor="email" className="text-text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block h-10 w-full rounded-md border-2 p-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-text-secondary">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block h-10 w-full rounded-md border-2 p-2"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="text-md mb-2 me-2 flex w-full items-center justify-center gap-6 rounded-lg bg-primary px-5 py-2 font-medium text-white hover:bg-primary-dark focus:bg-primary-dark focus:outline-none focus:ring-2"
          >
            {isLoading && (
              <FadeLoader
                color="#fff"
                height={8}
                width={4}
                margin={1}
                radius={1}
                cssOverride={{
                  transform: "scale(0.5)",
                  height: "auto",
                  width: "auto",
                  top: "-2px",
                  left: "auto",
                }}
              />
            )}
            Sign in
          </button>
        </form>

        <div className="relative mb-4 mt-4 text-center before:absolute before:left-0 before:right-0 before:top-1/2 before:z-10 before:h-[.5px] before:w-full before:translate-y-1/2 before:bg-black">
          <span className="relative z-20 bg-white px-3"> or </span>
        </div>

        <button
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 font-medium hover:bg-gray-100"
          onClick={loginWithGoogle}
        >
          <FcGoogle /> Sign in with Google
        </button>

        <p className="mt-4 text-center">
          Don't have an account?
          <Link
            to="/signup"
            className="ml-2 font-semibold text-primary hover:text-primary-dark"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
