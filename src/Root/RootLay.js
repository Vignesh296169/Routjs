import Navpage from "../pages/Navpage";
import { Outlet } from "react-router-dom";

function Routelayout(){


    return <>
        <Navpage/>
        <Outlet/>
    </>
}
export default Routelayout