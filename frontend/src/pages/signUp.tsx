import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import { urlBackend } from "../../globalUrl";
import Header from "@/components/header";
import { useRouter } from "next/router";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user !== null && user !== "") {
      alert("Please sign out first!!");
      router.push("/");
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = sessionStorage.getItem("user");
    if (user != null || user != "") {
      alert("Please sign out first!!");
    }
    try {
      const response = await fetch(`${urlBackend}/users/signUp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (response.ok) {
        alert("Sign up successfully!");
        router.push("/signIn");
      } else {
        alert("Sign up failed!");
      }
    } catch (error) {
      console.error("Error occurs:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex-grow flex items-center justify-center mb-10">
        <div className="max-w-md w-full bg-white border border-gray-300 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-800"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm text-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <a
              href="/signUp"
              className="text-sm font-bold mb-6 text-left text-blue-600 hover:text-blue-400"
            >
              Already have an account? sign in now!
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
