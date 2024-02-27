import React from "react";
import logo from "./asserts/logo.png";
import image1 from "./asserts/1.png";
import image2 from "./asserts/2.png";
import image3 from "./asserts/3.png";
import * as Io from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";

const Layout = () => {
  const productDesc = [
    "CHEMICALS & PROCESS ",
    "POWER",
    "WATER & WASTE WATER",
    "OILS & GAS",
    "PHARMA ",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP ",
    "MARINE & DEFENCE",
    "METAL & MINING",
    " FOOD & BEVERAGE",
    "PETROCHEMICAL & REFINERIES",
    "BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ];
  return (
    <div className="container">
      <div className="lg:p-2">
        <header className=" lg:h-[100px] lg:flex justify-center items-center">
          <img src={logo} alt="Logo" className="lg:w-[30%] lg:h-[100px] " />
        </header>
        <main className="lg:flex gap-16">
          <div className="lg:w-[30%] lg:h-[600px]">
            <img
              src={image1}
              alt="image1"
              className="lg:w-[100%] lg:h-[600px] sm:h-svh "
            />
          </div>
          <div className="lg:w-[70%] lg:h-[600px] mt-5">
            <p className="font-bold">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <ul className="list-disc list-outside ml-10 font-medium my-3">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img src={image2} alt="image2" className="lg:h-[400px] w-full" />
            <p className="mt-2">
              Government of India has awarded the
              <span className="font-bold">
                "National Energy Conservation Award 2018"
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </main>
        <p className="my-7 font-medium p-2">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </p>
        <img src={image3} alt="image3" className="lg:w-[70%] mx-auto" />
        <div className="divide-y-2 flex flex-col divide-red-400">
          {" "}
          <div>
            {" "}
            <p className="text-center my-3 font-medium lg:text-[14px]">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </p>
          </div>
          <div>
            <p className="mt-4 text-center font-bold">
              C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </p>
          </div>
        </div>
        <div className="divide-x-2 font-medium lg:text-[12px] flex justify-center divide-red-400 items-center flex-wrap gap-2 my-2 p-3">
          {productDesc.map((item, idx) => {
            return (
              <div key={idx}>
                <p className="pl-2">{item}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:w-swv bg-red-500 lg:flex justify-around items-center lg:h-[100px]  text-center p-2 lg:p-0">
          <div className="flex justify-center">
            <Io.IoMdCall className="mt-1 mr-2 text-white" />
            <p className="text-white">Toll free 9626667943</p>
          </div>
          <div className="flex justify-center">
            <FaFacebook className="mt-1 mr-2 text-white w-5 h-5" />
            <p className="text-white">www.facebook.com/cripumbs</p>
          </div>
          <div className="flex justify-center">
            <TfiWorld className="mt-1 mr-2 text-white w-5 h-5" />
            <p className="text-white">www.crigroup.com</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Layout;
