import React from 'react'
import Lottie from "lottie-react";
import emptyAnimation from "./EmptyAnimation.json"

const NoData = () => {
  return (
    
    <div className=" w-full mt-14 flex flex-col justify-center items-center">
      <h1 className=" dark:text-MainWhite text-MainDarkColor text-xl">
        There is no Contact Lists.{" "}
        
      </h1>
      <div className=" w-[30%]">
      <Lottie animationData={emptyAnimation} />
      </div>
    </div>
  );
}

export default NoData