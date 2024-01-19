import React from 'react'

const Hero = () => {
    return (
        <div className="relative md:h-[210vh] h-[110vh]">
            <img className="w-full h-full absolute" src="/bg.png" alt="" />
            <img className="w-full h-full absolute" src="/gradient.png" alt="" />

            <div className="flex flex-col top-32 md:top-60 items-center -translate-x-1/2 left-1/2 absolute md:w-2/3">
                <p className="uppercase md:text-9xl text-5xl text-center font-extrabold">Doug the dog</p>
                <p className="uppercase md:text-2xl text-lg mt-6 md:font-bold">First AI dog on solana !</p>
                <div className="mt-12 flex flex-col w-screen md:w-fit md:flex-row">
                    <button className="bg-[#AE6427] py-3 px-6 rounded-lg border-2 border-[#2F1313] mx-4 font-bold mb-4 md:mb-0 md:mr-5">Buy Now</button>
                    <button className="bg-[#AE6427] py-3 px-6 rounded-lg border-2 border-[#2F1313] mx-4 font-bold">Telegram</button>
                </div>
            </div>
            <img className="z-10 left-1/2 -translate-x-1/2 bottom-0 w-4/5 absolute" src="/doug.png" alt="" />
        </div>
    )
}

export default Hero
