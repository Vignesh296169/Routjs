
import React from 'react'
import { useParams } from 'react-router-dom'

function LearnmorePage() {
    const params=useParams()
  return (
    <div className='mt-16'>
     <div className='py-4 px-4 grid grid-cols-1 place-items-center'>
     <h1 className='text-3xl font-light border-b-2 border-blue-500'>MORE detail</h1>
        <p>Eos ea no lorem vero et et et invidunt dolores, at voluptua sadipscing dolor at lorem. Kasd lorem at nonumy.</p>
       <p>{params.learnmore}</p>
 
     </div>
     
    </div>
  )
}

export default LearnmorePage

