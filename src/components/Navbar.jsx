'use client'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="flex bg-[#2F1313] md:px-20 px-4 justify-between items-center">
        <div className="flex justify-between items-center w-1/4">
          <img className="cursor-pointer" src="/navlogo.png" alt="" />
          <p className="cursor-pointer hidden md:flex">About</p>
          <p className="cursor-pointer hidden md:flex">Contact Us</p>
        </div>
        <div className="md:flex hidden justify-around items-center w-1/6">
          <img className="w-8 cursor-pointer" src="/xlogo.png" alt="" />
          <img className="w-8 cursor-pointer" src="/TelegramLogo.png" alt="" />
          <img className="w-8 cursor-pointer" src="/Vector.png" alt="" />
        </div>
        {toggle ? (
          <p
            onClick={() => setToggle(false)}
            className="w-8 cursor-pointer flex md:hidden"
          >
            x
          </p>
        ) : (
          <img
          src="/burger-bar.png"
            onClick={() => setToggle(true)}
            className="w-8 cursor-pointer flex md:hidden invert"
          />
        )}
      </div>
      {!toggle ? (
        <></>
      ) : (
        <div className="flex border-t-2 border-black bg-[#2F1313] flex-col justify-between p-4 gap-4 w-full h-full">
          <p className="cursor-pointer flex">About</p>
          <p className="cursor-pointer flex">Contact Us</p>
          <div className="flex justify-around items-center w-1/2">
            <img className="w-8 cursor-pointer" src="/xlogo.png" alt="" />
            <img
              className="w-8 cursor-pointer"
              src="/TelegramLogo.png"
              alt=""
            />
            <img className="w-8 cursor-pointer" src="/Vector.png" alt="" />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
