import ImageGroup from '../assets/images/TokenomicsImg.png'
import first from '../assets/images/TokenomicsImg1.png'
import second from '../assets/images/TokenomicsImg2.png'
import third from '../assets/svg/tokenomins3.svg'
const Tokenomics = () => {
  return (
    <div className=' my-6 sm:mt-10 md:mt-16 lg:my-[114px] relative'>
      <div className='max-w-[992px] mx-auto'>
        <h2 className='font-Montserrat text-[#32352C] font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'>Tokenomics</h2>
        <div className="relative flex justify-center"><img className='mt-[22px] w-[60%] sm:w-[80%]' src={ImageGroup} alt="imageGroup" />
          <p className=' font-Montserrat text-[#32352C] top-[30%] left-[18%] lg:left-[20%] text-xs sm:text-xl font-bold absolute'>Team</p>
          <p className=' font-Montserrat text-[#32352C] top-[30%] right-0 text-xs sm:text-xl font-bold absolute max-w-[100px] sm:max-w-[170px]'>Buyers/holders/ community</p>
          <p className=' font-Montserrat text-[#32352C] bottom-[15%] sm:bottom-[30%] left-[5%] sm:left-[1%] lg:left-[2%] text-[10px] sm:text-xl font-bold absolute max-w-[100px] sm:max-w-[170px]'>Subdivided into 5% Founders</p>
          <p className=' font-Montserrat text-[#32352C] bottom-0 left-[35%]  text-[10px] sm:text-xl font-bold absolute max-w-[100px] sm:max-w-[170px]'>Workers</p>
        </div>
      </div>
      <div className=' absolute -top-[17%] left-0 max-sm:hidden -z-10 max-lg:h-1/2'><img src={first} alt="frist" /></div>
      <div className=' absolute -bottom-[17%] right-0 max-sm:hidden -z-10 max-lg:h-1/2'><img src={second} alt="frist" /></div>
      <div className=' absolute bottom-[2%] left-[5%] max-lg:hidden -z-10'><img src={third} alt="frist" /></div>
    </div>
  )
}

export default Tokenomics
