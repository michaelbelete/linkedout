import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
const CreateAccount: React.FC = () => {

  const { register, formState: {errors}, handleSubmit } = useForm();
  const onSubmit = async data => {
    try {
      await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((result) => {
        console.log(result)
      });
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}  className="bg-white rounded px-2 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            {...register("fullName", { required: true })}
            placeholder="Full Name"
          />
          <p className="text-red-600 text-sm mt-2">{errors.fullName && "Full Name is required"}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <p className="text-red-600 text-sm mt-2">{errors.email && "Email is required"}</p>

        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            {...register("password", { required: true })}
          />
          <p className="text-red-600 text-sm mt-2">{errors.password && "Password is required"}</p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Company Name"
            {...register("company", { required: true })}
          />
          <p className="text-red-600 text-sm mt-2">{errors.company && "Company is required"}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-16 mr-16 rounded-3xl focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <Link href="/signin">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Already a member?
            </a>
          </Link>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
