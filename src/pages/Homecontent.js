import React from "react";
// import images from "./unsplash.jpg"
function Homecontent() {
  // const backgroundImagestyle={
  //     backgroundImage:`url{"${images}"}`,
  //     backgroundSize:"cover",
  //     backgroundposition: 'center'
  // }
  const partone =[
    {id:"01",title:'Minim nostrud '},
    {id:"02",title:' do ex consequat'},
    {id:"03",title:'Minim nostrud'},
    {id:"04",title:' laboris id labore'},



]
const parttwo =[
  {id:"05",title:'consectetur fugiat. '},
  {id:"06",title:' ex consequat'},
  {id:"07",title:'Minim nostrud'},
  {id:"08",title:' laboris labore'},



]
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
              <button className="font-light font-landing text-center border px-3 py-1 active:text-slate-500 active:skew-x-6 bg-gradient-to-tr rounded-lg from-cyan-500 to-indigo-700">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-2 py-4">
        <div className="grid grid-col-1 gap-4">
        <h3 className=" text-xl font-semibold font-landing border-b-4 w-1/12  border-solid border-blue-600" >ABOUT US</h3>
        <p className="font-light font-landing ">
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
        </div>
        <div className=" p-1 mt-1 grid grid-cols-2 gap-2">
         <div>
          {partone.map((items)=>{
           return <div key={items.id}><span className="rounded-md bg-blue-400 mr-2 text-sm text-blue-200">{items.id}</span>{items.title}</div>
          })}
         </div>
         <div>
           {parttwo.map((items)=>{
            return <div key={items.id}> <span className="rounded-md bg-blue-400 mr-2 text-sm text-blue-200">{items.id}</span>{items.title}</div>
           })}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Homecontent;
