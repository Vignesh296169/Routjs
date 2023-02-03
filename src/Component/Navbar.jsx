import React,{useState,useEffect,useRef} from "react";
import { BiListUl,BiX } from "react-icons/bi";
export default function Navbar() {
    const titles=[{id:"p1",title:"Home"},
    {id:"p2",title:"About"},
    {id:"p3",title:"Service"},
    {id:"p4",title:"Contact"},
    
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
    <div ref={reference} className="w-full py-1 md:min-h-fit shadow-md flex justify-between fixed bg-slate-700 drop-shadow-md cursor-pointer md:items-center">
      <div className="px-6 relative">
         <div className="font-abc text-slate-300 font-bold text-3xl">Brand</div>
      </div>
      <span   className=" mr-3 text-3xl md:hidden"> <BiListUl onClick={handler}/></span>

      <ul  className={`flex ${isopen ? "ml-0":"ml-[-3000px]"} md:z-0 z-[10] shadow-md duration-500 ease justify-center md:static md:mt-0 mt-10  md:flex-row flex-col absolute items-center md:bg-transparent bg-slate-400 md:w-fit w-full `} >
         {titles.map(list=> <li key={list.id}  className="inline-block  md:mr-5"><a href="/"  className="hover:text-slate-500  ">{list.title}</a></li>
         )}
      </ul>
    </div>
  );
}
