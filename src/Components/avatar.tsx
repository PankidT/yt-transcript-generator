import React from "react";
import profile from "../stock/profile.jpg";
import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="avatar">
      <div className="w-72 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
        <Image src={profile} alt="Picture of the author" />
      </div>
    </div>
  );
};
