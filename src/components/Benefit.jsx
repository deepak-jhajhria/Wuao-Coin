import React from 'react'
import Item1Bg from '../assets/images/logo.png'
import Iteme1 from '../assets/images/logo.png'
const Benefit = () => {
    const CardItems = [
        {
            id:1,
            bgImage: Item1Bg,
            Image1: Iteme1,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        },
        {
            id:2,
            bgImage: Item1Bg,
            Image1: Iteme1,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        },
        {
            bgImage: Item1Bg,
            Image1: Iteme1,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        }
    ]
    const CardsItems = CardItems.map((listing) => (
        <div key={listing.id}>
            <div style={{ backgroundImage:`url(${listing.bgImage})` }}>
                <img src={listing.Image1} alt={listing.Alt} />
            </div>
            <p>{listing.Para}</p>
        </div>
    ))
    return (
        <div className='mt-10'>
            <h2 className=' font-Montserrat text-[50px] text-[#32352C] font-bold text-center'>Benefits</h2>
            <div className='grid grid-cols-3 items-center gap-5'>
                <CardsItems />
            </div>
        </div>
    )
}

export default Benefit
