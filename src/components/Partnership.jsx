import PartnershipLogo from '../assets/images/Partnershiplogo.png'

const Partnership = () => {
    return (
        <div className='bg-[url(./assets/icons/Partnershipbg.svg)]'>
            <div className='max-w-[453px] mx-auto pt-12 lg:pt-16 pb-10 lg:pb-14 px-3'>
                <h2 className='font-Montserrat text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] '>Partnership</h2>
                <img className=' mt-5 sm:mt-8 md:mt-10 lg:mt-12' src={PartnershipLogo} alt="logo" />
            </div>
        </div>
    )
}

export default Partnership
