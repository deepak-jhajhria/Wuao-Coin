import React from 'react'
import Nav from './Nav'
import WelcomeSec from './WelcomeSec'
import bgimg from "../assets/images/headerBG.png";
import bglogo from "../assets/images/logoBG.png";
import bgImage from "../assets/images/headerImgBG.png";
import Project from './Project';
const Header = () => {
  return (
    <div className='relative w-full sm:min-h-[1420px] overflow-hidden'>
      <div className='container max-w-[1140px]'>
        <Nav />
        <WelcomeSec />
        <Project />
      </div>
      <img className='absolute top-0 w-full -z-20 h-[42%] md:h-[38%] xl:h-[80%]' src={bgimg} alt="bg" />
      <img className='absolute top-0 -z-10 max-xl:hidden' src={bglogo} alt="bg" />
      <img className='absolute  xl:w-[60%] 2xl:w-[56%] max-xl:hidden xl:right-0 top-[9%] overflow-hidden translate-x-9 -z-10' src={bgImage} alt="bg" />
    </div>
  )
}

export default Header
