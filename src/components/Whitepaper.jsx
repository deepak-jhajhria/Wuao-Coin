// import BGOrangeGradient from '../assets/icons/WhitePaperBG.svg'
import Image1 from '../assets/images/whitePaperImg1.png'
import Image2 from '../assets/images/whitePaperImg2.png'
import CommonBtn from './CommonBtn'
const Whitepaper = () => {
    return (
        <div className='bg-[url(./assets/icons/WhitePaperBG.svg)]'>
            <div className="grid grid-cols-7 py-[60px]">
                <img className='col-span-2' src={Image1} alt="img1" />
                <div className='flex flex-col items-center mt-10 col-span-3'>
                    <h2 className=' font-Montserrat text-white font-bold text-center text-[22px] xs:text-2xl sm:text-[35px] lg:text-[50px] '>Whitepaper</h2>
                    <p className=' font-Montserrat text-white font-semibold text-center text-lg mt-3'>We want you to know our vision we leave you our whitepaper and now be a part of the digital transformation.</p>
                    <CommonBtn customClass='mt-[53px]' text="Read WhitePaper" />
                </div>
                <img className='col-span-2' src={Image2} alt="img1" />
            </div>
        </div>
    )
}

export default Whitepaper
