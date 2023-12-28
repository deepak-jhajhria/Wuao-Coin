import { useEffect, useState } from "react"
import CommonBtn from "./CommonBtn"

const PublicSec = () => {
    const [count, setcount] = useState(59)
    useEffect(() => { 
        if (count >0) {
            setTimeout(()=>{
                setcount((count)=>count-1)
            },1000)
            return () => { console. clear(); }
        }
    });
    return (
        <div className='bg-[url(./assets/icons/publicSecBg.svg)] bg-no-repeat bg-cover py-10 md:py-14 lg:py-[85px]'>
            <div className="max-w-[530px] mx-auto flex flex-col items-center">
                <h2 className=" font-Montserrat text-center font-bold text-xl sm:text-2xl md:text-[30px] text-white">Public Sale 5% in ERC20 & BEP20, 100% for the Community</h2>
                <div className="flex mt-5 sm:mt-8 md:mt-10 lg:mt-14">
                    <div className="flex flex-col">
                        <p className="py-2 px-3 sm:py-[10px] sm:px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]  flex items-center">86</p>
                        <p className="text-base sm:text-lg font-medium font-Montserrat mt-[5px] text-center text-white">Days</p>
                    </div>
                    <span className="flex font-Montserrat font-normal  text-xl sm:text-3xl md:text-4xl lg:text-[50px]  text-white mx-2 sm:mx-[14px] mt-2">:</span>
                    <div className="flex flex-col">
                        <p className="py-2 px-3 sm:py-[10px] sm:px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]  flex items-center">05</p>
                        <p className="text-base sm:text-lg font-medium font-Montserrat mt-[5px] text-center text-white">Hours</p>
                    </div>
                    <span className="flex font-Montserrat font-normal  text-xl sm:text-3xl md:text-4xl lg:text-[50px]  text-white mx-2 sm:mx-[14px] mt-2">:</span>
                    <div className="flex flex-col">
                        <p className="py-2 px-3 sm:py-[10px] sm:px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]  flex items-center">20</p>
                        <p className="text-base sm:text-lg font-medium font-Montserrat mt-[5px] text-center text-white">Minute</p>
                    </div>
                    <span className="flex font-Montserrat font-normal  text-xl sm:text-3xl md:text-4xl lg:text-[50px]  text-white mx-2 sm:mx-[14px] mt-2">:</span>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <p className="py-2 px-3 sm:py-[10px] sm:px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px]  flex items-center">{count}</p>
                        </div>
                        <p className="text-base sm:text-lg font-medium font-Montserrat mt-[5px] text-center text-white">Second</p>
                    </div>
                </div>
                <CommonBtn customClass="mt-5 sm:mt-7 md:mt-10 lg:mt-[50px]" text="BUY WUAO" />
            </div>
        </div>
    )
}

export default PublicSec
