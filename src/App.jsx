import { useState } from "react";

import "./App.css";
import profile from "./assets/Ellipse 1.png";
import img1 from "./assets/Rectangle 30.png";
import img2 from "./assets/Rectangle 32.png";
import img3 from "./assets/Rectangle 34.png";

function App() {
  

  return (
    <>
      <div className="font-san">
        {/* nav componet */}
        <nav className="bg-white  text-black capitalize font-san font-bold">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className=" text-4xl  pt-3">jhon</div>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-bold flex flex-row ">
                <li>
                  <a href="#" className="block text-2xl  py-2 px-3 ">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-2xl  py-2 px-3 ">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-2xl py-2 px-3 ">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* landing componet */}
        <div className="h-[90vh] text-black ">
          <div className="flex flex-row items-center  justify-center ">
            <div className="flex flex-col w-[50%]   items-start  justify-center">
              <div className="text-5xl  font-bold ps-36  mt-48">
                Hi, I am John,
              </div>
              <div className="text-5xl font-bold ps-36  mt-6">
                Creative Technologist
              </div>
              <div className=" text-2xl  ps-36 mt-6">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet
              </div>
              <div className=" text-3xl ms-36 mt-6 p-4 bg-[#FF6464] capitalize  font-semibold">
                <a href=""></a>download resume
              </div>
            </div>
            <div className="flex flex-col w-[50%] justify-center items-center  mt-48">
              <img src={profile} alt="" className="h-80 w-80" />
            </div>
          </div>
        </div>

        {/* recent post */}
        <div className="h-[50vh] text-black pt-6 bg-[#eff7f9]">
          <div className="flex flex-row justify-between">
            <div className="ps-36 text-3xl font-medium">Recent Posts</div>
            <div className="pe-36 text-xl text-blue-500"> View all</div>
          </div>
          <div className="flex flex-row items-center ms-36 mb-36 mt-6 gap-3 ">
            <div className="flex flex-col w-[50%]     justify-center bg-white">
              <div className="text-2xl  font-bold   mt-6 p-2">
                {" "}
                Making a design system from scratch
              </div>
              <div className="flex flex-row gap-3 items-start">
                <div className="text-2xl font-bold ps-36  mt-6">
                  12 Feb 2020
                </div>
                <div className="text-2xl mt-6">Design, Pattern</div>
              </div>
              <div className="text-2xl p-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="flex flex-col w-[50%] justify-center bg-white">
              <div className="text-2xl  font-bold   mt-6 p-2">
                {" "}
                Creating pixel perfect icons in Figma
              </div>
              <div className="flex flex-row gap-3 items-start">
                <div className="text-2xl font-bold ps-36  mt-6">
                  12 Feb 2020
                </div>
                <div className="text-2xl mt-6">Design, Pattern</div>
              </div>
              <div className="text-2xl p-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>
        {/* featured work */}
        <div className=" h-[140h]">
          <div className="mt-6 mb-6 ms-36 text-3xl  font-semibold">
            Featured works
          </div>
          <div className="flex flex-col ms-36 me-36 gap-4 ">
            <div className="flex flex-row gap-6 ">
              <img src={img1} alt="" className="w-[25%]" />
              <div className="flex flex-col w-[75%] gap-2">
                <div className="text-4xl font-bold">Designing Dashboard</div>
                <div className="flex flex-row">
                  <div className="text-white bg-black rounded-2xl  text-xl  font-medium ps-2 pe-2">
                    2020
                  </div>
                  <div className="text-3xl ms-4 text-slate-400">Dashboard</div>
                </div>
                <div className="text-2xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="border-b-2 border-b-black"></div>
            <div className="flex flex-row gap-3">
              <img src={img2} alt="" className="w-[25%]" />
              <div className="flex flex-col w-[75%] gap-2">
                <div className="text-4xl font-bold">Designing Dashboard</div>
                <div className="flex flex-row">
                  <div className="text-white bg-black rounded-2xl text-xl  font-medium ps-2 pe-2">
                    2020
                  </div>
                  <div className="text-3xl ms-4 text-slate-400">Illustration</div>
                </div>
                <div className="text-2xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="border-b-2 border-b-black"></div>
            <div className="flex flex-row gap-3">
              <img src={img3} alt="" className="w-[25%]" />
              <div className="flex flex-col w-[75%] gap-2">
                <div className="text-4xl font-bold">Designing Dashboard</div>
                <div className="flex flex-row">
                  <div className="text-white bg-black rounded-2xl  text-xl  font-medium ps-2 pe-2">
                    2020
                  </div>
                  <div className="text-3xl ms-4 text-slate-400">Typography</div>
                </div>
                <div className="text-2xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="border-b-2 border-b-black"></div>
          </div>
        </div>
        {/* social media */}
        <div className="h-[30vh] ">
          <div className="flex flex-row items-end justify-center gap-3  mt-48">
            <div className="h-12 w-12 bg-black"></div>
            <div className="h-12 w-12 bg-black"></div>
            <div className="h-12 w-12 bg-black"></div>
          </div>
          <div className="text-xl text-center mt-6">Copyright ©2020 All rights reserved </div>
        </div>
      </div>
    </>
  );
}

export default App;
