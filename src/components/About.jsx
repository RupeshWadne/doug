import React from 'react'

const About = () => {
    return (
        <div className="relative">
            <img className="w-full" src="/aboutbg.png" alt="" />
            <h1 className="absolute -translate-x-1/2 left-1/2 top-1/3 text-5xl font-extrabold">About</h1>
            <div className="absolute -translate-x-1/2 left-1/2 top-96">
                <h3 className="font-extrabold text-center text-lg">Yo, this is Doug the Pug, the degen doggo behind $DOUG coin. Me and my homies Reggie and Demarcus, we're just some strays tryna make it off the streets. We lost it all on some shitcoins, but now we got a new plan - $DOUG. Our mission? To get this meme coin to the moon so we can pay off our debts, get some grub, and party with the bitches. We ain't got no exchange listings yet, but we're counting on the community to help us out. Join the pack, dont jeet and let's make $DOUG the next big thing in crypto!</h3>
            </div>
        </div>
    )
}

export default About