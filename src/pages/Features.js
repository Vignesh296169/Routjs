import React from "react";
import { GoBriefcase,GoBookmark } from "react-icons/go";
function Features() {
  return (
    <div className="px-2 py-3 mt-14">
      <div className=" font-abc py-1 text-2xl inline-block border-b-2 border-solid border-blue-500">FEATURES</div>
      <div className=" mt-2 grid grid-cols-2 gap-8 text-center py-4">
        <div className="grid place-items-center">
          <span className="text-3xl font-bold  text-blue-500  "><GoBriefcase /></span>
          <h2  className="text-xl font-landing font-bold">Lorem ipsum</h2>
          <p className="font-abc text-sm font-light">Incididunt exercitation id consequat ex proident quis nisi eiusmod voluptate aliqua aliqua.</p>
        </div>
        <div className="grid place-items-center bg-slate-400 rounded-lg shadow-md px-2 pb-2">
         <span className="text-3xl font-bold  text-blue-500 "><GoBookmark className=" md:ml-[20rem]"/></span>
          <h2  className="text-xl font-landing font-bold">Lorem ipsum</h2>
          <p className="font-abc text-sm font-light">Incididunt exercitation id consequat ex proident quis nisi eiusmod voluptate aliqua aliqua.</p>

        </div>
        <div className="grid place-content-center py-2">
          {" "}
          <h2 className="text-xl font-landing font-bold">Lorem ipsum</h2>
          <p className="font-abc text-sm font-light">Incididunt exercitation id consequat ex proident quis nisi eiusmod voluptate aliqua aliqua.</p>

        </div>
        <div className="grid place-content-center py-1">
            {/* <span className="text-3xl font-bold  text-blue-500  "> <GoDashboard className=" md:ml-[20rem]"/></span> */}
          <h2 className="text-xl font-landing font-bold">Lorem ipsum</h2>
          <p className="font-abc text-sm font-light">Incididunt exercitation id consequat ex proident quis nisi eiusmod voluptate aliqua aliqua.</p>

        </div>
      </div>
    </div>
  );
}

export default Features;
