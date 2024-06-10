import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(user);
    } else {
      setUser("");
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAuth = () => {
    if (user) {
      sessionStorage.removeItem("user");
      setUser("");
      alert("Sign out successfully");
      router.push("/");
    } else {
      const authRoute = router.pathname === "/signUp" ? "/signIn" : "/signUp";
      router.push(authRoute);
    }
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold lg:text-right">
          <Image src="/logo.png" width={60} height={60} alt="Logo" />
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm w-full text-center lg:flex lg:justify-center lg:items-center">
            <Link href="/" passHref>
              <div
                className={`block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mx-4 ${
                  router.pathname === "/"
                    ? "border-b-2 border-red-500 font-bold"
                    : ""
                }`}
              >
                Home
              </div>
            </Link>
            <Link href="/about" passHref>
              <div
                className={`block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mx-4 ${
                  router.pathname === "/about"
                    ? "border-b-2 border-red-500 font-bold"
                    : ""
                }`}
              >
                About
              </div>
            </Link>
            <div
              onClick={handleAuth}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-400 mx-4 lg:hidden cursor-pointer"
            >
              {user
                ? "Sign Out"
                : router.pathname === "/signUp"
                ? "Sign In"
                : "Sign Up"}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleAuth}
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full ml-4 hidden lg:block"
          >
            {user
              ? "Sign Out"
              : router.pathname === "/signUp"
              ? "Sign In"
              : "Sign Up"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
