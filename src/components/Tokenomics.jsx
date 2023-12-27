import ImageGroup from '../assets/images/TokenomicsImg.png'

const Tokenomics = () => {
  return (
    <div className=' my-6 sm:mt-10 md:mt-16 lg:my-[114px]'>
      <div className='max-w-[992px] mx-auto'>
        <h2 className='font-Montserrat text-[#32352C] font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'>Tokenomics</h2>
        <img className='mt-[22px]' src={ImageGroup} alt="image" />
      </div>
    </div>
  )
}

export default Tokenomics
