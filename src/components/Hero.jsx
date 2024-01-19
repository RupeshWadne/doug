import React from 'react'

const Hero = () => {
    return (
        <div className="relative h-[210vh]">
            <img className="w-full absolute" src="/bg.png" alt="" />
            <img className="w-full absolute" src="/gradient.png" alt="" />

            <div className="flex flex-col top-60 items-center -translate-x-1/2 left-1/2 absolute w-2/3">
                <p className="uppercase text-9xl font-extrabold">Doug the dog</p>
                <p className="uppercase text-2xl mt-6 font-bold">First AI dog on solana !</p>
                <div className="mt-12 flex">
                    <button className="bg-[#AE6427] py-3 px-6 rounded-lg border-2 border-[#2F1313] font-bold mr-5">Buy Now</button>
                    <button className="bg-[#AE6427] py-3 px-6 rounded-lg border-2 border-[#2F1313] font-bold">Telegram</button>
                </div>
            </div>
            <img className="z-10 left-1/2 -translate-x-1/2 top-[40rem] w-4/5 absolute" src="/doug.png" alt="" />
        </div>
    )
}

export default Hero
