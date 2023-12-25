import React from 'react'
import Chartimg from '../assets/images/chartProject.png'
const Project = () => {
    return (
        <div className='grid grid-cols-2 items-center mt-40'>
            <img src={Chartimg} alt="chart" />
            <div className='max-w-[447px]'>
                <h2 className=' font-Montserrat font-bold text-[#32352C] text-[50px]'>Our Project</h2>
                <p className=' font-Montserrat font-normal text-base text-black opacity-70 mt-[18px]'>Wuaocoin is the first project in the TechFi category that allows users multiple options to have utility and usability in the ecosystem, its time to change the way of seeing the purchases and sales of products and services within an multilateral electronic commerce platform using crypto technology.</p>
            </div>
        </div>
    )
}

export default Project
