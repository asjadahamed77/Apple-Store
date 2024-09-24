import React from "react";
import phone_image from "../assets/categories/phones.png";
import airpods from "../assets/categories/airpods.png";
import accessories from "../assets/categories/accessories.png";
import mac from "../assets/categories/mac.png";
import ipad from "../assets/categories/ipad.png";
import watch from "../assets/categories/watch.png";
import { Link } from "react-router-dom";
const HomeCategories = () => {
  return (
    <div className="flex sm:gap-12  gap-8 overflow-x-scroll py-[50px]">
      <Link to={"/iphones"}>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[250px] min-h-[250px] text-center bg-white p-4 shadow-lg rounded-[20px] cursor-pointer ">
          <img
            className=" w-full object-cover hover:scale-110 duration-300"
            src={phone_image}
            alt=""
          />
          <p className="font-semibold hover:scale-110 duration-300">PHONES</p>
        </div>
      </Link>
      <Link to={"/watch"}>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[250px] min-h-[250px] text-center bg-white p-4 shadow-lg rounded-[20px] cursor-pointer ">
          <img
            className="w-full object-cover hover:scale-110 duration-300"
            src={watch}
            alt=""
          />
          <p className="font-semibold hover:scale-110 duration-300">WATCHES</p>
        </div>
      </Link>
      <Link to={"/ipad"}>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[250px] min-h-[250px] text-center bg-white p-4 shadow-lg rounded-[20px] cursor-pointer ">
          <img
            className="w-full object-cover hover:scale-110 duration-300"
            src={ipad}
            alt=""
          />
          <p className="font-semibold hover:scale-110 duration-300">IPADS</p>
        </div>
      </Link>
      <Link to={"/airpods"}>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[250px] min-h-[250px] text-center bg-white p-4 shadow-lg rounded-[20px] cursor-pointer ">
          <img
            className="w-full object-cover hover:scale-110 duration-300"
            src={airpods}
            alt=""
          />
          <p className="font-semibold hover:scale-110 duration-300">AIRPODS</p>
        </div>
      </Link>
      <Link to={"/accessories"}>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[250px] min-h-[250px] text-center bg-white p-4 shadow-lg rounded-[20px] cursor-pointer ">
          <img
            className="w-full object-cover hover:scale-110 duration-300"
            src={accessories}
            alt=""
          />
          <p className="font-semibold hover:scale-110 duration-300">
            ACCESSORIES
          </p>
        </div>
      </Link>
      <Link to={"/mac"}>
        <div className="flex flex-col justify-center items-center gap-2 min-w-[250px] min-h-[250px] text-center bg-white p-4 shadow-lg rounded-[20px] cursor-pointer ">
          <img
            className="w-full object-cover hover:scale-110 duration-300"
            src={mac}
            alt=""
          />
          <p className="font-semibold hover:scale-110 duration-300">MACBOOKS</p>
        </div>
      </Link>
    </div>
  );
};

export default HomeCategories;
