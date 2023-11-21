import React from "react";
import Input from "../Components/Input";
const OtpVerification = () => {
  return (
    <>
      <form action="">
        <div className="flex items-center justify-center h-screen">
          {/* Your content goes here */}
          <div className="flex justify-start bg-white p-10 flex-col">
            <div className="flex text text-4xl font-semibold text-[#552583]">
              OTP Verification
            </div>
            <div className="flex flex-wrap flex-shrink  w-11/12  text-[#101920] font-semibold font-Roboto text-sm">
              <p className="mb-2  py-2 pr-5">
                We have sent and OTP to +919889898989. Please enter the code
                received to verify.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-x-4">
              <div className="border border-gray-300 rounded-md p-8 cursor-text hover:border-gray-400"></div>
              <div className="border border-gray-300 rounded-md p-8 cursor-text hover:border-gray-400"></div>
              <div className="border border-gray-300 rounded-md p-8 cursor-text hover:border-gray-400"></div>
              <div className="border border-gray-300 rounded-md p-8 cursor-text hover:border-gray-400"></div>
            </div>
            <div className="mt-6 flex">
              {" "}
              <button
                type="button"
                className="py-3 w-full rounded-md bg-[#552583] text-white text-md font-semibold"
              >
                Verify
              </button>
            </div>

            <div className="flex flex-col justify-center mt-5 gap-y-2">
              <p className="text-[#101920] underline flex justify-center cursor-pointer">Resend OTP</p>
              <p className="text-[#101920] underline flex justify-center cursor-pointer">Use Another Number</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OtpVerification;
