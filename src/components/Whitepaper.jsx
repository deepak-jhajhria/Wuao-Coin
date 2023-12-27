// import BGOrangeGradient from '../assets/icons/WhitePaperBG.svg'
import Image1 from '../assets/images/whitePaperImg1.png'
import Image2 from '../assets/images/whitePaperImg2.png'
import CommonBtn from './CommonBtn'
const Whitepaper = () => {
    return (
        <div className='bg-[url(./assets/icons/WhitePaperBG.svg)] bg-no-repeat h-full bg-cover relative xl:min-h-[550px] 2xl:min-h-[620px]'>
            <div className="xl:max-w-[450px] 2xl:max-w-[577px] py-7 sm:py-8 md:py-12 lg:py-[60px] mx-auto relative z-10 my-5">
                <div className='flex flex-col items-center xl:mt-10 col-span-3'>
                    <h2 className=' font-Montserrat text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'>Whitepaper</h2>
                    <p className=' font-Montserrat text-white font-semibold text-center text-base sm:text-lg mt-3'>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.</p>
                    <CommonBtn customClass='mt-5 xl:mt-10 2xl:mt-[53px]' text="Read WhitePaper" />
                </div>
            </div>
                <img className='absolute right-0 top-[5%] z-0 max-xl:hidden' src={Image2} alt="img1" />
                <img className='absolute left-0 top-[5%] z-0 max-xl:hidden' src={Image1} alt="img1" />
        </div>
    )
}

export default Whitepaper
