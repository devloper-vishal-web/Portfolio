import React from "react";
import myImg from "../../assets/myImg.jpeg";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-14">
      <div className="md:w-3/5 md:pt-3 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">Hey there! I'm Vishal Chaurasia
        </h1>
        <h2 className="font-bold text-3xl my-3 mx-auto">A Front-end web developer</h2>
        <p className="text-sm md:text-2xl tracking-tight ">
          with a strong fpundation in HTML, CSS JAVASCRIPT, and a growing interest in React and Next.js I enjoy building responsive, accessible, and user-friendly web applications.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="mx-18">
        <img className="w-60 md:w-72" src={myImg} alt="" />
      </div>
    </div>
  );
};

export default Home;