'use client'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
const page = () => {
  return (
    <>
      
        <div className=' page h-[140vh] relative w-full bg-gradient-to-r from-blue-700 to-cyan-500'>
        <Header/>
        <Footer/>
      </div>
    </>
  )
}

export default page

/*  <img className='h-[350px] absolute top-[28%]' src='/mobile.png'></img>   */