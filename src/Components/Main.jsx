import React from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { LiaKeyboard } from "react-icons/lia";
const Main = () => {
  return (
    <div className="text-start font-sans ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-1 m-20 ">
          <div>
            <div className="mt-20 ml-10">
              <h5 className="font-bold text-3xl">Premium video meetings.</h5>
              <h5 className="font-bold text-3xl">Now free for everyone.</h5>
            </div>
            <div className="mt-10 ml-10">
              <p className="">
                We're-engineered the service we build for secure business{" "}
              </p>
              <p>
                meetings,Google Meet,to make it free and available for all.{" "}
              </p>
            </div>

            <div className="flex items-center ">
              <button className=" flex items-center text-center cursor-pointer ml-10 mt-10 bg-blue-600 border text-white p-2">
                <span className="text-2xl">
                  {" "}
                  <MdOutlineVideoCall />
                </span>
                <span className=" text-sm">New Meeting</span>
              </button>
              <button className="flex items-center">
                <label className="flex items-center mt-10 ml-8 border border-slate-500 p-2 ">
                  <span>
                    <LiaKeyboard />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter link or code "
                    className="ml-2 outline-none"
                  />
                </label>
                <span className="ml-3 mt-10 text-slate-300">Join</span>
              </button>
            </div>
          </div>
          <p className="ml-10 mt-10 cursor-pointer"><span className="text-blue-800 hover:underline">Learn more</span> about Google meet</p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Main;
