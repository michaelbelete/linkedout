import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { useState } from "react";

const Login: React.FC = () => {
  const [loginError, setLoginError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}/`,
      redirect: false,
    })
      .then(function (result) {
        if (result.error !== null) {
          if (result.status === 401) {
            setLoginError(
              "Your email/password combination was incorrect. Please try again"
            );
          } else {
            setLoginError(result.error);
          }
        } else {
          router.push(result.url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded px-2 pt-6 pb-8 mb-4"
      >
        <h1 className="text-lg text-red-600 w-96 pb-4 text-justify">{loginError}</h1>
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
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <p className="text-red-600 text-sm mt-2">
            {errors.email && "Email is required"}
          </p>
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
            {...register("password", { required: true })}
            placeholder="******************"
          />
          <p className="text-red-600 text-sm mt-2">
            {errors.password && "Password is required"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-16 mr-16 rounded-3xl focus:outline-none focus:shadow-outline"
            type="submit"
            value="login"
          />
          <Link href="/signup">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Don't have an account?
            </a>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
