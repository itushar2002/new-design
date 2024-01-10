import React from 'react'

const Header = () => {
    return <>
          {/* this is heading-text   */} 
        <div className='header flex flex-col items-center py-12'>
         <h1 className='text-7xl tracking-wide text-white font-semibold '>Check your financial health</h1>
          <h5 className='text-2xl mt-3 text-center text-white font-mono'>Use Weathometer to get a free report <br></br>
                card for your finances- within miniutes. </h5>
          <button className='bg-[#FB7306] text-white font-semibold rounded-full mt-3 py-3 px-14'>Get Started</button>
          </div>
          {/* // this div contains images and other elements */}
          <div className='flex justify-between'>

          {/* this is text of left of mobile image */}
             <div className='h-[120px] mt-8 ml-10 w-[400px] px-4 text-white  flex flex-col '>
              <div className='flex gap-2 items-center'>
                <i className="ri-checkbox-line  text-2xl"></i>
                <h5 className='font-md text-xl py-1 border-b-[2px] '>Expected Retirement Age</h5>
              </div>
              <div className='flex gap-2 items-center'>
                <i className="ri-checkbox-line text-2xl"></i>
                <h5 className='font-md text-xl py-1 border-b-[2px] '>Identify Mistakes</h5>
              </div>
            </div>
            <img className='h-[350px] ' src='/mobile.png'></img> 
            
            {/* below is code for text of left of mobile image */}
            
            <div className='h-[120px] mt-8 mr-10 w-[400px] flex flex-col px-4  text-white '>
              <div className='flex gap-2 items-center'>
                <i className="ri-checkbox-line  text-2xl"></i>
                <h5 className='font-md text-xl py-1 border-b-[2px] '>Personalised Road Map</h5>
              </div>
              <div className='flex gap-2 items-center'>
                <i className="ri-checkbox-line text-2xl"></i>
                <h5 className='font-md text-xl py-1 border-b-[2px] '>Tips to Improve</h5>
              </div>
            </div>
           </div>
       </>
}

export default Header
