import CommonBtn from "./CommonBtn"

const PublicSec = () => {
    return (
        <div className='bg-[url(./assets/icons/publicSecBg.svg)] py-[85px]'>
            <div className="max-w-[530px] mx-auto flex flex-col items-center">
                <h2 className=" font-Montserrat text-center font-bold text-[30px] text-white">Public Sale 5% in ERC20 & BEP20, 100% for the Community</h2>
                <div className="flex mt-14">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <p className="py-[10px] px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  flex items-center">86</p>
                            <span className="flex font-Montserrat font-normal  text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  text-white mx-[14px]">:</span>
                        </div>
                        <p className="text-lg font-medium font-Montserrat mt-[5px] ml-[31px] text-white">Days</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <p className="py-[10px] px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  flex items-center">05</p>
                            <span className="flex font-Montserrat font-normal  text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  text-white mx-[14px]">:</span>
                        </div>
                        <p className="text-lg font-medium font-Montserrat mt-[5px] ml-[23px] text-white">Hours</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <p className="py-[10px] px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  flex items-center">20</p>
                            <span className="flex font-Montserrat font-normal  text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  text-white mx-[14px]">:</span>
                        </div>
                        <p className="text-lg font-medium font-Montserrat mt-[5px] ml-[23px] text-white">Minute</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <p className="py-[10px] px-5 border border-white rounded-xl text-white font-Montserrat font-bold text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px]  flex items-center">37</p>
                        </div>
                        <p className="text-lg font-medium font-Montserrat mt-[5px] text-center text-white">Second   </p>
                    </div>
                </div>
                <CommonBtn customClass="mt-[50px]" text="BUY WUAO" />
            </div>
        </div>
    )
}

export default PublicSec
