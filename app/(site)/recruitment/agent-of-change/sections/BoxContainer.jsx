import React from 'react'

function BoxContainer({ number, text }) {
  return (
    <div className='flex flex-col w-full'>
        <div className='text-amber-500 text-left ms-4 text-4xl max-h-10'>
            { number }
        </div>
        <div className='flex bg-[#1c2b4f] rounded-xl p-10  text-white text-lg min-h-50 items-center text-justify'>
            { text }
        </div>
    </div>
  )
}

export default BoxContainer