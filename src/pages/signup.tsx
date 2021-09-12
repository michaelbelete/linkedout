import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import CreateAccount from "../../components/CreateAccount";
import Link from "next/link";
import { checkLoggedIn } from "../../lib/navGuard";

const SignUp: React.FC = () => {
  checkLoggedIn() //navguard redirect to home if loggedin
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex flex-col items-center justify-center h-screen bg-white shadow-md">
          <Link href="/">
            <Image src="/images/logo.png" width={200} height={60} alt="logo" />
          </Link>
          <h1 className="text-3xl font-bold py-4">Create Account</h1>
          <CreateAccount />
        </div>
        {/* left side */}
        <div className="flex items-center justify-center h-screen">
          <Image
            src="/images/signup.png"
            height={350}
            width={600}
            alt="login image"
          />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
