import React from "react";
import iphone_pro_video from "../assets/videos/iPhone.mp4";
import mobile from "../assets/videos/MobileIphone.mp4";
const PhoneAdd = () => {
  return (
    <div className="flex justify-center">
      <video
        className="w-full h-full hidden sm:block"
        src={iphone_pro_video}
        autoPlay
        loop
        muted
      ></video>
      <video className="sm:hidden " src={mobile} autoPlay loop muted></video>
    </div>
  );
};

export default PhoneAdd;
