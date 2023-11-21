import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col">
      <div className="relative mt-1 rounded-md shadow-sm ">
        <div className="absolute inset-y-0 left-0 flex items-center ">
        
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="h-full  rounded-md border-transparent bg-transparent py-0  pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option className="p-4 flex">IN</option>
           
          </select>
        </div>

        <div className="flex justify-center">
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            className="block w-full rounded-md  p-3 border border-gray-300 pl-24  sm:text-sm"
            placeholder="10 digit mobile number"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
