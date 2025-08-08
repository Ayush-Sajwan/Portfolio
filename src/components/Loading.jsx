import React, { useRef } from "react";
import gif from "../assets/server.gif";

export default function Loading() {
  return (
    <div
      name="loading"
      className="fixed inset-0 bg-black-800/15 backdrop-blur-md"
    >
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-5 ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="md:w-2/5 rounded-xl w-4/5 overflow-hidden">
            <img src={gif} alt="Loading.." className="w-full"></img>
          </div>

          <div className="md:w-2/5 w-4/5 text-white text-center mt-10 text-2xl font-mono font-bold animate-pulse">
            Starting Server......
            <br />
            Please Wait !
          </div>
        </div>
      </div>
    </div>
  );
}
