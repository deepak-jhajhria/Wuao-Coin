import React from 'react'
import Nav from './Nav'
import WelcomeSec from './WelcomeSec'
import bgimg from "../assets/images/headerBG.png";
import Project from './Project';
const Header = () => {
  return (
    <div className=' relative w-full min-h-[1420px] bg-no-repeat bg-cover max-xl:bg-[#FFA13B]'>
      <div className='container max-w-[1140px]'>
        <Nav />
        <WelcomeSec />
        <Project />
      </div>
      <img className='absolute hidden xl:block top-0 w-full -z-10 h-[80%]' src={bgimg} alt="bg" />
    </div>
  )
}

export default Header
