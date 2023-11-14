import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#2563EB] text-[#2563EB] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#2528eb] hover:text-white-500 transition-all hover:drop-shadown-lg ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
