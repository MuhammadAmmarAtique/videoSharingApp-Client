import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../store/slices/userSlice";

const Login = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    dispatch(LoginUser(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
        <div className="mb-6 w-full text-center text-2xl font-semibold">
          Login
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className="mt-4 w-full bg-[#ae7aff] px-4 py-3 text-black rounded-lg"
          >
            {loading ? "Login..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
