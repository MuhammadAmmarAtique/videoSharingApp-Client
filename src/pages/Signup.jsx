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
    formState: { errors, isLoading },
  } = useForm();

  const dispatch = useDispatch()
  const { isAuthenticated } =  useSelector((state) => state.user)
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
        <form onSubmit={handleSubmit(handleRegister)} >
          {/* Username */}
          <label htmlFor="username" className="mb-1 inline-block text-gray-300">
            Username*
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
            {...register('username', { required: true })}
          />
          {errors.username && <p>Username is must required.</p>}

          {/* Full Name */}
          <label htmlFor="fullName" className="mb-1 inline-block text-gray-300">
            Full Name*
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
            {...register('fullName', { required: true })}
          />
          {errors.fullName && <p>Full Name is must required.</p>}


          {/* Email */}
          <label htmlFor="email" className="mb-1 inline-block text-gray-300">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
            {...register('email', { required: true })}
          />
          {errors.email && <p>Email is must required.</p>}


          {/* Password */}
          <label htmlFor="password" className="mb-1 inline-block text-gray-300">
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password is must required.</p>}


          {/* Avatar */}
          <label htmlFor="avatar" className="mb-1 inline-block text-gray-300">
            Avatar*
          </label>
          <input
            id="avatar"
            type="file"
            placeholder="Enter avatar URL"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
            {...register('avatar', { required: true })}
          />
          {errors.avatar && <p>Avatar is must required.</p>}


          {/* Cover Image */}
          <label htmlFor="coverImg" className="mb-1 inline-block text-gray-300">
            Cover Image
          </label>
          <input
            id="coverImg"
            type="file"
            placeholder="Enter cover image URL"
            className="mb-4 rounded-lg border bg-transparent px-3 py-2"
            {...register('coverImage')}

          />

          {/* Submit Button */}
          <button type="submit" className="mt-4 bg-[#ae7aff] px-4 py-3 text-black">
            {isLoading ? "Registering" : "Register"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Signup;
