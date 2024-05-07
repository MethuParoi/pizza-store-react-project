import React from "react";

function Loader() {
  return (
    <div className="absolute bg-slate-200/20 inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className="loader"></div>
    </div>
  ); 
}

export default Loader;

// left-[14rem] sm:left-[20rem] md:left-[28rem] lg:left-[30rem] xl:left-[47rem] top-[25rem]