"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
export default function SignInPage() { 
  const [userName, seUserName] = useState("");
  const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md w-96 space-y-4">
          <h1 className="text-xl font-bold">Sign In</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => seUserName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    );
}