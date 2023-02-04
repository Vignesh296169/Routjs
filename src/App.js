import React from "react";
import Rootlayout from "./Root/Rootlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Erropage/Error";
import Homecontent from "./pages/Homecontent"
import Features from "./pages/Features";
import Servicepage from "./pages/Servicepage";
import Testimonial from "./pages/Testimonial";
import LearnmorePage from "./pages/LearnmorePage";
function App() {
  const routing = createBrowserRouter([
    { path: "/", element: <Rootlayout />, errorElement: <Error />,children:[
       
     {path:"",element:<Homecontent/>},
     {path:"/:learnmore",element:<LearnmorePage/>},
     {path:"features",element:<Features/>},
     {path:"services",element:<Servicepage/>},
      {path:"testimonial",element:<Testimonial/>}
    ] },
  ]);
  return (
    <div>
      <RouterProvider router={routing} />
    </div>
  );
}

export default App;
