import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";

const Header: React.FC = (props) => {
  const [session, loading] = useSession()
  let auth;
  if(loading) {
    auth = null
  }else if(!session) {
    auth = (
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="pt-4 text-xl text-gray-600 md:flex md:justify-between md:pt-0">
          <li>
            <Link href="/">
              <a className="md:p-4 py-2 block hover:text-red-800 font-bold">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a className="md:p-4 py-2 block hover:text-red-800">Sign In</a>
            </Link>
          </li>
          <li>
            <Link href="signup">
              <a className="md:p-4 py-2 block hover:text-red-800" href="#">
                Create Account
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    auth = (
      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="pt-4 text-xl text-gray-600 md:flex md:justify-between md:pt-0">
          <li>
            <a
              className="md:p-4 py-2 block hover:text-red-800 font-bold"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-red-800" href="#">
              Logged in as { session.user.email }
            </a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-red-800" onClick={() => signOut()}>
              logout
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <header>
        <nav
          className="flex flex-wrap items-center justify-between w-full py-5 md:py-4 px-32 text-lg text-gray-700 bg-white shadow
       "
        >
          <div>
            <a href="#">
              <Image
                src="/images/logo.png"
                width={180}
                height={50}
                alt="Linkedout"
              />
            </a>
          </div>
          {auth}
        </nav>
      </header>
    </>
  );
};

export default Header;
