import React from 'react'

const Navbar = () => {
    return (
        <div className="flex bg-[#2F1313] px-20 justify-between">
            <div className="flex justify-between items-center w-1/4">
                <img className="cursor-pointer" src="/navlogo.png" alt="" />
                <p className="cursor-pointer">About</p>
                <p className="cursor-pointer">Contact Us</p>
            </div>
            <div className="flex justify-around items-center w-1/6">
            <img className="w-8 cursor-pointer" src="/xlogo.png" alt="" />
            <img className="w-8 cursor-pointer" src="/Tlogo.png" alt="" />
            <img className="w-8 cursor-pointer" src="/vector.png" alt="" />
            </div>
        </div>
    )
}

export default Navbar
