import React from "react";

const Signup = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
        <div className="mb-6 w-full text-center text-2xl font-semibold">
          Sign up
        </div>

        {/* Username */}
        <label htmlFor="username" className="mb-1 inline-block text-gray-300">
          Username*
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />

        {/* Full Name */}
        <label htmlFor="fullName" className="mb-1 inline-block text-gray-300">
          Full Name*
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />

        {/* Email */}
        <label htmlFor="email" className="mb-1 inline-block text-gray-300">
          Email*
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />

        {/* Password */}
        <label htmlFor="password" className="mb-1 inline-block text-gray-300">
          Password*
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />

        {/* Avatar */}
        <label htmlFor="avatar" className="mb-1 inline-block text-gray-300">
          Avatar*
        </label>
        <input
          id="avatar"
          type="file"
          placeholder="Enter avatar URL"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />

        {/* Cover Image */}
        <label htmlFor="coverImg" className="mb-1 inline-block text-gray-300">
          Cover Image 
        </label>
        <input
          id="coverImg"
          type="file"
          placeholder="Enter cover image URL"
          className="mb-4 rounded-lg border bg-transparent px-3 py-2"
        />

        {/* Submit Button */}
        <button className="mt-4 bg-[#ae7aff] px-4 py-3 text-black">
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
