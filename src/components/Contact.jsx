import React, { useRef, useState } from "react";
import Loading from "./Loading";

export default function Contact() {
  const url1 = "https://node-emailer-43nd.onrender.com/getReady";
  const url2 = "https://node-emailer-43nd.onrender.com/sendMsg";

  const firstChange = useRef(false);
  const formRef = useRef();
  const [vis, setVis] = useState(false);

  const handleChange = async (e) => {
    if (!firstChange.current) {
      //its a first change pinging server to start
      firstChange.current = true;

      try {
        let response = await fetch(url1);
        if (response.ok) console.log("Server is up...");
        else console.log("Server is down..");
      } catch (e) {
        console.log("Server is down...");
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is submitted...");
    
    setVis(true);

    try {
       
      let response = await fetch(url1);
      if (response.ok) console.log("Server is up...");
      else console.log("Server is down..");
    } catch (e) {
      console.log("Server is down...");
    }

    setVis(false);
    formRef.current.submit();
  };

  return (
    <>
      {vis && <Loading />}
      <div
        name="contact"
        className="w-full md:h-screen pt-20 bg-gradient-to-b from-black to-gray-800 text-white"
      >
        <div className="max-w-screen-lg w-full h-full flex flex-col justify-end mx-auto p-5 ">
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact Me
            </p>
            <p className="py-6">Submit the form below to contact me</p>
          </div>

          <div className="flex items-center" onChange={handleChange}>
            <form
              ref={formRef}
              action={url2}
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 my-2 rounded-md text-white focus:outline-none"
              />

              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
              ></textarea>

              <button
                type="submit"
                className="px-6 self-start py-3 my-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
              >
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
