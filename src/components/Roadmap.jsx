import roadmapImg from '../assets/images/roadmapImg.png'
import first from '../assets/images/roadmapellipse.png'
import second from '../assets/images/roadmapellipse2.png'
import third from '../assets/svg/roadmap3.svg'
const Roadmap = () => {
    const RoadmapItems = [
        {
            BackGround: "bg-gradient-to-r from-[#EFB93B] to-[#EFB93B]",
            Number: "01",
            heading: "Organizational concept (creations)",
            paddingLeft: "pl-0"
        },
        {
            BackGround: "bg-gradient-to-r from-[#E0480A] to-[#E0480A]",
            Number: "02",
            heading: "Directional Process (Actions)",
            paddingLeft: "2xl:pl-[10px]"
        },
        {
            BackGround: "bg-[#E0480A]",
            Number: "03",
            heading: "Operational Development (technical team)",
            paddingLeft: "2xl:pl-[10px]"
        },
        {
            BackGround: "bg-[#364EC6]",
            Number: "04",
            heading: "Strategic Opportunities (alliances)",
            paddingLeft: "2xl:pl-4"
        },
        {
            BackGround: "bg-gradient-to-r from-[#6A3DAD] to-[#6A3DAD]",
            Number: "05",
            heading: "Stakeholders (benefits)",
            paddingLeft: "2xl:pl-4"
        },
        {
            BackGround: "bg-gradient-to-r from-[#ED5C83] to-[#ED5C83]",
            Number: "06",
            heading: "Human Identity (social contribution)",
            paddingLeft: "2xl:pl-4"
        },
    ]

    const Roadmapcomponents = RoadmapItems.map((listing) =>
        <div className={`${listing.BackGround} duration-300 hover:scale-105 hover:shadow-lg rounded-xl px-3 py-2`}>
            <p className=' font-Montserrat text-white font-bold text-xl sm:text-2xl md:text-3xl opacity-50'>{listing.Number}</p>
            <h2 className={`${listing.paddingLeft} font-Montserrat text-white font-bold text-base xl:text-lg 2xl:text-base  sm:text-lg lg:text-xl mt-5 mb-[15px]`}>{listing.heading}</h2>
        </div>
    )
    return (
        <div className='relative'>
            <div className='container max-w-[1380px] mt-4 sm:mt-10 md:mt-16 lg:mt-[100px]'>
                <div className='max-w-[672px] flex flex-col text justify-center items-center mx-auto'>
                    <h2 className='font-Montserrat text-[#32352C] font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] '>RoadMap</h2>
                    <p className='font-Montserrat text-black opacity-70 font-normal text-center text-base sm:text-lg mt-[18px]'>Knowing our values, understanding the business idea and then, gradually, presenting the plans to the public is our way of doing things.</p>
                    <img className='mt-4 sm:mt-8 md:mt-10 lg:mt-[75px]' src={roadmapImg} alt="roadmap" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 2xl:gap-8 my-4 sm:my-6 md:my-10 lg:my-14">{Roadmapcomponents}</div>
            </div>
            <div className=' absolute -top-[17%] left-0 max-sm:hidden max-lg:h-1/2 -z-10'><img src={first} alt="frist" /></div>
            <div className=' absolute -bottom-[17%] right-0 max-sm:hidden max-lg:h-1/2 -z-10'><img src={second} alt="frist" /></div>
            <div className=' absolute -top-[2%] right-[5%] max-md:hidden max-lg:h-1/2 -z-10'><img src={third} alt="frist" /></div>
        </div>
    )
}

export default Roadmap
