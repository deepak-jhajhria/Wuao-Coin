import CommonBtn from "./CommonBtn"
import Sec1Img from '../assets/images/sec1Img.png'
const WelcomeSec = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 items-end min-h-[709px]">
            <div className="max-w-[513px] mb-20">
                <p className=" font-Montserrat font-semibold text-white text-xl">Welcome to</p>
                <h1 className=" font-Montserrat font-black text-white text-[65px] mt-[5px]">The Future of E-Commerce</h1>
                <p className=" font-Montserrat font-medium text-white text-lg max-w-[384px] mt-[6px]">A multi-purpose token to improve digital sales and purchases</p>
                <div className="flex items-center gap-6 mt-10">
                    <CommonBtn customClass="" text="How To Buy" />
                    <CommonBtn customClass="uppercase text-white bg-transparent border border-white" text="Read Whitepaper" />
                </div>
            </div>
            <img className="w-full 2xl:ml-20" src={Sec1Img} alt="img" />
        </div>
    )
}

export default WelcomeSec