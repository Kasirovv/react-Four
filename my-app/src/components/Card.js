import React from 'react'

function Card(props) {
  return (
    <div className='w-[20%]'>
        <div className=' pt-[60px]'>
            <img src={props.img} />
            <h1 className='pt-[10px] font-bold text-[22px]'>{props.h1}</h1>
            <p className='pt-[10px]'> {props.p}</p>
        </div>
    </div>
  )
}

export default Card