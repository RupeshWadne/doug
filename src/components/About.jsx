import React from 'react'

const About = () => {
    return (
        <div className="relative md:h-full h-[110vh]">
            <img className="w-full h-full object-cover" src="/aboutbg.png" alt="" />
            <h1 className="absolute -translate-x-1/2 left-1/2 top-48 md:top-64 text-5xl font-extrabold">About</h1>
            <div className="absolute p-4 md:w-fit w-full -translate-x-1/2 left-1/2 top-64 md:top-96">
                <h3 className="font-extrabold text-center text-sm md:text-lg">Yo, this is Doug the Pug, the degen doggo behind $DOUG coin. Me and my homies Reggie and Demarcus, we&apos;re just some strays tryna make it off the streets. We lost it all on some shitcoins, but now we got a new plan - $DOUG. Our mission? To get this meme coin to the moon so we can pay off our debts, get some grub, and party with the bitches. We ain&apos;t got no exchange listings yet, but we&apos;re counting on the community to help us out. Join the pack, dont jeet and let&apos;s make $DOUG the next big thing in crypto!</h3>
            </div>
            <img className="z-30 absolute right-0 -top-36" src="/doug1.png" alt="" />
            <img className="z-30 absolute md:w-fit w-2/3 right-0 -bottom-20" src="/doug2.png" alt="" />
            <img className="z-30 absolute md:w-fit w-2/5 left-0 -bottom-10" src="/doug3.png" alt="" />
        </div>
    )
}

export default About
