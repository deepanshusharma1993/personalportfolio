import Footer from '@/components/footer/Footer'
import Nav from '@/components/nav/Nav'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="w-[80%] mx-auto mt-10 flex flex-col min-h-screen">

      <Nav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
        <h1 className='hero-title'>
          For any question please mail us:
        </h1>

        <Link 
          href="mailto:deepanshu.sharma.dev1993@gmail.com"
          className='hero-name-gradient hover:underline  md:text-3xl  font-bold'
        >
          deepanshu.sharma.dev1993@gmail.com
        </Link>
      </div>

      <Footer />

    </div>
  )
}

export default Page