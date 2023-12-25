import React from 'react'

const CommonBtn = (props) => {
  return (
    <div>
      <button className={`${props.customClass} text-orange-400 hover:shadow-[6px_4px_25px_0_rgba(229,156,62,0.34)] rounded-full font-Montserrat text-base font-semibold py-[11px]  px-[21px] bg-white`}>{props.text}</button>
    </div>
  )
}

export default CommonBtn
