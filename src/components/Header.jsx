import React from 'react'
import Nav from './Nav'
import WelcomeSec from './WelcomeSec'
import bgimg from "../assets/images/headerBG.png";
import bglogo from "../assets/images/logoBG.png";
import bgImage from "../assets/images/headerImgBG.png";
import header1 from "../assets/svg/header1.svg";
import header2 from "../assets/svg/header2.svg";
import header3 from "../assets/svg/header3.svg";
import header4 from "../assets/svg/header4.svg";
import header5 from "../assets/images/headerPositionright.png";
import Project from './Project';
const Header = () => {
  return (
    <div className='relative w-full sm:min-h-[1420px] '>
      <div className='container max-w-[1140px]'>
        <Nav />
        <WelcomeSec />
        <Project />
      </div>
      <img className='absolute top-0 w-full -z-30 h-[42%] md:h-[38%] xl:h-[75%]' src={bgimg} alt="bg" />
      <img className='absolute top-0 -z-20 max-xl:hidden' src={bglogo} alt="bg" />
      <img className='absolute  xl:w-[60%] 2xl:w-[54%] max-xl:hidden xl:right-0 top-[8%]  -z-20' src={bgImage} alt="bg" />
      {/* position svg  */}
      <img className=' absolute top-[10%] left-1/2 md:left-[43%] max-sm:hidden -z-10' src={header1} alt="svg" />
      <img className=' absolute top-[48%] left-[30px] -z-10' src={header2} alt="svg" />
      <img className=' absolute top-[52%] left-[38%] -z-10' src={header3} alt="svg" />
      <img className=' absolute top-[60%] right-[5%] -z-10' src={header4} alt="svg" />
      <img className=' absolute top-[60%] right-0 -z-10 max-sm:w-28' src={header5} alt="svg" />
    </div>
  )
}

export default Header
