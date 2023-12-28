import React from 'react'
import BG1 from '../assets/icons/BGBenefit1.svg'
import BG2 from '../assets/icons/BGbenefit2.svg'
import BG3 from '../assets/icons/BGBenefit3.svg'
import Iteme1 from '../assets/images/benefitimg1.png'
import Iteme2 from '../assets/images/benefitimg2.png'
import Iteme3 from '../assets/images/benefitimg3.png'
import Iteme4 from '../assets/svg/benefit.svg'
const Benefit = () => {
    const CardValue = [
        {
            id: 1,
            "bgImage": BG1,
            "Image1": Iteme1,
            "Alt": "Items",
            "Para": "Services, Products and Community All in one place! "
        },
        {
            id: 2,
            "bgImage": BG2,
            "Image1": Iteme2,
            "Alt": "Items",
            "Para": "Selling in crypto will no longer be complicated, it will be safe and reliable. "
        },
        {
            "bgImage": BG3,
            "Image1": Iteme3,
            "Alt": "Items",
            "Para": "Buying and getting a real discount is possible? Join and check it out. "
        }
    ]
    const CardComponents = CardValue.map((listing) => (
        <div className='w-full h-full lg:my-[60px]' key={listing.id}>
            <div style={{ backgroundImage: `url(${listing.bgImage})` }} className='w-full flex items-end justify-center bg-no-repeat bg-center h-auto'>
                <img src={listing.Image1} alt={listing.Alt} />
            </div>
            <p className=' font-Montserrat text-xs sm:text-base font-normal opacity-70 text-black max-w-[300px] mx-auto mt-2 sm:mt-5 text-center'>{listing.Para}</p>
        </div>
    ))
    return (
        <div className=' relative'>
            <div className='container max-w-[1140px]'>
                <div className='mt-5 sm:mt-9 lg:mt-[42px]'>
                    <h2 className=' font-Montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[50px]  text-[#32352C] font-bold text-center'>Benefits</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 items-center gap-5 mt-4 sm:mt-8 md:mt-12 lg:mt-[60px]'>
                        {CardComponents}
                    </div>
                </div>
            </div>
            <div className=' absolute bottom-4 left-4 max-2xl:hidden -z-10'><img src={Iteme4} alt="" /></div>
        </div>
    )
}

export default Benefit
