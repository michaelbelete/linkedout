import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

const Body: React.FC = () => {
  const [session, loading] = useSession();
  let auth;
  if (loading) {
    auth = (
      <div className="text-center lg:p-40 md:p-20 sm:p-10 ">
        <h1 className="text-3xl font-bold">Loading please wait...</h1>
      </div>
    );
  } else if (!session) {
    auth = (
      <>
        <div className="text-center lg:p-40 md:p-20 sm:p-10 ">
          <h1 className="text-5xl font-bold">
            Welcome to Linked<span className="text-red-800">out</span>
          </h1>
          <p className="text-xl pt-5">
            Linkedout is an employment-oriented online service that operates via
            websites and mobile apps. the platform is mainly used for
            professionals to record their company name so they don’t forget it
          </p>
          <div className="flex justify-center mt-8">
            <div>
              <Link href="/signup">
                <button className="bg-red-800 hover:bg-red-500 text-white text-xl font-bold lg:py-3 lg:px-12 px-6 py-3 rounded-3xl mr-5">
                  Join Us
                </button>
              </Link>
            </div>
            <div>
              <Link href="/signin">
                <button className="border-4 border-red-800 hover:bg-gray-300 text-black text-xl font-bold py-2 px-10 rounded-3xl mr-10">
                  Already a Member
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    auth = (
      <>
        <div className="text-center lg:p-40 md:p-20 sm:p-10 ">
          <h1 className="text-5xl font-bold">
            Welcome, <span className="text-red-800">{ session.user.name }</span>
          </h1>
          
          <h1 className="text-3xl pt-5 font-bold">
            You work for <span className="text-red-800">Company</span>
          </h1>
        </div>
      </>
    );
  }

  return <div className="flex items-center justify-center">{auth}</div>;
};

export default Body;
