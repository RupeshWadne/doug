import React from 'react'

const Dogs = () => {
  return (
    <div className="relative bg-[#8C6239] text-[#F9F3B9] h-[140vh] md:h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-7 m-auto w-3/4 mt-10">
      <div className=" relative">
        <p className=" absolute bottom-4 left-4 font-bold uppercase">demarcus</p>
        <img src="/demarcus.png" alt="" />
      </div>
      <div className=" relative">
        <p className=" absolute bottom-4 left-4 font-bold uppercase">doug</p>
        <img src="/dougx.png" alt="" />
      </div>
      <div className=" relative">
        <p className=" absolute bottom-4 left-4 font-bold uppercase">reggie</p>
        <img src="/reggie.png" alt="" />
      </div>
    </div>
  )
}

export default Dogs
