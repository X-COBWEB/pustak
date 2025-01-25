import React from "react";

function Voucher() {
  return (
    <div className=" relative flex m-auto mt-10 max-w-md mb-4 md:mb-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg bg-white group transition-all duration-300 ease-in-out  ">
      <a href="#" className="block">
        <div className="group-hover:blur-sm border-200-red">
          <div className="relative w-full h-24 mb-4 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
              className="absolute top-0 left-0 w-auto h-auto max-w-full max-h-full  transition-all duration-300"
            />
          </div>

          <div className="flex flex-col space-y-3 w-md p-3 rounded-lg">
            {/* <!-- Voucher Tag and Date Section --> */}
            <div className="flex justify-between items-start space-x-3">
              <span className="inline-flex items-center px-3 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full capitalize">
                Voucher
              </span>
              <div className="font-medium text-sm text-gray-600 ml-2">
                Valid Till:{" "}
                <span className="font-bold text-gray-900">
                  31st December 2025
                </span>
              </div>
            </div>

            {/* <!-- Voucher Title Section --> */}
            <p className="font-display text-xl font-bold leading-tight text-gray-900">
              <span className="link-underline link-underline-black text-cyan">
                voucher for KFC
              </span>
            </p>

            {/* <!-- Discount Info Section --> */}
            <div className="text-md font-semibold text-blue-500">
              30% off on all items
            </div>

            {/* <!-- Valid Till Section --> */}
          </div>
        </div>
        {/* <button className=" z-10 group-hover:block hidden blur:hidden  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"> */}
        <button className="absolute inset-0 m-auto group-hover:opacity-100 opacity-0 transition-all duration-60 ease-in-out w-32 h-12 bg-blue-500 text-white rounded-md">
          Claim Voucher
        </button>
      </a>
    </div>
  );
}

export default Voucher;
