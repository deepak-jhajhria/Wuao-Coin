import ImageGroup from '../assets/images/TokenomicsImg.png'

const Tokenomics = () => {
  return (
    <div className=' my-6 sm:mt-10 md:mt-16 lg:my-[114px]'>
      <div className='max-w-[992px] mx-auto'>
        <h2 className='font-Montserrat text-[#32352C] font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'>Tokenomics</h2>
        <div className="relative flex justify-center"><img className='mt-[22px] w-[60%] sm:w-[80%]' src={ImageGroup} alt="image" />
          <p className=' font-Montserrat text-[#32352C] top-[30%] left-[10%] lg:left-[20%] text-xs sm:text-xl font-bold absolute'>Team</p>
          <p className=' font-Montserrat text-[#32352C] top-[30%] right-0 text-xs sm:text-xl font-bold absolute max-w-[100px] sm:max-w-[170px]'>Buyers/holders/ community</p>
          <p className=' font-Montserrat text-[#32352C] bottom-[15%] sm:bottom-[30%] left-[5%] sm:left-[1%] lg:left-[2%] text-[10px] sm:text-xl font-bold absolute max-w-[100px] sm:max-w-[170px]'>Subdivided into 5% Founders</p>
          <p className=' font-Montserrat text-[#32352C] bottom-0 left-[35%]  text-[10px] sm:text-xl font-bold absolute max-w-[100px] sm:max-w-[170px]'>Workers</p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
