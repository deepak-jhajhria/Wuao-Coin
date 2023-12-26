import PartnershipLogo from '../assets/images/Partnershiplogo.png'

const Partnership = () => {
  return (
    <div className='bg-[url(./assets/icons/Partnershipbg.svg)]'>
      <div className='max-w-[453px] mx-auto pt-16 pb-14'>
        <h2 className='font-Montserrat text-white font-bold text-center text-[50px]'>Partnership</h2>
        <img className=' mt-12' src={PartnershipLogo} alt="logo" />
      </div>
    </div>
  )
}

export default Partnership
