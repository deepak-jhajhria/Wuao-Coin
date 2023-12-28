import React from 'react'

const CommonBtn = (props) => {
  return (
    <div>
      <button className={`${props.customClass} text-orange-400 hover:shadow-[1px_0_10px_1px_rgba(254,255,254,0.8)] duration-300  hover:scale-95 rounded-full font-Montserrat text-xs sm:text-base font-semibold py-[11px]  px-[21px] bg-white`}>{props.text}</button>
    </div>
  )
}

export default CommonBtn
