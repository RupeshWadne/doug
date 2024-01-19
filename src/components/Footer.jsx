import React from 'react'

const Footer = () => {
  return (
    <div className="relative bg-[#8C6239] text-[#F9F3B9] h-[80vh] md:h-[60vh] flex justify-center mt-10">
      <div className="flex flex-col items-center">
        <img className="cursor-pointer mb-10 w-32" src="/navlogo.png" alt="" />
        <div className="flex justify-between w-48">
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
        <p className="mt-7">Contract Address:</p>
        <img
          className="cursor-pointer mt-32 w-[90vw]"
          src="/Divider.png"
          alt=""
        />
        <div className="flex md:flex-row flex-col items-center gap-5 justify-between w-full mt-7">
          <p>© 2024 $DOUG. All rights reserved.</p>
          <div className="flex items-center justify-between w-40">
            Powered by
          <img
            className="cursor-pointer w-16 h-4"
            src="/stem.png"
            alt=""
          /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
