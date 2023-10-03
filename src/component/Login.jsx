import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleToggleSignIn = () => {
    setIsSignIn((prevVal) => !prevVal);
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/168f9b81-d1f0-4116-b49f-875ea463fe3e/GB-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background img"></img>
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent"></div>
        <div className="absolute top-0 w-4/12 py-8 px-4 bg-black translate-x-full translate-y-60 rounded-lg shadow-lg">
          <form className="flex flex-col items-center text-white ">
            <h1 className="text-3xl font-bold mb-8">
              {isSignIn ? "Sign In " : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-8/12 mb-6 p-4 bg-slate-600 outline-blue-400"></input>
            )}
            <input
              type="email"
              placeholder="Email address"
              className="w-8/12 mb-6 p-4 bg-slate-600  outline-blue-400"></input>
            <input
              type="password"
              placeholder="Enter password"
              className="w-8/12 mb-8 p-4 bg-slate-600  outline-blue-400"></input>
            <button type="submit" className="bg-red-600 w-5/12 p-2 ">
              {isSignIn ? "Sign In " : "Sign Up"}
            </button>
            <p
              onClick={handleToggleSignIn}
              className="cursor-pointer hover:text-red-600 mt-8">
              {isSignIn ? "New Here?, Sign Up" : "Already Registered?, Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
