import React from "react";
import { RxAllSides} from "react-icons/rx";
const response = [{ id: "p1", title: "FEATURES" },
  { id: "p2", title: "ABOUT" },
  { id: "p3", title: "SERVICES" },
  { id: "p4", title: "TESTIMONIALS" },
];
 const content = response.map((items)=>{
  return <div key={items.id} className="md:mr-5 mr-1 hover:text-gray-400">{items.title}</div>
 })

function Navbar() {
  return <div className="font-abc fixed w-screen  items-center  flex justify-between  cursor-pointer rounded-md shadow-sm bg-[rgb(217,172,245,0.7)]">
    <div className="flex items-center gap-2 py-3 md:px-3 px-1">
    <span>
      <RxAllSides className="text-2xl text-slate-400"/>
    </span>
  <h1 className="text-3xl active:text-gray-400 text-gray-500">Brand-V</h1>
    </div>
   <ul className="m-2">
    <li className="text-gray-500 md:flex md:flex-row md:mr-0 mr-2  flex-col md:leading-none leading-6 pr-3">
    {content}
    </li>
   

   </ul>

  </div>;
}

export default Navbar;
