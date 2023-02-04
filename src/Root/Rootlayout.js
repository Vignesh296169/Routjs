import React from 'react'
import Navpage from '../pages/Navpage'
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (
      <>
       <Navpage/>
       <Outlet/>
      </>
  )
}

export default Rootlayout