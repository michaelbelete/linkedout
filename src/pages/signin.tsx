import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Login from "../../components/Login";
import Link from "next/link";
import { checkLoggedIn } from "../../lib/navGuard";
const SignIn: React.FC = () => {
  checkLoggedIn()
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center justify-center h-screen">
          <Image
            src="/images/login.png"
            height={350}
            width={600}
            alt="login image"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-white shadow-md">
          <Link href="/">
            <Image src="/images/logo.png" width={200} height={60} alt="logo" />
          </Link>
          <h1 className="text-3xl font-bold py-4">Log In</h1>
          <Login />
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
