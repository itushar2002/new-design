import React from 'react'

const Footer = () => {
  return (
    <>
      {/* this section of contains footer (wave like div and other elem) */}
         <div className="footer absolute bottom-[2%]  w-full min-h-[50%]">
           <div className='footer-content absolute flex flex-col items-center  z-10 h-[80%] w-[60%] py-[100px] px-10 mt-[15%] ml-[22%]'>
             <h1 className='text-white text-6xl absolute z-10 top-[30%]  font-semibold'>How it works?</h1>
          <div>
          <img className='mb-2' src='/icons.png'></img>
            <div className= ' text-white text-center flex mt-[-22%] gap-[10vw] px-5 '>
              <h5 className='text-xl'>Answer few questions</h5>
              <h5 className='text-xl ml-8 '>Register using phone and OTP</h5>
              <h5 className='text-xl -mr-5' >Get report and personal roadmap</h5>
            </div>
           </div>
           </div>
         <img className='object-cover object-center absolute  w-full' src='/vector.png'></img>
        </div>
      </>
  )
}

export default Footer
