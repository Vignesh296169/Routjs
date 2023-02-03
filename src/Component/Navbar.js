import React,{useState,useEffect,useRef} from "react";
import { BiListUl ,BiX} from "react-icons/bi";
export default function Navbar() {
    const titles=[{id:"p1",title:"HOME"},
    {id:"p2",title:"FEATURES"},
    {id:"p3",title:"SERVICE"},
    {id:"p4",title:"TESTIMONIALS"},
    
]
  const [isopen,setopen]=useState(false)
  useEffect(()=>{
    const handler =(e)=>{
       if(!reference.current.contains(e.target)){
        setopen(false)
       }
    }
    document.addEventListener("click",handler)
    return ()=>{
      document.removeEventListener("click",handler)
    } 

  },[])
  const reference=useRef()
  // let icon=isopen ?  null  : <BiListUl/>
  const handler =()=>[
    setopen(!isopen)
  ]

  

return (

  <div className="relative">
     const icon ={ isopen ? <BiListUl/> : <BiX/>  }
    <div ref={reference} className="w-full py-1 md:min-h-fit shadow-md flex justify-between fixed top-0  bg-slate-600 drop-shadow-md cursor-pointer md:items-center">
 
      <div className="px-6 relative">
         <div className="font-abc text-slate-300 font-bold text-3xl">Brand</div>
      </div>
      <span    className=" mr-3 text-3xl md:hidden"> <BiListUl  onClick={handler} className="active:scale-75"/></span>

      <ul  className={`flex ${isopen ? "ml-0":"ml-[-3000px]"} md:z-0 z-[10] shadow-md duration-500 opacity-75 ease justify-center md:static md:mt-0 mt-10  md:flex-row flex-col absolute items-center md:bg-transparent bg-slate-400 md:w-fit w-full `} >
         {titles.map(list=> <li key={list.id}  className="inline-block  md:mr-5"><a href="/"  className="hover:text-slate-500  ">{list.title}</a></li>
         )}
      </ul> 
    </div></div>
  );
}