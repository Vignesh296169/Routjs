import React ,{useState}from "react";
import { FaAngellist, FaAlignJustify } from "react-icons/fa";
function Navbar() {
  const [isopen,setopen]=useState(false)
  return (
    <div  >
      <div className="border fixed w-screen opacity-90 bg-gray-700 border-zinc-900 md:flex md:justify-between md:leading-none leading-8 md:items-center cursor-default">
        <div className="inline">
          <div className="flex ml-2 items-center justify-between">
            <span className="font-bold text-gray-500 text-2xl  p-2">
              <FaAngellist />
            </span>
            <h1 className="text-4xl font-bold text-gray-400 font-landing px-1 py-1">
              React-
            </h1>
            <span className="md:hidden px-2 text-2xl text-gray-500">
                <FaAlignJustify onClick={()=>setopen(!isopen)} className="active:scale-75 active:text-slate-200"/>
              </span>
          </div>
        </div>
        <div className=" ">
              </div>
        <div className={`  `}>
       
          {/* srtgss */}
          <div className={`border-t-2 md:border-t-0  md:static border-gray-300-700 md:block ${isopen ? "":"hidden"} `}>
            
            <ul className={`font-landing p-2 md:flex md:gap-4 text-gray-400 transition duration-200 ease-linear`}>
              <li>
                <a href="/" className="hover:text-gray-200">HOME</a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-200">FEATURES</a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-200">SERVICE</a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-200">TESTIMONIALS</a>
              </li>
            </ul>
            {/* ddgsder */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
