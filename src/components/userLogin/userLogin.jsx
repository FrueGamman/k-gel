import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { backEndPoints, empireToken } from "../../utils/enum";
import { useForm } from "react-hook-form";
import api from "../../utils/api-call";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export function DialogWithForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const schema = yup.object({
    ["username"]: yup
      .string()
      .required()
      .min(4, "username length should be at least 4 characters"),
    ["password"]: yup
      .string()
      .required()
      .min(8, "Password length should be at least 3 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = async (data) => {
    setLoading(true);
    const databody = {
      email: data.username,
      full_name: data.full_name,
      address: data.address,
      telephone: data.telephone,
      username: data.username,
      password: data.password,
      user_type: "Customer",
    };
    try {
      const response = await api.post(`${backEndPoints.SIGNUP}`, databody)
      if (response) {
        setTimeout(() => {
          navigate("/login")
        }, 4000)
        toast.success('Account has been created successfully')
      }
      // console.log(response);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast("Fail to create account");
    }
  };
  return (
    <>
      <div className=" bg-slate-50">
        <ToastContainer />
        <div className="flex flex-col items-center justify-center px-6 py-24  mx-auto  lg:py-12">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-yellow-600 md:text-2xl  text-center">
                Create account in Empiremenswear Shop
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit((data) => handleLogin(data))}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5   outline-none  dark:placeholder-gray-400   "
                    placeholder="name@company.com"
                    {...register("username", {
                      required: "Email field is required",
                    })}
                  />
                  <span className="text-red-600 text-xs">
                    {errors.username && errors.username.message}
                  </span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Names
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  outline-none  dark:placeholder-gray-400   "
                    placeholder="Name"
                    {...register("full_name", {
                      required: "full_name field is required",
                    })}
                  />
                  <span className="text-red-600 text-xs">
                    {errors.full_name && errors.full_name.message}
                  </span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Telephone
                  </label>
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  outline-none dark:placeholder-gray-400   "
                    placeholder="phone_number"
                    {...register("telephone", {
                      required: "telephone field is required",
                    })}
                  />
                  <span className="text-red-600 text-xs">
                    {errors.telephone && errors.telephone.message}
                  </span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  outline-none dark:placeholder-gray-400   "
                    placeholder="Location"
                    {...register("address", {
                      required: "address field is required",
                    })}
                  />
                  <span className="text-red-600 text-xs">
                    {errors.address && errors.address.message}
                  </span>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-600 ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-200 focus:border-primary-400 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "Password field is required",
                    })}
                  />
                  <span className="text-red-600 text-xs">
                    {errors.password && errors.password.message}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300   dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>

                </div>
                <button className="w-full outline-none text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  {loading ? (<span className="flex justify-center place-content-center items-center gap-3"><div role="status">
                    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div><span>Processing ....</span></span>) : "Sign up"}
                </button>
                <p>
                  <Link
                    to={"/login"}
                    className="text-sm mt-4 font-medium text-primary-600 hover:underline dark:text-blue-800 "
                  >
                    Already have an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
