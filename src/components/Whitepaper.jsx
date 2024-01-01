// import BGOrangeGradient from '../assets/icons/WhitePaperBG.svg'
import Image1 from '../assets/images/whitePaperImg1.png'
import Image2 from '../assets/images/whitePaperImg2.png'
import Image3 from '../assets/svg/header2.svg'
import CommonBtn from './CommonBtn'
const Whitepaper = () => {
    return (
        <div className='bg-[url(./assets/icons/WhitePaperBG.svg)] bg-no-repeat h-full bg-cover xl:min-h-[550px] 2xl:min-h-[620px]'>
            <div className=" py-7 sm:py-8 md:py-12 lg:py-[60px] grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 mx-auto relative z-10 my-5">
                <div className='flex justify-center md:justify-start mb-4'><img className='right-0 top-[5%] z-0 max-sm:max-w-[150px] max-xl:max-w-[200px]' src={Image2} alt="img1" /></div>
                <div className='flex flex-col items-center xl:mt-10 md:col-span-3 xl:col-span-1 px-3'>
                    <h2 className=' font-Montserrat text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'>Whitepaper</h2>
                    <p className=' font-Montserrat text-white font-semibold text-center text-base sm:text-lg mt-3'>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.</p>
                    <CommonBtn customClass='mt-5 xl:mt-10 2xl:mt-[53px]' text="Read WhitePaper" />
                </div>
                <div className='flex justify-center md:justify-end'><img className='left-0 top-[5%] z-0 max-sm:max-w-[150px] max-xl:max-w-[200px]' src={Image1} alt="img1" /></div>
            </div>
                <img className='absolute left-1/3 top-1/2 z-0 max-sm:max-w-[150px] max-xl:max-w-[200px]' src={Image3} alt="img1" />
        </div>
    )
}

export default Whitepaper
