import React from "react";
import Input from "../Components/Input";

const SignIn = () => {
  return (
    <>
      <form action="">
        <div className="flex justify-center">
          <div className="flex items-center justify-center h-screen">
            {/* Your content goes here */}
            <div className="flex justify-start bg-white p-10 flex-col">
              <div className="flex text text-4xl font-semibold text-[#552583]">
                Sign In
              </div>
              <div className="flex flex-wrap flex-shrink  w-11/12  text-[#101920] font-semibold font-Roboto text-sm">
                <p className="mb-2  py-2 pr-5">
                  Please enter your mobile number to login. We will send an OTP
                  to verify your number.
                </p>
              </div>
              <div>
                <Input />
              </div>
              <div className="mt-6 flex">
                {" "}
                <button
                  type="button"
                  className="py-3 w-full rounded-md bg-[#552583] text-white text-md font-semibold"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
