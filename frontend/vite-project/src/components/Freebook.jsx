import React from 'react'
import list from "../../public/list.json"

const Freebook = () => {
   const filterData = list.filter((data) => data.category ==="free");
   console.log(filterData)
   
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-8 '>
    <h1 className='text-black font-bold text-xl pb-2'>free offered courses</h1>
     <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius tempore, ex suscipit accusamus asperiores quam aliquid id aspernatur culpa nulla quae explicabo iure mollitia voluptate rerum veritatis dicta voluptatem consequatur.</p>
   </div>
   </>
  )
}

export default Freebook
