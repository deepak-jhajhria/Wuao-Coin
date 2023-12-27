import React from 'react'
import Coin from '../assets/images/cart/coin.svg'
import Chart from '../assets/images/cart/chart.png'
import First from '../assets/images/cart/wuaocoin.png'
import Firsttext from '../assets/images/cart/wuaocointext.png'
import second from '../assets/images/cart/e-commerce.png'
import secondtext from '../assets/images/cart/e-commercetext.png'
import third from '../assets/images/cart/official.png'
import thirdtext from '../assets/images/cart/officialtext.png'
import fourth from '../assets/images/cart/sellers.png'
import fourthtext from '../assets/images/cart/sellerstext.png'
import fivth from '../assets/images/cart/buyers.png'
import fivthtext from '../assets/images/cart/buyerstext.png'
const Project = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center pt-10 sm:pt-20 lg:pt-40 lg:min-h-[700px]'>
            <div className='w-full h-full max-lg:hidden'>
                <div className='relative pt-10 h-full left-10'>
                    <div className='absolute translate-x-1/2 translate-y-1/2 duration-300 '><img className='' src={Coin} alt="coin" /></div>
                    <div className='absolute left-[79px] top-1 duration-300 hover:scale-90 cursor-grab group'>
                        <div className=' relative'>
                            <img src={First} alt="first" />
                            <img className='group-hover:brightness-200 duration-300 absolute top-8 left-9' src={Firsttext} alt="text" />
                        </div>
                    </div>
                    <div className='absolute -left-[39px] top-[61px] duration-300 hover:scale-90 cursor-grab group'>
                        <div className=' relative'>
                            <img src={second} alt="first" />
                            <img className='group-hover:brightness-200 duration-300 absolute top-8 left-1' src={secondtext} alt="text" />
                        </div>
                    </div>
                    <div className='absolute -left-[21px] top-[51%] lg:top-[58%] duration-300 hover:scale-90 cursor-grab group'>
                        <div className=' relative'>
                            <img src={third} alt="first" />
                            <img className='group-hover:brightness-200 duration-300 absolute top-10 left-9' src={thirdtext} alt="text" />
                        </div>
                    </div>
                    <div className='absolute left-[231px] top-[51%] lg:top-[58%] duration-300 hover:scale-90 cursor-grab group'>
                        <div className=' relative'>
                            <img src={fourth} alt="first" />
                            <img className='group-hover:brightness-200 duration-300 absolute top-10 left-9' src={fourthtext} alt="text" />
                        </div>
                    </div>
                    <div className='absolute left-[308px] top-[11%] lg:top-[11%] duration-300 hover:scale-90 cursor-grab group'>
                        <div className=' relative'>
                            <img src={fivth} alt="first" />
                            <img className='group-hover:brightness-200 duration-300 absolute top-10 left-14' src={fivthtext} alt="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden max-md:order-2'>
                <img className='w-full' src={Chart} alt="" />
            </div>
            <div className='max-w-[447px] max-md:order-1 lg:ml-20'>
                <h2 className=' font-Montserrat font-bold text-[#32352C] text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'>Our Project</h2>
                <p className=' font-Montserrat font-normal text-xs sm:text-lg text-black opacity-70 mt-3 sm:mt-4 md:mt-[20px] sm:leading-8'>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
            </div>
        </div>
    )
}

export default Project
