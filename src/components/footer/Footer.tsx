import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <div className='flex justify-between items-center px-4 pb-6'>
        
        {/* Left Section */}
        <div className='text-lg font-semibold'>
         <Image src="/images/logo-noBg.png" alt="Logo" width={100} height={50} />
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-4 text-sm flex-wrap'>
          
          <div>+91-8700416811</div>
          
          <div>deepanshu.sharma.dev1993@gmail.com</div>

          {/* Social Icons */}
          <div className='flex gap-3 justify-center items-center'>
            <Image 
              src="/images/twitter.png" 
              alt="Twitter" 
              width={20} 
              height={20} 
              className='cursor-pointer hover:opacity-70 transition'
            />
            <Image 
              src="/images/linkedin.png" 
              alt="LinkedIn" 
              width={20} 
              height={20} 
              className='cursor-pointer hover:opacity-70 transition'
            />
            <Image 
              src="/images/Vector.png" 
              alt="Website" 
              width={20} 
              height={20} 
              className='cursor-pointer hover:opacity-70 transition'
            />
          </div>

        </div>
      </div>

      {/* Border */}
      <hr className='border-t-4 border-gray-300 mx-4 mb-2'/>
    </>
  )
}

export default Footer