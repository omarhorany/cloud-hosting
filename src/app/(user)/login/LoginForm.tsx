"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(email)) return toast.error("Invalid Email Format");
    if (password.trim() === "") return toast.error("Password is required");

    console.log("Form submitted!");
    console.log({ email, password });
    router.push("/");
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col space-y-4">
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          autoComplete="username"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-all"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
