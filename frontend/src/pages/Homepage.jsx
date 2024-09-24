import React from "react";
import PhoneAdd from "../components/PhoneAdd";
import HomeCategories from "../components/HomeCategories";
import HomePhones from "../components/HomePhones";

const Homepage = () => {
  return (
    <div className="bg-slate-50">
      <PhoneAdd />
      <div className="flex flex-col  sm:w-[90%] w-full px-10  mx-auto">
        <HomeCategories />
        <HomePhones />
      </div>
    </div>
  );
};

export default Homepage;
