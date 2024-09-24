import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex justify-start items-center'>
      <p className='font-medium text-[35px]'>{text1}</p>
      <p className='ml-4 font-medium text-gray-500'>{text2}</p>
      <hr className='border-0 rounded-3xl bg-gray-400 h-1 w-10 ml-3 ' />
    </div>
  )
}

export default Title
