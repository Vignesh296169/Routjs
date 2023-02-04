import React from "react";
import { FaDraftingCompass,FaAppStore,FaBattleNet} from "react-icons/fa";

function Servicepage() {
  return (
    <div className="mt-14 px-3 py-5 h-full ">
      <div className=" py-5 px-4 grid grid-cols-1 place-items-center gap-6">
        <h1 className="text-4xl font-landing border-b-4 border-blue-600">OUR SERVICES</h1>
        <p className="text-sm font-abc">Aute do deserunt minim culpa velit fugiat magna est.</p>
        <section className="bg-sky-400 py-2 px-2 rounded-lg"><FaDraftingCompass className="  text-white "/></section>
        <h3 className="font-landing text-2xl">voluptate consectetur.</h3>
        <p className="text-sm font-abc" > Voluptate et culpa minim adipisicing sint sunt aliqua consectetur aute aliquip sunt cillum. Mollit irure ex et sit veniam excepteur aliquip id officia nisi. Amet aliqua esse ipsum non consectetur minim ea. Tempor labore eiusmod laborum mollit. Officia mollit sunt Lorem quis dolore quis ea. Reprehenderit nulla cillum enim adipisicing excepteur dolor dolor.</p>
        <section className="bg-sky-400 py-2 px-2 rounded-lg"><FaAppStore className="  text-white "/></section>
        <h3 className="font-landing text-2xl">  lorem  justo.</h3>
        <p className="text-sm font-abc">Sed stet kasd duo lorem consetetur amet et, elitr tempor et ipsum kasd nonumy. Eos accusam sadipscing justo dolor gubergren.</p>
        <h3 className="font-landing text-2xl">  lorem  justo.</h3>
         <section className="bg-sky-400 py-2 px-2 rounded-lg"><FaBattleNet className="  text-white "/></section>
        <p className="text-sm font-abc">Sed stet kasd duo lorem consetetur amet et, elitr tempor et ipsum kasd nonumy. Eos accusam sadipscing justo dolor gubergren.</p>
      
      
      </div>
    </div>
  );
}

export default Servicepage;
