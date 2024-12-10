import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/userSlice"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm();

  const dispatch = useDispatch()
  const { isAuthenticated, isLoading } =  useSelector((state) => state.user)
  const navigateTo = useNavigate()

  const handleRegister = (data) => {   
    const formData = new FormData();

    // Append text fields
    formData.append('username', data.username);
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('password', data.password);
  
    // Append file fields
    if (data.avatar[0]) formData.append('avatar', data.avatar[0]);
    if (data.coverImage[0]) formData.append('coverImage', data.coverImage[0]);
     
   dispatch(registerUser(formData))
  }

  useEffect(()=>{
    if (isAuthenticated) {
      navigateTo("/")
    }
  }, [dispatch , isAuthenticated])

  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
    <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
      <div className="mb-6 w-full text-center text-2xl font-semibold">
        Sign up
      </div>

      {/* Integrated React Hook Form */}
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="mb-1 block text-gray-300">
            Username*
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="w-full rounded-lg border bg-transparent px-3 py-2"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">
              Username is required.
            </p>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="mb-1 block text-gray-300">
            Full Name*
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-lg border bg-transparent px-3 py-2"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              Full Name is required.
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1 block text-gray-300">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border bg-transparent px-3 py-2"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">Email is required.</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="mb-1 block text-gray-300">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border bg-transparent px-3 py-2"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">Password is required.</p>
          )}
        </div>

        {/* Avatar */}
        <div>
          <label htmlFor="avatar" className="mb-1 block text-gray-300">
            Avatar*
          </label>
          <input
            id="avatar"
            type="file"
            className="w-full rounded-lg border bg-transparent px-3 py-2"
            {...register("avatar", { required: true })}
          />
          {errors.avatar && (
            <p className="mt-1 text-sm text-red-500">Avatar is required.</p>
          )}
        </div>

        {/* Cover Image */}
        <div>
          <label htmlFor="coverImg" className="mb-1 block text-gray-300">
            Cover Image
          </label>
          <input
            id="coverImg"
            type="file"
            className="w-full rounded-lg border bg-transparent px-3 py-2"
            {...register("coverImage")}
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={isLoading}
          type="submit"
          className="mt-4 w-full bg-[#ae7aff] px-4 py-3 text-black rounded-lg"
        >
          {isLoading ? "Registering" : "Register"}
        </button>
      </form>
    </div>
  </div>
);
};

export default Signup;
