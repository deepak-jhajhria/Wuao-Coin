import React from 'react'
import Whitepaper from './Whitepaper'
import Nav from './Nav'
import Tokenomics from './Tokenomics'

const WhitepaperRoute = () => {
    return (
        <div>
            <div className="w-full bg-[#FFAF3B]">
                <div className="container max-w-[1140px]">
                    <Nav />
                </div>
            </div>
            <Tokenomics />
        </div>
    )
}

export default WhitepaperRoute
