import Routelayout from "./Root/RootLay";
import Homecontent from "./pages/Homecontent";
import Features from "./pages/Features";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
function App() {
    const result =createBrowserRouter([
     {path:"/",
      element:<Routelayout/>,
      children:[ {path:"",element:<Homecontent/>},
      {path:"features",element:<Features/>}]
     
    }
    


    ])
  return <div>
    <RouterProvider router={result}/>
    
  </div>
   
      
  

  
    
 
}

export default App;
