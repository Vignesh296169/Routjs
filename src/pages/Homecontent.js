import React from "react";
// import images from "./unsplash.jpg"
function Homecontent() {
  // const backgroundImagestyle={
  //     backgroundImage:`url{"${images}"}`,
  //     backgroundSize:"cover",
  //     backgroundposition: 'center'
  // }
  return (
    <div>
      <div className="bg-pack-train bg-no-repeat bg-cover bg-blend-darken">
        <div className="bg-gradient-to-tr from-black">
          <div className=" px-11 py-16 text-center grid place-content-center mt-2 text-slate-300">
            <div className=" max-w-xl py-3 px-4 grid place-items-center grid-cols-1 gap-3">
              <h1 className="text-4xl font-landing font-bold ">
                HERE WE ARE LANDING PAGE
              </h1>
              <p className="font-landing font-medium text-sm">
                Non non consectetur d tempor adipagna aute fugiat culpa. Aliqua
                velit id incididunt ipsum proident anim anim irure amet aliqua
                incididunt. Pariatur in consequat adipisicing ad commodo.
              </p>
              <button className="font-light font-landing text-center border px-3 py-1 hover:text-slate-500 active:skew-x-6 bg-gradient-to-tr rounded-lg from-cyan-500 to-indigo-700">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-500">
        <h3>ABOUT US</h3>
        <p>
          In exercitation aliquip commodo nostrud consectetur nostrud deserunt
          non veniam qui irure pariatur sint. Ipsum dolore cupidatat velit
          voluptate occaecat sit fugiat ipsum. Sint ut anim mollit elit. Lorem
          ex veniam amet pariatur dolore laboris.Ipsum ea minim occaecat fugiat
          nisi mollit ex. Labore officia aliquip elit nisi commodo do nisi
          proident Lorem minim nulla ullamco aliqua. Duis amet elit exercitation
          in ipsum do sunt. Aliquip amet laborum sint aliqua exercitation mollit
          qui fugiat duis culpa labore minim eiusmod dolor.
        </p>
        <h4>Why Choose Us?</h4>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Homecontent;
